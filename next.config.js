/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: { styledComponents: true },
  images:{
    domains: [
      "freeimage.host",
      "iili.io"
    ]
  }
}

module.exports = nextConfig
