/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
    domains: ["merch-clone.s3.ap-south-1.amazonaws.com"],
  },
};

module.exports = nextConfig;
