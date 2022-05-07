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
  return lastVisitStr ? createDate(lastVisitStr) : createDate('2000/Jan/01');
};

export const humanDate = (date: Date): string =>
  date.toLocaleDateString(undefined, { dateStyle: 'medium' });

const monthNumbers = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

export const createDate = (date: string) => {
  if (/\//.test(date)) {
    const [dd, mm, yyyy] = date.split('/');
    const month = (monthNumbers.findIndex(m => m === mm) + 1).toString().padStart(2, '0');
    const unifiedFormat = `${ yyyy }/${ month }/${ dd }`;
    const newDate = new Date(unifiedFormat);
    return newDate;
  }

  return new Date(date);
};
