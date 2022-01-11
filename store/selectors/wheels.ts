import { BrandId, Region, StoreId, WheelId } from '../../types';
import { getRangeFromBattery } from '../../utils';
import { RootState } from '../types';
import { getRangeConfig } from './config';

export const getWheels = (rootState: RootState) => {
  const { wheels: { brands, collection } } = rootState;
  const shouldCalculateRange = getRangeConfig(rootState);

  return collection.map(w => ({
    ...w,
    range: shouldCalculateRange
      ? getRangeFromBattery(w, brands)
      : w.range * 0.85
  }));
};

export const getWheelById = (id: WheelId) =>
  (state: RootState) =>
    getWheels(state).find(w => w.id === id);

export const getBrands = ({ wheels }: RootState) =>
  wheels.brands;

export const getPurchaseLinks = (id: WheelId) =>
  ({ wheels }: RootState) =>
    wheels.purchaseLinks[id] ?? [];

export const getPurchaseLinksByStore = (storeId?: StoreId) =>
  ({ wheels: { purchaseLinks, stores } }: RootState) => {
    if (!storeId) {
      return [];
    }
    
    const dealers = stores.find(s => s.id === storeId);
    if (!dealers) {
      return [];
    }

    return Object
      .values(purchaseLinks)
      .reduce(
        (acc, wheelLinks) => {
          const storeLinks = wheelLinks.filter(l => l.includes(dealers.website));

          if (storeLinks.length) {
            acc.push(...storeLinks);
          }

          return acc;
        },
        [] as string[]
      );
  };

export const getDealers = ({ wheels }: RootState) =>
  wheels.stores;

export const getDealersByRegion = (regionId: Region) =>
  ({ wheels }: RootState) =>
    wheels.stores.filter(dealer => dealer.region === regionId);

export const getWheelFilters = ({ wheels }: RootState) =>
  wheels.filters;

export const getWheelApps = (id?: BrandId) =>
  ({ wheels }: RootState) => ({
    // eslint-disable-next-line no-restricted-syntax
    official: wheels.apps.official.filter(app =>
      (!id || app.id === id || (id === BrandId.beidou && app.id === BrandId.begode))
    ),
    // eslint-disable-next-line no-restricted-syntax
    unofficial: wheels.apps.unofficial
  });

export const getComparedWheels = ({ wheels }: RootState) =>
  wheels.comparing;