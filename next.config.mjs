import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "github.com",
      "aceternity.com",
      "spotify-github-profile.kittinanx.com",
      "github-readme-stats.vercel.app",
    ],
  },
};

export default withNextIntl(nextConfig);
