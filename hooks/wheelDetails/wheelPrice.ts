import { Variant } from '@mui/material/styles/createTypography';
import { useEffect, useState } from 'react';
import eucFinderApi from '../../apis/eucfinder';
import { LoadingState, StoreId } from '../../types';

const getApiRequest = (store: StoreId) => {
  switch (store) {
    case StoreId.ciclonic:
      return eucFinderApi.getCiclonicPrice;

      // case StoreId.inmotionFrance:
      //   return eucFinderApi.getInmotionFrancePrice;

    case StoreId.myewheel:
      return eucFinderApi.getMyEWheelPrice;

    case StoreId.urban360:
      return eucFinderApi.getUrban360Price;

    default:
      return undefined;
  }
};

export const useWheelPrice = (store: StoreId, url: string, expensive: boolean) => {
  const [price, setPrice] = useState<number | '-'>();
  const [loadingState, setLoadingState] = useState<LoadingState>('idle');
  const request = getApiRequest(store);

  const getPrice = async () => {
    if (request) {
      setLoadingState('loading');
      const p = await request(url, expensive);
      setPrice(p);
      setLoadingState('success');
    }
  };

  useEffect(() => {
    getPrice();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { loadingState, price };
};

export const useWheelPriceStyles = (isMain: boolean, large: boolean) => {
  let variant: Variant = 'body1';
  let fontWeight = 'normal';
  let textDecoration = 'none';

  if (isMain) {
    fontWeight = 'bold';
  } else {
    textDecoration = 'line-through';
  }

  if (large) {
    if (isMain) {
      variant = 'h5';
    } else {
      variant = 'h6';
    }
  }
  
  return {
    variant,
    fontWeight,
    textDecoration
  };
};