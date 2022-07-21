/** @type {import('next').NextConfig} */
const withImages = require('next-images')
const { i18n } = require('./next-i18next.config')

const nextConfig = {
  reactStrictMode: true,
  images: {
    disableStaticImages: true,
  }
}

module.exports = withImages({
  nextConfig,
  i18n
})
