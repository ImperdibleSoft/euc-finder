/** @type {import('next').NextConfig} */
const withOffline = require('next-offline');

const { i18n } = require('./next-i18next.config');
const { workboxOpts } = require('./next-offline.config');
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
      'scontent-mad1-1.xx.fbcdn.net'
    ]
  },
  i18n,
  workboxOpts,
  webpack
};

module.exports = withOffline(config);