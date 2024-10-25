/** @type {import('next').NextConfig} */

const nextConfig = {
    basePath: '/multiconsolehub',
    assetPrefix: '/multiconsolehub/',
    trailingSlash: true,
    output: 'export', // comment out when pushing to github (used to export static version)
    images: {
        unoptimized: true,
      },
};

export default nextConfig;
