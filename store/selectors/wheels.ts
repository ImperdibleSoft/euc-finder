import { BrandId, StoreId, WheelId } from '../../types';
import { getRangeFromBattery } from '../../utils';
import { RootState } from '../types';

export const getWheels = ({ config, wheels }: RootState) => {
  if (!config.calculatedRange) {
    return wheels.collection;
  }

  return wheels.collection.map(w => ({ ...w, range: getRangeFromBattery(w, wheels.brands) }));
};

export const getWheelById = (id: WheelId) =>
  (state: RootState) =>
    getWheels(state).find(w => w.id === id);

export const getBrands = ({ wheels }: RootState) =>
  wheels.brands;
  
export const getAllWheelPictures = ({ wheels }: RootState) =>
  wheels.pictures;

export const getWheelPictures = (id: WheelId) =>
  ({ wheels }: RootState) =>
    wheels.pictures[id] ?? [];

export const getFirstPicture = (id: WheelId) =>
  (rootState: RootState) =>
    getWheelPictures(id)(rootState)?.[0];

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