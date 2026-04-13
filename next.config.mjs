/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'javavolcano-touroperator.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
