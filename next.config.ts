import type { NextConfig } from 'next';
const basePath = process.env.APP_BASE_PATH || '';
const config: NextConfig = {
  basePath,
  turbopack: { root: process.cwd() },
  poweredByHeader: false,
  images: { qualities: [75, 85] },
  async headers() {
    return [{ source: '/:path*', headers: [
      { key: 'X-Content-Type-Options', value: 'nosniff' },
      { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
      { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
      { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
    ] }];
  },
};
export default config;
