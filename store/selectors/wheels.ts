import { BrandId, StoreId, WheelId } from '../../types';
import { getRangeFromBattery } from '../../utils';
import { RootState } from '../types';

export const getWheels = ({ config, wheels }: RootState) =>
  wheels.collection.map(w => ({
    ...w,
    range: config.calculatedRange
      ? getRangeFromBattery(w, wheels.brands)
      : w.range * 0.85
  }));

export const getWheelById = (id: WheelId) =>
  (state: RootState) =>
    getWheels(state).find(w => w.id === id);

export const getBrands = ({ wheels }: RootState) =>
  wheels.brands;

export const getPurchaseLinks = (id: WheelId) =>
  ({ wheels }: RootState) =>
    wheels.purchaseLinks[id] ?? [];

export const getPurchaseLinksByStore = (storeId?: StoreId) =>
  ({ wheels }: RootState) => {
    if (!storeId) {
      return [];
    }
    
    const store = wheels.stores.find(s => s.id === storeId);
    if (!store) {
      return [];
    }

    return Object
      .values(wheels.purchaseLinks)
      .reduce(
        (acc, wheelLinks) => {
          const storeLinks = wheelLinks.filter(l => l.includes(store.website));

          if (storeLinks.length) {
            acc.push(...storeLinks);
          }

          return acc;
        },
        [] as string[]
      );
  };

export const getStores = ({ wheels }: RootState) =>
  wheels.stores;

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