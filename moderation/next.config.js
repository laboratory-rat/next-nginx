/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: process.env.NODE_ENV == 'production' ? '/moderation' : undefined,
  reactStrictMode: true,
  swcMinify: true,
}

module.exports = nextConfig
