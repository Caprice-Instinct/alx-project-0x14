import withPWAInit from "@ducanh2912/next-pwa";

/** @type {import('next').NextConfig} */

const withPWA = withPWAInit({
  dest: 'public'
})

const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'm.media-amazon.com',
      },
    ],
  },
  turbopack: {},
};

export default withPWA({
  ...nextConfig
})