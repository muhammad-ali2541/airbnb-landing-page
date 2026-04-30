/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",

  images: {
    unoptimized: true,
    domains: [
      "a0.muscache.com"
    ]
  }
};

module.exports = nextConfig;