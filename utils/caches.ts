import pwaConfig from '../next-pwa.config';

export const cleanOldCaches = async () => {
  const { apiRequests, assets, bundles, documents } = pwaConfig.caches;

  const names = [
    apiRequests.options.cacheName,
    assets.options.cacheName,
    bundles.options.cacheName,
    documents.options.cacheName
  ];

  const cacheNames = await caches.keys();
  cacheNames.forEach(cacheName => {
    if (!names.includes(cacheName)) {
      caches.delete(cacheName);
    }
  });
};