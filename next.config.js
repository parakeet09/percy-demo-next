/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  // Only use basePath/assetPrefix for GitHub Pages, not in CI
  basePath: process.env.GITHUB_PAGES === "true" ? "/Chain-Calculator" : "",
  assetPrefix: process.env.GITHUB_PAGES === "true" ? "/Chain-Calculator/" : "",
};

module.exports = nextConfig;
