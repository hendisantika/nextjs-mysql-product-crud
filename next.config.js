// /** @type {import('next').NextConfig} */
// const nextConfig = {};
//
// export default nextConfig;


module.exports = {
    // output: 'standalone',
    reactStrictMode: true,
    async redirects() {
        return [
            {
                source: '/',
                destination: '/products',
                permanent: true
            }
        ]
    }
}