import { existsSync, readdirSync, readFileSync, statSync } from 'node:fs';
import { join, relative } from 'node:path';

const root = process.cwd();
const appBuildDir = join(root, '.next', 'server', 'app');
const disallowedTypes = new Set(['GovernmentService', 'GovernmentPermit', 'MedicalProcedure']);

if (!existsSync(appBuildDir)) {
  console.error('Build output not found. Run `npm run build` before `npm run audit:jsonld`.');
  process.exit(1);
}

function walk(dir) {
  const files = [];
  for (const entry of readdirSync(dir)) {
    const full = join(dir, entry);
    const stat = statSync(full);
    if (stat.isDirectory()) files.push(...walk(full));
    else if (full.endsWith('.html')) files.push(full);
  }
  return files;
}

function extractJsonLd(html) {
  const blocks = [];
  const pattern = /<script[^>]+type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi;
  let match;
  while ((match = pattern.exec(html))) {
    blocks.push(match[1].replace(/&quot;/g, '"').replace(/&amp;/g, '&'));
  }
  return blocks;
}

function scanNode(node, visitor) {
  if (Array.isArray(node)) {
    node.forEach((item) => scanNode(item, visitor));
    return;
  }
  if (!node || typeof node !== 'object') return;
  visitor(node);
  Object.values(node).forEach((value) => scanNode(value, visitor));
}

const findings = [];
let parsedCount = 0;

for (const file of walk(appBuildDir)) {
  const html = readFileSync(file, 'utf8');
  for (const block of extractJsonLd(html)) {
    let data;
    try {
      data = JSON.parse(block);
      parsedCount += 1;
    } catch (error) {
      findings.push(`${relative(root, file)} contains invalid JSON-LD: ${error.message}`);
      continue;
    }

    scanNode(data, (node) => {
      const types = Array.isArray(node['@type']) ? node['@type'] : [node['@type']];
      for (const type of types.filter(Boolean)) {
        if (disallowedTypes.has(type)) {
          findings.push(`${relative(root, file)} uses disallowed schema type ${type}`);
        }
      }
    });
  }
}

if (!parsedCount) {
  findings.push('No JSON-LD blocks found in built app output.');
}

if (findings.length) {
  console.error('JSON-LD build audit failed:\n');
  findings.forEach((finding) => console.error(`- ${finding}`));
  process.exit(1);
}

console.log(`JSON-LD build audit passed. Parsed ${parsedCount} JSON-LD blocks.`);
