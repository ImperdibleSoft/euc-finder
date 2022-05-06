import { WheelId } from '../types';

export interface AvailableQueryParams {
  dark: boolean;
  features?: string[];
  icons: boolean;
  lang: 'en' | 'es' | 'fr';
  limits: boolean;
  picture: boolean;
  title: boolean;
  wheelId?: WheelId;
}

const parseValue = (key: string, value: string) => {
  switch (key) {
    case 'features':
      if (value) {
        return value.split(',');
      }
      return undefined;

    case 'dark':
    case 'icons':
    case 'limits':
    case 'picture':
    case 'title':
      return value !== 'false';

    case 'lang':
      if (value !== 'en' && value !== 'es' && value !== 'fr') {
        return 'en';
      }

      return value;
      
    default:
      return value;
  }
};

export const getQueryParams = (): AvailableQueryParams => {
  const location = global?.location ?? {};

  const defaultParams: AvailableQueryParams = {
    dark: false,
    icons: true,
    lang: 'en',
    limits: true,
    picture: true,
    title: true
  };

  return (location.search ?? '')
    .replace(/^\?/, '')
    .split('&')
    .reduce((result, curr) => {
      const [key, value] = curr.split('=');
    
      return {
        ...result,
        [key]: parseValue(key, value)
      };
    }, defaultParams);
};
