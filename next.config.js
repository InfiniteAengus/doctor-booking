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
  env: {
    REACT_APP_API_KEY: process.env.REACT_APP_API_KEY,
    REACT_APP_API_URL: process.env.REACT_APP_API_URL,
  },
}

module.exports = nextConfig
