import fs from 'fs';
const p = JSON.parse(fs.readFileSync('package.json','utf8'));
p.scripts = p.scripts || {};
p.scripts.test = 'vitest';
p.devDependencies = p.devDependencies || {};
Object.assign(p.devDependencies, {
  vitest: '^0.34.5',
  '@testing-library/react': '^14.0.0',
  '@testing-library/jest-dom': '^6.0.0',
  jsdom: '^22.1.0',
  'vite-tsconfig-paths': '^5.0.0'
});
fs.writeFileSync('package.json', JSON.stringify(p, null, 2) + '\n');
console.log('updated');
