/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  styledComponent: true,
  pwa: {
    dest: "public",
    register: true,
    skipWaiting: true,
    disable: process.env.NODE_ENV === "development",
  }
}

module.exports = nextConfig
