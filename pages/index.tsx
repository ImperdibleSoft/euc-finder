import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import { getStaticProps } from '../utils-server/translatedResources';
import { EUCS } from '../constants/clientRoutes';

const Root: React.FC = () => {
  const router = useRouter();

  useEffect(() => {
    router.push(EUCS);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return null;
};

export default Root;

export { getStaticProps };