/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['127.0.0.1'],
  },

  devIndicators: {
    buildActivity: false,
  },
};

module.exports = nextConfig;
