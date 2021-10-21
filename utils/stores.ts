import { SHOW_PURCHASE_LINKS } from '../constants';
import { storeCode, storeDiscounts } from '../context/data';
import { PurchaseLink, Region, StoreId, Stores } from '../types';

interface GetStoreOptions {
  stores: Stores
  region: Region
  url: string
  sponsored?: boolean
}

const getStoreDiscount = (storeId: StoreId) => storeDiscounts[storeId];

const getStoreCode = (storeId: StoreId) => storeCode[storeId];

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
  if (!SHOW_PURCHASE_LINKS) {
    return undefined;
  }

  const store = getStoreFromUrl(options);

  if (!store) {
    return undefined;
  }

  const discount = getStoreDiscount(store.id);
  const code = getStoreCode(store.id);

  return {
    color: store.color,
    label: discount ? `${ store.name } (-${ discount }%)` : store.name,
    url: code ? `${ options.url }?${ code }` : options.url
  };
};