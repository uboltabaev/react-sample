/** @type {import('next').NextConfig} */
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});
const useWebpack5 = true;
const config = {
  reactStrictMode: true,
  swcMinify: true,
  compress: true,
  env: {
    NEXT_PUBLIC_GOOGLE_TAG_MANAGER_ID: 'GTM-MJF3N7S',
    NEXT_PUBLIC_URL: 'https://makeuppalace.com.au'
  },
  headers: [
    {
      key: 'Cache-Control',
      value: 'public, max-age=9999999999, must-revalidate'
    }
  ],
  poweredByHeader: false,
  future: {
    webpack5: useWebpack5,
  },
  webpack: (config, {isServer}) => {
    if (!isServer) {
      if (useWebpack5) {
        config.resolve.fallback.fs = false;
      } else {
        config.node = {
          fs: 'empty',
        };
      }
    }
    return config;
  },
};
module.exports = withBundleAnalyzer(config);