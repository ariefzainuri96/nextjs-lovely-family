/** @type {import('next').NextConfig} */
// const nextConfig = {
//     images: {
//         remotePatterns: [
//             { hostname: "i.ibb.co.com" },
//         ]
//     }
// };

// export default nextConfig;

const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: "i.ibb.co.com",
                port: '',
                pathname: '/**'
            },
            {
                protocol: 'https',
                hostname: "i.ibb.co",
                port: '',
                pathname: '/**'
            },
        ]
    }
}

module.exports = nextConfig