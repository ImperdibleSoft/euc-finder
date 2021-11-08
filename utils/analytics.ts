import { MEASUREMENT_ID } from '../constants';
import { LOCAL_STORAGE_KEY } from '../types';
import { getItem } from './localStorage';

export const shouldTrackUser = () => {
  if (getItem(LOCAL_STORAGE_KEY.TEST) === 'true' || process.env.NODE_ENV !== 'production') {
    return false;
  }

  return true;
};

export const pageview = (url: string) => {
  // eslint-disable-next-line no-restricted-syntax
  if (shouldTrackUser() && 'gtag' in window) {
    // @ts-ignore
    const { gtag } = window;
    gtag('config', MEASUREMENT_ID, { page_path: url });
  }
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const event = ({ action, params }: any) => {
  // eslint-disable-next-line no-restricted-syntax
  if (shouldTrackUser() && 'gtag' in window) {
    // @ts-ignore
    const { gtag } = window;
    gtag('event', action, params);
  }
};