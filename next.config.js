/** @type {import('next').NextConfig} */
const nextConfig = {
  turbopack: {
    root: __dirname,
  },
  // Allow connections from your network
  allowedDevOrigins: [
    '192.168.1.138',
    'localhost:3000',
    '127.0.0.1:3000'
  ],
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
}

module.exports = nextConfig