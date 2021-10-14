const assetsPattern = /.*\.(png|PNG|jpeg|JPEG|jpg|JPG|gif|GIF)$/gm;
const bundlesPattern = /.*\.(html|css|js|woff2)$/gm;
const documentsPattern = /https:\/\/www.eucfinder.com\/((en|es)(\/)?)?(wheels\/.*)?$/gm;

const CacheFirst = 'CacheFirst';
const NetworkFirst = 'NetworkFirst';

const commonOptions = {
  cacheableResponse: { statuses: [0, 200] },
  expiration: { maxAgeSeconds: 365 * 24 * 60 * 60 }
};

const assets = {
  urlPattern: assetsPattern,
  handler: CacheFirst,
  options: {
    cacheName: 'assets',
    cacheableResponse: commonOptions.cacheableResponse,
    expiration: commonOptions.expiration
  }
};

const bundles = {
  urlPattern: bundlesPattern,
  handler: NetworkFirst,
  options: {
    cacheName: 'bundles',
    cacheableResponse: commonOptions.cacheableResponse,
    expiration: commonOptions.expiration
  }
};

const documents = {
  urlPattern: documentsPattern,
  handler: NetworkFirst,
  options: {
    cacheName: 'bundles',
    cacheableResponse: commonOptions.cacheableResponse,
    expiration: commonOptions.expiration
  }
};

module.exports = {
  workboxOpts: {
    swDest: '../public/service-worker.js',
    runtimeCaching: [
      assets,
      bundles,
      documents
    ]
  }
};