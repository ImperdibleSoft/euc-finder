/** @type {import('next').NextConfig} */
const withPWA = require('next-pwa');

const { i18n } = require('./next-i18next.config');
const { pwa } = require('./next-pwa.config');
const { webpack } = require('./next-webpack.config');

const config = {
  reactStrictMode: true,
  images: {
    domains: [
      'ciclonic.es',
      'cdn.shopify.com',
      'cdn11.bigcommerce.com',
      'store.urban360.es',
      'eptv.es',
      'www.inmotion-france.fr',
      'eucsale.com',
      'iwheelsurvive.com',
      'm.media-amazon.com',
      'i1.wp.com',
      'i2.wp.com',
      'www.ewheels.com',
      'yt3.ggpht.com',
      'scontent-cdt1-1.xx.fbcdn.net',
      'scontent-cdg2-1.xx.fbcdn.net',
      'scontent-mad1-1.xx.fbcdn.net',
      'nwzimg.wezhan.net'
    ]
  },
  i18n,
  pwa,
  webpack
};

module.exports = withPWA(config);
