import { showAllPurchaseLinks } from './features';
import { PurchaseLink, Region, Store, StoreId } from '../types';
import { stores } from '../context/data';
import { isDealerAvailable } from './dealers';

interface GetStoreOptions {
  stores: Store[]
  region: Region
  url: string
  sponsored?: boolean
}

const getStoreDiscount = (storeId: StoreId) => stores.find(s => s.id === storeId)?.meta.discount ?? 0;

const getStoreCode = (storeId: StoreId) => stores.find(s => s.id === storeId)?.meta?.code ?? '';

const getStoreFromUrl = ({ region, stores: storesData, url, sponsored }: GetStoreOptions) =>
  storesData.find(({ meta, region: storeRegion, website }) => (
    region === storeRegion
      && website
      && url.includes(website)
      && ((sponsored && meta.sponsor) || (!sponsored && !meta.sponsor))
  ));

export const getPurchaseLink = ({ stores: storesData, ...options }: GetStoreOptions): PurchaseLink | undefined => {
  const store = getStoreFromUrl({
    stores: storesData.filter(s => isDealerAvailable(s.name) || showAllPurchaseLinks()),
    ...options
  });

  if (!store) {
    return undefined;
  }

  const discount = getStoreDiscount(store.id);
  const code = getStoreCode(store.id);

  return {
    discount,
    store,
    url: code ? `${ options.url }?${ code }` : options.url
  };
};