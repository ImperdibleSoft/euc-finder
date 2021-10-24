import { SHOW_PRICE, SHOW_PURCHASE_LINKS } from '../constants';
import { LOCAL_STORAGE_KEY } from '../types';
import { getItem } from './localStorage';

export const showPrice = () => {
  const value = getItem(LOCAL_STORAGE_KEY.SHOW_PRICE) === 'true';
  return value || SHOW_PRICE;
};

export const showPurchaseLinks = () => {
  const value = getItem(LOCAL_STORAGE_KEY.SHOW_PURCHASE_LINKS) === 'true';
  return value || SHOW_PURCHASE_LINKS;
};