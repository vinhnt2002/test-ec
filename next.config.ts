import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
      {
        protocol: "http",
        hostname: "**",
      },
      // {
      //   protocol: "https",
      //   hostname: "utfs.io",
      // },
      // {
      //   protocol: "https",
      //   hostname: "github.com",
      // },
      // {
      //   protocol: "https",
      //   hostname: "res.cloudinary.com",
      // },
      // {
      //   protocol: "https",
      //   hostname: "plus.unsplash.com",
      // },
      // {
      //   protocol: "https",
      //   hostname: "images.unsplash.com",
      // },
      // {
      //   protocol: "https",
      //   hostname: "assets.printerval.com",
      // },
      // {
      //   protocol: "https",
      //   hostname: "liveview.printerval.com",
      // },
      // {
      //   protocol: "https",
      //   hostname: "asset.prtvstatic.com",
      // },
      // {
      //   protocol: "https",
      //   hostname: "*",
      // },
    ],
  },
};

export default nextConfig;
