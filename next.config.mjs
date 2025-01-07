/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    appDir: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "makita.com.vn",
      },
      {
        protocol: "https",
        hostname: "resize.sudospaces.com",
      },
      {
        protocol: "https",
        hostname: "sudospaces.com",
      },
    ],
  },
}

export default nextConfig
