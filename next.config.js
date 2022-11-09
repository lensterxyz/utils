/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  trailingSlash: true,
  async rewrites() {
    return [
      {
        source: '/leafwatch',
        destination: 'https://logs.browser-intake-datadoghq.eu/api/v2/logs'
      }
    ];
  },
};

module.exports = nextConfig;
