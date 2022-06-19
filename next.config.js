/** @type {import('next').NextConfig} */
const path = require('path')

const nextConfig = {
  reactStrictMode: true,
  sass: true,
  modules: true,
  experimental: { images: { layoutRaw: true } },
  sassOptions: {
    includePaths: [
      path.join(__dirname, 'styles'),
      path.join(__dirname, 'node_modules'),
      path.join(__dirname, 'components'),
    ],
  },
}

module.exports = nextConfig
