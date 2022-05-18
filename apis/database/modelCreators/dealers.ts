import { Region, Store, StoreId } from '../../../types';
import { DealerFromServer } from '../types/dealers';

const createDealerFromServer = ({
  code,
  color,
  discount,
  id,
  logo,
  manualDiscount,
  name,
  region,
  sponsor,
  website
}: DealerFromServer): Store => ({
  color: `${ color }`,
  id: `${ id }` as StoreId,
  logo: `${ logo }`,
  meta: {
    code: code ? `${ code }` : undefined,
    discount: discount ? Number(discount) : 0,
    manualDiscount: !!manualDiscount,
    sponsor: !!sponsor
  },
  name: `${ name ?? id }`,
  region: `${ region }` as Region,
  website: `${ website }`
});

export const createDealersFromServer = (dealers: DealerFromServer[]): Store[] => {
  if (!Array.isArray(dealers)) {
    console.error('Invalid dealers object');
    return [];
  }

  return dealers.map(createDealerFromServer);
};
