/** @type {import('next').NextConfig} */
const withPWA = require('next-pwa');

const { i18n } = require('./next-i18next.config');
const { pwa } = require('./next-pwa.config');
const { webpack } = require('./next-webpack.config');

const config = {
  env: {
    DDBB_HOST: process.env.DDBB_HOST,
    DDBB_USER: process.env.DDBB_USER,
    DDBB_PASSWD: process.env.DDBB_PASSWD,
    DDBB_NAME: process.env.DDBB_NAME
  },
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
