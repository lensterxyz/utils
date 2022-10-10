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
        source: '/dogstats',
        destination: 'https://logs.browser-intake-datadoghq.eu/api/v2/logs'
      },
    ];
  },
};

module.exports = nextConfig;
