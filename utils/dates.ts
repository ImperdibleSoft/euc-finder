import { setItem } from '.';
import { LOCAL_STORAGE_KEY } from '../types';
import { getItem } from './localStorage';

export const getToday = () => new Date(Date.now());

export const setLastVisit = () => {
  const date = getToday();
  setItem(LOCAL_STORAGE_KEY.LAST_VISIT, date.toISOString());
};

export const getLastVisit = () => {
  const lastVisitStr = getItem(LOCAL_STORAGE_KEY.LAST_VISIT);

  return lastVisitStr ? new Date(lastVisitStr) : undefined;
};