import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // Remove these entries to re-enable the pages
      { source: '/projects', destination: '/', permanent: false },
      { source: '/blog', destination: '/', permanent: false },
      { source: '/blog/:slug*', destination: '/', permanent: false },
    ]
  },
};

export default nextConfig;
