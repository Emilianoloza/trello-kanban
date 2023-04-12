/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = {
  images: {
    unoptimized: true
  },
  output: "export",
  assetPrefix: '/trello-kanban/'
}
