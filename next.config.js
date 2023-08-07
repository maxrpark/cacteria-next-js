/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["dl.airtable.com", "v5.airtableusercontent.com"],
  },
};

module.exports = nextConfig;
