import { Order } from '../types';
import { createDate } from './dates';

interface Collection {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [index: string]: any;
}

export const sortBy = <T extends Collection>(
  key: keyof T,
  order: Order = 'desc',
  secondKey?: string
) => (a: T, b: T) => {
    if (secondKey) {
      if (typeof a[key][secondKey] === 'string') {
        // eslint-disable-next-line max-len
        if (secondKey && a[key][secondKey].toLowerCase() < b[key][secondKey].toLowerCase()) return order === 'asc' ? -1 : 1;
        // eslint-disable-next-line max-len
        if (secondKey && a[key][secondKey].toLowerCase() > b[key][secondKey].toLowerCase()) return order === 'asc' ? 1 : -1;
      } else {
        if (secondKey && a[key][secondKey] < b[key][secondKey]) return order === 'asc' ? -1 : 1;
        if (secondKey && a[key][secondKey] > b[key][secondKey]) return order === 'asc' ? 1 : -1;
      }
    }

    if ((key as string).toLowerCase().includes('date') && typeof a[key] === 'string') {
      if (createDate(a[key]) < createDate(b[key])) return order === 'asc' ? -1 : 1;
      if (createDate(a[key]) > createDate(b[key])) return order === 'asc' ? 1 : -1;
    } else if (typeof a[key] === 'string') {
      if (a[key].toLowerCase() < b[key].toLowerCase()) return order === 'asc' ? -1 : 1;
      if (a[key].toLowerCase() > b[key].toLowerCase()) return order === 'asc' ? 1 : -1;
    } else {
      if (a[key] < b[key]) return order === 'asc' ? -1 : 1;
      if (a[key] > b[key]) return order === 'asc' ? 1 : -1;
    }
    
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
