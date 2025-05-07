const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
  openAnalyzer: true,
});

/** @type {import('next').NextConfig} */
module.exports = withBundleAnalyzer({
  reactStrictMode: true,
});

// next.config.js

const securityHeaders = [
  {
    key: 'Content-Security-Policy',
    value: "default-src * 'self' blob: data: 'unsafe-inline' 'unsafe-eval'; frame-ancestors *; script-src * 'unsafe-inline' 'unsafe-eval'",
  },
  {
    key: 'X-Frame-Options',
    value: 'ALLOWALL',
  },
];

module.exports = {
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: securityHeaders,
      },
    ];
  },
};