/** @type {import('next').NextConfig} */

const nextConfig = {
    basePath: '/multiconsolehub',
    assetPrefix: '/multiconsolehub/',
    trailingSlash: true,
    output: 'export',
    images: {
        unoptimized: true,
      },
};

export default nextConfig;
