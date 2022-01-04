/** @type {import('next').NextConfig} */
const withPWA = require('next-pwa');

const { i18n } = require('./next-i18next.config');
const { pwa } = require('./next-pwa.config');
const { webpack } = require('./next-webpack.config');

const config = {
  reactStrictMode: true,
  images: {
    domains: [
      // Youtube avatars
      'yt3.ggpht.com'
    ]
  },
  i18n,
  pwa,
  webpack
};

module.exports = withPWA(config);
