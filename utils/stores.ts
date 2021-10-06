import { PurchaseLink, Region, Stores } from '../types';

interface GetStoreOptions {
  stores: Stores
  region: Region
  url: string
  sponsored?: boolean
}

const getStoreFromUrl = ({ region, stores, url, sponsored }: GetStoreOptions) =>
  Object
    .values(stores)
    .find(({ region: storeRegion, sponsor, website }) => (
      region === storeRegion
      && website
      && url.includes(website)
      && ((sponsored && sponsor) || (!sponsored && !sponsor))
    ));

export const getPurchaseLink = (options: GetStoreOptions): PurchaseLink | undefined => {
  return undefined;

  const store = getStoreFromUrl(options);

  if (!store) {
    return undefined;
  }

  // return {
  //   color: store.color,
  //   label: store.name,
  //   url: options.url
  // };
};