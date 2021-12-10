import { WheelId } from '../../types';
import { RootState } from '../types';

export const getWheels = ({ wheels }: RootState) =>
  wheels.collection;

export const getWheelById = (id: WheelId) =>
  ({ wheels }: RootState) =>
    wheels.collection.find(w => w.id === id);

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

export const getStores = ({ wheels }: RootState) =>
  wheels.stores;

export const getWheelFilters = ({ wheels }: RootState) =>
  wheels.filters;