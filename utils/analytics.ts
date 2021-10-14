import { MEASUREMENT_ID } from '../constants';

export const pageview = (url: string) => {
  // eslint-disable-next-line no-restricted-syntax
  if ('gtag' in window) {
    // @ts-ignore
    const { gtag } = window;
    gtag('config', MEASUREMENT_ID, { page_path: url });
  }
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const event = ({ action, params }: any) => {
  // eslint-disable-next-line no-restricted-syntax
  if ('gtag' in window) {
    // @ts-ignore
    const { gtag } = window;
    gtag('event', action, params);
  }
};