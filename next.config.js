/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  env: {
    RAPID_API_KEY: process.env.RAPID_API_KEY,
  },
};

module.exports = nextConfig;
