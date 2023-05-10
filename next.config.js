/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'blockchainucsb.com',
            port: '',
            pathname: '/images/**',
          },
        ],
      },
}

module.exports = nextConfig
