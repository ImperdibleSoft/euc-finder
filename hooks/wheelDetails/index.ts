import { useState } from 'react';
import { DETAIL_ADDITIONAL_SPECS, DETAIL_HIGHLIGHTED_SPECS, DETAIL_MAIN_SPECS } from '../../constants';
import { useArenaContext } from '../../context';
import { PurchaseLink, Wheel, WheelId } from '../../types';
import { formatWheelName, getPurchaseLink } from '../../utils';

export const useEucDetail = (id: string) => {
  const { brands, pictures: wheelPictures, wheels } = useArenaContext();
  const wheel = wheels.find(w => w.id === id);

  const name = !!wheel ? formatWheelName(wheel, brands) : '';
  const pictures = !!wheel ? wheelPictures[wheel.id] : [];

  return {
    name,
    pictures,
    wheel
  };
};

export const useEucDetailInformationGroups = () => ({
  highlightedSpecs: DETAIL_HIGHLIGHTED_SPECS.filter(s => !!s) as (keyof Wheel)[],
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

export const useEucPurchaseLinks = (id: string) => {
  const { purchaseLinks: wheelPurchaseLinks, stores } = useArenaContext();
  const wheelLinks = wheelPurchaseLinks[id as WheelId] ?? [];

  const sponsoredLinks = wheelLinks
    .map(url => getPurchaseLink(stores, url, true))
    .filter(link => !!link) as PurchaseLink[];

  const regularLinks = wheelLinks
    .map(url => getPurchaseLink(stores, url))
    .filter(link => !!link) as PurchaseLink[];

  return {
    sponsoredLinks,
    regularLinks
  };
};