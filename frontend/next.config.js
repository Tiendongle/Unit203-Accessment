/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    formats: ['image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.cozey.ca',
        port: '',
        pathname: '/_next/image/**',
      },
    ],
  },
}

module.exports = nextConfig
