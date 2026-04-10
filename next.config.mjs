/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ['motion', 'framer-motion'],
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'javavolcano-touroperator.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'picsum.photos',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
