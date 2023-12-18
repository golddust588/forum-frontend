/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

module.exports = nextConfig;

module.exports = {
  images: {
    domains: ["www.dvirtex.lt"],
  },
  env: {
    SERVER_URL: "https://64ec5381f9b2b70f2bfa1b61.mockapi.io",
  },
};
