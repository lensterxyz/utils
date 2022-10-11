/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  trailingSlash: true,
  async rewrites() {
    return [
      {
        source: "/collect/:match*",
        destination: "https://api.mixpanel.com/:match*",
      },
      {
        source: "/birdstats",
        destination: "https://cloud.axiom.co/api/v1/datasets/birdstats/ingest",
      },
    ];
  },
};

module.exports = nextConfig;
