const { version } = require('./package.json');

const apiRequestsPattern = /\/api\//gm;
const assetsPattern = /(_next\/image\?url\=)|(.*\.(png|PNG|jpeg|JPEG|jpg|JPG|gif|GIF)$)/gm;
const bundlesPattern = /^((?!\/api\/).)*\.(html|css|js|woff2)$/gm;
// eslint-disable-next-line max-len
const documentsPattern = /^((https:\/\/www\.eucfinder\.com)|(http:\/\/localhost:3000))(\/)?((es|en)(\/)?)?(dealers|influencers|settings|videos|(wheels(\/.*)?)(\/)?)?/gm;

const CacheFirst = 'CacheFirst';
const NetworkFirst = 'NetworkFirst';

const commonOptions = {
  cacheableResponse: { statuses: [0, 200] },
  expiration: { maxAgeSeconds: 365 * 24 * 60 * 60 }
};

const apiRequests = {
  urlPattern: apiRequestsPattern,
  handler: NetworkFirst,
  options: {
    cacheableResponse: commonOptions.cacheableResponse,
    expiration: commonOptions.expiration,
    cacheName: `requests-${ version }`
  }
};

const assets = {
  urlPattern: assetsPattern,
  handler: CacheFirst,
  options: {
    cacheableResponse: commonOptions.cacheableResponse,
    expiration: commonOptions.expiration,
    cacheName: `assets-${ version }`
  }
};

const bundles = {
  urlPattern: bundlesPattern,
  handler: NetworkFirst,
  options: {
    cacheableResponse: commonOptions.cacheableResponse,
    expiration: commonOptions.expiration,
    cacheName: `bundles-${ version }`
  }
};

const documents = {
  urlPattern: documentsPattern,
  handler: NetworkFirst,
  options: {
    cacheableResponse: commonOptions.cacheableResponse,
    expiration: commonOptions.expiration,
    cacheName: `bundles-${ version }`
  }
};

module.exports = {
  caches: {
    apiRequests,
    assets,
    bundles,
    documents
  },
  pwa: {
    disable: process.env.NODE_ENV === 'development',
    dest: 'public',
    sw: 'service-worker.js',
    runtimeCaching: [
      apiRequests,
      assets,
      bundles,
      documents
    ],
    exclude: [
      /middleware-manifest\.json$/,
      /react-loadable-manifest\.json$/,
      /build-manifest\.json$/
    ]
  }
};
