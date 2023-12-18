/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

module.exports = nextConfig;

module.exports = {
  // images: {
  //   domains: ["www.dvirtex.lt"],
  // },
  env: {
    SERVER_URL: "http://localhost:3001",
  },
};
