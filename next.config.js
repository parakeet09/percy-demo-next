/** @type {import('next').NextConfig} */
const nextConfig = {
  // Remove static export - Percy works better with standard Next.js server
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
