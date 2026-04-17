import { readdirSync, readFileSync, statSync } from 'node:fs';
import { join, relative } from 'node:path';

const root = process.cwd();
const scanTargets = ['app', 'components', 'lib', 'public', 'CLAUDE.md', 'package.json'];
const textExtensions = new Set(['.ts', '.tsx', '.js', '.jsx', '.mjs', '.json', '.txt', '.md']);

const forbidden = [
  { pattern: /\bGovernmentService\b/i, reason: 'Do not model JVTO operations as a government service.' },
  { pattern: /\bGovernmentPermit\b/i, reason: 'Use business registration/proof documents instead of GovernmentPermit.' },
  { pattern: /\bMedicalProcedure\b/i, reason: 'Use MedicalWebPage + Service for Ijen screening context.' },
  { pattern: /police-standard/i, reason: 'Use documented Tourist Police duty context without overclaiming state authority.' },
  { pattern: /police-led/i, reason: 'Use police-informed or documented duty-context language.' },
  { pattern: /mandatory health screening/i, reason: 'Use health-certificate coordination when current access rules require it.' },
  { pattern: /Mandatory Ijen/i, reason: 'Use scoped Ijen health-screening coordination language.' },
  { pattern: /all guests visiting Kawah Ijen/i, reason: 'Avoid universal medical claims.' },
  { pattern: /all Kawah Ijen climbers/i, reason: 'Avoid universal medical claims.' },
  { pattern: /19 Commercial Tour Packages/i, reason: 'Current app data is the source of truth for package count.' },
  { pattern: /real-time availability/i, reason: 'Checkout and live availability remain a future phase.' },
  { pattern: /direct-booking/i, reason: 'Checkout/direct booking remains a future phase.' },
];

function isTextFile(path) {
  return textExtensions.has(path.slice(path.lastIndexOf('.')));
}

function collectFiles(target) {
  const fullPath = join(root, target);
  const stat = statSync(fullPath);

  if (stat.isFile()) {
    return isTextFile(fullPath) ? [fullPath] : [];
  }

  const files = [];
  for (const entry of readdirSync(fullPath)) {
    if (entry === 'node_modules' || entry === '.next') continue;
    const child = join(fullPath, entry);
    const childStat = statSync(child);
    if (childStat.isDirectory()) {
      files.push(...collectFiles(relative(root, child)));
    } else if (isTextFile(child)) {
      files.push(child);
    }
  }
  return files;
}

const findings = [];
for (const target of scanTargets) {
  for (const file of collectFiles(target)) {
    const rel = relative(root, file);
    const lines = readFileSync(file, 'utf8').split(/\r?\n/);
    lines.forEach((line, index) => {
      for (const rule of forbidden) {
        if (rule.pattern.test(line)) {
          findings.push({ file: rel, line: index + 1, text: line.trim(), reason: rule.reason });
        }
      }
    });
  }
}

if (findings.length) {
  console.error('PRD compliance audit failed:\n');
  for (const finding of findings) {
    console.error(`${finding.file}:${finding.line} ${finding.text}`);
    console.error(`  ${finding.reason}`);
  }
  process.exit(1);
}

console.log('PRD compliance audit passed.');
