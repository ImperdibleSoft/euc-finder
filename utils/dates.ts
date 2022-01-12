import { setItem } from '.';
import { LOCAL_STORAGE_KEY } from '../types';
import { getItem } from './localStorage';

export const getToday = () => new Date(Date.now());

export const setLastVisit = (date = getToday()) => {
  setItem(LOCAL_STORAGE_KEY.VIDEO_LASTVISIT, date.toISOString());
  return date;
};

export const getLastVisit = () => {
  const lastVisitStr = getItem(LOCAL_STORAGE_KEY.VIDEO_LASTVISIT);

  return lastVisitStr ? new Date(lastVisitStr) : new Date('01 Jan 2000');
};