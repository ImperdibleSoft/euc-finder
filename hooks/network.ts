import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { APP_URL } from '../constants';

export const removeLocale = (pathname: string) =>
  pathname
    .replace('/en', '')
    .replace('/es', '');

export const useCurrentPath = () => {
  const [currentPath, setCurrentPath] = useState('');
  const { asPath } = useRouter();

  useEffect(() => {
    const { origin } = location;
    const domain = /localhost/.test(origin) ? APP_URL : origin;
  
    setCurrentPath(`${ domain }${ asPath }`);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [asPath]);

  return currentPath;
};
