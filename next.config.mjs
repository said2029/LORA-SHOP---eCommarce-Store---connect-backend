/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    BACKENDURL: "https://loradash.onrender.com",
    STRIPE_PUBLISHABLE_KEY: "pk_test_51NB4P9B0Sf8s0ZjsQirV9ICLC3u3PZNvH7ZIUzDBykDA9A74dPHo8XsLfCqE2QXeIMGIpenOKGr0bhImxEEQmCmm00IIR0vPYv",
    STRIPE_SECRET_KEY: "sk_test_51NB4P9B0Sf8s0Zjs99jKRwObmYRBmnKffsRlsVv7vFHQksl5Seaw0a0yYWRk6mlJ4gxWmEEVw6kBmy70mrekPQgO00wpNNUCIg"
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
