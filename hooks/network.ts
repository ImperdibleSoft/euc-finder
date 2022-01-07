import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

export const removeLocale = (pathname: string) =>
  pathname
    .replace('/en', '')
    .replace('/es', '');

export const useCurrentPath = () => {
  const [currentPath, setCurrentPath] = useState('');
  const { asPath } = useRouter();

  useEffect(() => {
    const { origin } = location;
    const domain = /localhost/.test(origin) ? 'https://www.eucfinder.com' : origin;
  
    setCurrentPath(`${ domain }${ asPath }`);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [asPath]);

  return currentPath;
};