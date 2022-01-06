import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

export const useCurrentPath = () => {
  const [currentPath, setCurrentPath] = useState('');
  const { asPath, locale } = useRouter();

  useEffect(() => {
    const { origin } = location;
    const domain = /localhost/.test(origin) ? 'https://www.eucfinder.com' : origin;
  
    setCurrentPath(`${ domain }/${ locale }${ asPath }`);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [asPath, locale]);

  return currentPath;
};