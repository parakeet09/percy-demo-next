/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  basePath: process.env.NODE_ENV === "production" ? "/Chain-Calculator" : "",
  assetPrefix:
    process.env.NODE_ENV === "production" ? "/Chain-Calculator/" : "",
};

module.exports = nextConfig;
