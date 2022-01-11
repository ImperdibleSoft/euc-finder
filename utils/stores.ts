import { PurchaseLink, Region, Store, StoreId } from '../types';
import { isDealerAvailable } from './dealers';


const getStoreDiscount = (dealerId: StoreId, dealers: Store[]) =>
  dealers.find(d => d.id === dealerId)?.meta.discount ?? 0;

const getStoreCode = (dealerId: StoreId, dealers: Store[]) =>
  dealers.find(d => d.id === dealerId)?.meta?.code ?? '';

interface GetDealerParams {
  stores: Store[]
  region: Region
  url: string
  sponsored?: boolean
}

const getStoreFromUrl = ({ region, stores: dealers, url, sponsored }: GetDealerParams) =>
  dealers.find(({ meta, region: dealerRegion, website }) => (
    region === dealerRegion
      && website
      && url.includes(website)
      && ((sponsored && meta.sponsor) || (!sponsored && !meta.sponsor))
  ));

export const getPurchaseLink = (
  { stores: dealers, ...options }: GetDealerParams,
  showAllPurchaseLinks: boolean
): PurchaseLink | undefined => {
  const dealer = getStoreFromUrl({
    stores: dealers.filter(s => isDealerAvailable(s.name) || showAllPurchaseLinks),
    ...options
  });

  if (!dealer) {
    return undefined;
  }

  const discount = getStoreDiscount(dealer.id, dealers);
  const code = getStoreCode(dealer.id, dealers);

  return {
    discount,
    store: dealer,
    url: code ? `${ options.url }?${ code }` : options.url
  };
};