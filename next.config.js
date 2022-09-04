/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: process.env.NODE_ENV !== 'production' ? ['i.picsum.photos', 'picsum.photos'] : []
  }
};

module.exports = nextConfig;
