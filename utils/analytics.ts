import { MEASUREMENT_ID } from '../constants';
import { LOCAL_STORAGE_KEY } from '../types';
import { getItem } from './localStorage';

export const shouldTrackUser = () => {
  // eslint-disable-next-line no-console
  console.log('Should', {
    env: process.env.NODE_ENV,
    disabled: getItem(LOCAL_STORAGE_KEY.DISABLE_ANALYTICS)
  });

  if (process.env.NODE_ENV === 'production' && getItem(LOCAL_STORAGE_KEY.DISABLE_ANALYTICS) !== 'true') {
    // eslint-disable-next-line no-console
    console.log('Yes');
    return true;
  }

  // eslint-disable-next-line no-console
  console.log('No');
  return false;
};

export const pageview = (url: string) => {
  // eslint-disable-next-line no-restricted-syntax
  if (shouldTrackUser() && 'gtag' in window) {
    // @ts-ignore
    const { gtag } = window;
    gtag('config', MEASUREMENT_ID, { page_path: url });
  }
};

interface EventProps {
  action: string;
  params: {[key: string]: string}
}
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const logEvent = ({ action, params }: EventProps) => {  
  // eslint-disable-next-line no-restricted-syntax
  if (shouldTrackUser() && 'gtag' in window) {
    // @ts-ignore
    const { gtag } = window;
    gtag('event', action, params);
  }
};
