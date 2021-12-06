import { useState } from 'react';
import { useSelector } from 'react-redux';
import { DETAIL_ADDITIONAL_SPECS, DETAIL_HIGHLIGHTED_SPECS, DETAIL_MAIN_SPECS } from '../../constants';
import {
  getBrands,
  getPurchaseLinks,
  getRegion,
  getStores,
  getWheelById,
  getWheelPictures
} from '../../store/selectors';
import { PurchaseLink, Wheel, WheelId } from '../../types';
import { formatWheelName, getPurchaseLink, showPrice, sortBy } from '../../utils';

export * from './confirmationModal';
export * from './wheelPrice';

export const useEucDetail = (id: WheelId) => {
  const brands = useSelector(getBrands);
  const pictures = useSelector(getWheelPictures(id));
  const wheel = useSelector(getWheelById(id));

  const name = !!wheel ? formatWheelName(wheel, brands) : '';

  return {
    name,
    pictures,
    wheel
  };
};

export const useEucDetailInformationGroups = () => ({
  highlightedSpecs: DETAIL_HIGHLIGHTED_SPECS.filter(s => !!s && (s !== 'price' || showPrice())) as (keyof Wheel)[],
  mainSpecs: DETAIL_MAIN_SPECS.filter(s => !!s) as (keyof Wheel)[],
  additionalSpecs: DETAIL_ADDITIONAL_SPECS
});

export const useEucDetailHandlers = () => {
  const [pictureDetail, setPictureDetail] = useState<undefined | string>();

  const handleOpenPicture = (pictureUrl: string) => {
    setPictureDetail(pictureUrl);
  };

  const handleClosePicture = () => {
    setPictureDetail(undefined);
  };

  return {
    pictureDetail,
    handleOpenPicture,
    handleClosePicture
  };
};

export const useEucPurchaseLinks = (id: WheelId) => {
  const wheelLinks = useSelector(getPurchaseLinks(id));
  const region = useSelector(getRegion);
  const stores = useSelector(getStores);

  const options = {
    region,
    stores
  };

  const sponsoredLinks = wheelLinks
    .map(url => getPurchaseLink({ ...options, url, sponsored: true }))
    .filter(link => !!link) as PurchaseLink[];

  const regularLinks = wheelLinks
    .map(url => getPurchaseLink({ ...options, url }))
    .filter(link => !!link) as PurchaseLink[];

  return {
    sponsoredLinks: sponsoredLinks.sort(sortBy('store', 'asc', 'name')),
    regularLinks: regularLinks.sort(sortBy('store', 'asc', 'name'))
  };
};