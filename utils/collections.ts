import { Order } from '../types';

interface Collection {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [index: string]: any;
}

export const sortBy = <T extends Collection>(key: keyof T, order: Order = 'desc') => (a: T, b: T) => {
  if (a[key] < b[key]) return order === 'asc' ? -1 : 1;
  if (a[key] > b[key]) return order === 'asc' ? 1 : -1;
  return 0;
};

export const getMinimumValue = (collection: number | number[]): number => {
  if (typeof collection === 'number') {
    return collection;
  }

  return collection[0];
};

export const getMaximumValue = (collection: number | number[]): number => {
  if (typeof collection === 'number') {
    return collection;
  }

  return collection[collection.length - 1];
};