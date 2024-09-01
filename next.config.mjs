/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "thumbs.dreamstime.com",
            },
            {
                protocol: "https",
                hostname: "www.tracedirecte.com",
            },
            {
                protocol: "https",
                hostname: "static.wixstatic.com",
            },
        ],
        
    },
};

export default nextConfig;
