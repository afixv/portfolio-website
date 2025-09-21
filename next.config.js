/** @type {import('next').NextConfig} */
// next.config.js
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/:path*",
        destination: "https://afix.works/:path*",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
