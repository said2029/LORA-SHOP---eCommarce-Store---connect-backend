/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        remotePatterns: [
            {
                protocol: 'https',
                hostname: "res.cloudinary.com",
                pathname: '**',
            },
            {
                protocol: 'https',
                hostname: "images.unsplash.com",
                pathname: '**',
            },
            {
                protocol: 'https',
                hostname: "img.freepik.com",
                pathname: '**',
            },

        ],
        domains:["images.unsplash.com","img.freepik.com","res.cloudinary.com"]
    }
};
export default nextConfig;
