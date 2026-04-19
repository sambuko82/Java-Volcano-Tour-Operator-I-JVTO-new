import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const __dirname = dirname(fileURLToPath(import.meta.url));

const ssot = JSON.parse(
  readFileSync(join(__dirname, 'lib/ssot/jvto-ssot-v4.json'), 'utf8')
);

const ssotRedirects = (ssot.canonical_redirects ?? [])
  .filter((r) => r && r.from && r.to && r.from !== r.to)
  .map((r) => ({
    source: r.from,
    destination: r.to,
    permanent: r.type === '301',
  }));

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'javavolcano-touroperator.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'upload.wikimedia.org',
        port: '',
        pathname: '/**',
      },
    ],
  },
  async redirects() {
    return ssotRedirects;
  },
};

export default nextConfig;
