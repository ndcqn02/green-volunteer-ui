/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    domains: ['tailwindui.com', 'images.unsplash.com', 'lawnet.vn'],
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'lawnet.vn',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'pbgdpl.haiphong.gov.vn',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'tuyengiao.vn',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'cdnimg.vietnamplus.vn',
        port: '',
        pathname: '/**',
      },
    ],
  },
}

module.exports = nextConfig
