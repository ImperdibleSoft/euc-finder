/** @type {import('next').NextConfig} */
const withOffline = require('next-offline');

const { i18n } = require('./next-i18next.config');
const { workboxOpts } = require('./next-offline.config');

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
      'www.ewheels.com'
    ]
  },
  i18n,
  workboxOpts
};

module.exports = withOffline(config);