import { useRouter } from 'next/router';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { VIDEOS } from '../../constants/clientRoutes';
import {
  getBrands,
  getDealers,
  getDetailViewSpecs,
  getPricesConfig,
  getPurchaseLinks,
  getPurchaseLinksConfig,
  getRegion,
  getVideosByWheel,
  getWheelById
} from '../../store/selectors';
import { PurchaseLink, Wheel, WheelId } from '../../types';
import { formatWheelName, getPurchaseLink, sortBy } from '../../utils';
import { useVideoFilterFields } from '..';

export * from './confirmationModal';
export * from './wheelPrice';

export const useEucDetail = (id: WheelId) => {
  const brands = useSelector(getBrands);
  const wheel = useSelector(getWheelById(id));

  const name = !!wheel ? formatWheelName(wheel, brands) : '';

  return {
    name,
    wheel
  };
};

export const useEucDetailInformationGroups = () => {
  const showPrice = useSelector(getPricesConfig);
  const [highlightedSpecs, mainSpecs, additionalSpecs] = useSelector(getDetailViewSpecs);

  return {
    highlightedSpecs: highlightedSpecs.filter(s => !!s && (s !== 'price' || showPrice)) as (keyof Wheel)[],
    mainSpecs: mainSpecs.filter(s => !!s) as (keyof Wheel)[],
    additionalSpecs
  };};

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
  const dealers = useSelector(getDealers);
  const showAllPurchaseLinks = useSelector(getPurchaseLinksConfig);

  const options = {
    region,
    stores: dealers
  };

  const promotedLinks = wheelLinks
    .map(url => getPurchaseLink({ ...options, url, promoted: true }, showAllPurchaseLinks))
    .filter(link => !!link) as PurchaseLink[];

  const regularLinks = wheelLinks
    .map(url => getPurchaseLink({ ...options, url }, showAllPurchaseLinks))
    .filter(link => !!link) as PurchaseLink[];

  return {
    promotedLinks: promotedLinks.sort(sortBy('store', 'asc', 'name')),
    regularLinks: regularLinks.sort(sortBy('store', 'asc', 'name'))
  };
};

export const useEucVideos = (id: WheelId) => {
  const router = useRouter();
  const videos = useSelector(getVideosByWheel(id));
  const { handleChangeWheels, handleResetFilters } = useVideoFilterFields();

  const handleWatchMoreVideos = () => {
    handleResetFilters();
    handleChangeWheels(id);
    router.push(VIDEOS);
  };

  return {
    handleWatchMoreVideos,
    totalCount: videos.length,
    videos: videos.slice(0, 6)
  };
};
