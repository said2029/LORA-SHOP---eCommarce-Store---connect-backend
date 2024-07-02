// "https://loradash.onrender.com"
/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    BACKEND_URL: "https://loradash.onrender.com",
    COPYRIGHT_TEXT:"Copyright 2024 @ FastCom., All rights reserved.",
  },
  reactStrictMode: false,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: "img.freepik.com",
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: "kachabazar-store-nine.vercel.app",
        pathname: "**",
      },
    ],
    domains: [
      "images.unsplash.com",
      "img.freepik.com",
      "res.cloudinary.com",
      "kachabazar-store-nine.vercel.app",
    ],
  },
};
export default nextConfig;
