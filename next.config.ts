import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Temporary cutover redirect: this project's database has moved to the
  // cliniclivingplus Supabase project, verified working there. Forwarding
  // all traffic (including deep links) to the new deployment rather than
  // updating this app's own env vars, so this project/database stays
  // untouched as an instant fallback if anything needs to be rolled back.
  async redirects() {
    return [
      {
        source: '/:path*',
        destination: 'https://microbiomerx-rho.vercel.app/:path*',
        permanent: false,
      },
    ]
  },
};

export default nextConfig;

