/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = {
  images: {
    unoptimized: true
  },
  output: {
    export: true
  },
  basePath: '/trello-kanban',
  assetPrefix: '/trello-kanban/'
}
