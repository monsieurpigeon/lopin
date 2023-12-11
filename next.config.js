/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "yaobnsuhmrhbhespmrco.supabase.co",

        pathname: "**",
      },
    ],
  },
};

module.exports = nextConfig;
