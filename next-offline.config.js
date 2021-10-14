module.exports = {
  workboxOpts: {
    swDest: '../public/service-worker.js',
    runtimeCaching: [
      {
        urlPattern: /.(png|PNG|jpeg|JPEG|jpg|JPG|gif|GIF)$/,
        handler: 'CacheFirst',
        options: {
          cacheName: 'assets',
          cacheableResponse: { statuses: [0, 200] },
          expiration: { maxAgeSeconds: 365 * 24 * 60 * 60 }
        }
      },
      {
        urlPattern: /.(html|css|js|woff2)$/,
        handler: 'NetworkFirst',
        options: {
          cacheName: 'bundles',
          cacheableResponse: { statuses: [0, 200] },
          expiration: { maxAgeSeconds: 365 * 24 * 60 * 60 }
        }
      }
    ]
  }
};