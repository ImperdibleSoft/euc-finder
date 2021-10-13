/** @type {import('next').NextConfig} */
const { i18n } = require('./next-i18next.config');

module.exports = {
  reactStrictMode: true,
  i18n,
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
  }
};
