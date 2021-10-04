import { PurchaseLink, Stores } from '../types';

const getStoreFromUrl = (stores: Stores, url: string, sponsored?: boolean) =>
  Object
    .values(stores)
    .find(({ sponsor, website }) => (
      website
      && url.includes(website)
      && ((sponsored && sponsor) || (!sponsored && !sponsor))
    ));

export const getPurchaseLink = (stores: Stores, url: string, sponsored?: boolean): PurchaseLink | undefined => {
  const store = getStoreFromUrl(stores, url, sponsored);

  if (!store) {
    return undefined;
  }

  return {
    color: store.color,
    label: store.name,
    url
  };
};