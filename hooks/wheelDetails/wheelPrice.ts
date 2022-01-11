import { Variant } from '@mui/material/styles/createTypography';
import { useEffect, useState } from 'react';
import eucFinderApi from '../../apis/eucfinder';
import { LoadingState, StoreId } from '../../types';

const getApiRequest = (store: StoreId) => {
  switch (store) {
    case StoreId.alienRides:
      return eucFinderApi.wheel.price.getAlienRidesPrice;

    case StoreId.ciclonic:
      return eucFinderApi.wheel.price.getCiclonicPrice;

    case StoreId.eevees:
      return eucFinderApi.wheel.price.getEeveesPrice;
    
    case StoreId.eRides:
      return eucFinderApi.wheel.price.getERidesPrice;

    case StoreId.euco:
      return eucFinderApi.wheel.price.getEucoPrice;

    case StoreId.eucSale:
      return eucFinderApi.wheel.price.getEucSalePrice;

    case StoreId.eucService:
      return eucFinderApi.wheel.price.getEucServicePrice;

    case StoreId.ewheels:
      return eucFinderApi.wheel.price.getEwheelsPrice;

      // case StoreId.inmotionFrance:
      //   return eucFinderApi.wheel.price.getInmotionFrancePrice;

    case StoreId.madridrueda:
      return eucFinderApi.wheel.price.getMadridRuedaPrice;

    case StoreId.myewheel:
      return eucFinderApi.wheel.price.getMyEWheelPrice;

    case StoreId.revRides:
      return eucFinderApi.wheel.price.getRevRidesPrice;

    case StoreId.smartWheel:
      return eucFinderApi.wheel.price.getSmartWheelPrice;

    case StoreId.urban360:
      return eucFinderApi.wheel.price.getUrban360Price;

    default:
      return undefined;
  }
};

export const useWheelPrice = (store: StoreId, url: string, expensive: boolean) => {
  const [price, setPrice] = useState<number | '-'>();
  const [loadingState, setLoadingState] = useState<LoadingState>('idle');
  
  const getPrice = async (s: StoreId, u: string, e: boolean) => {
    const request = getApiRequest(s);

    if (request) {
      setLoadingState('loading');
      const p = await request(u, e);
      setPrice(p);
      setLoadingState('success');
    }
  };

  useEffect(() => {
    getPrice(store, url, expensive);
  }, [store, url, expensive]);

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