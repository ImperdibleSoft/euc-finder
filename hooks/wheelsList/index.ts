import { useSelector } from 'react-redux';
import {
  getListViewSpecs,
  getMaxCurrentAllowed,
  getMeasureUnits,
  getPricesConfig,
  getWheels
} from '../../store/selectors';
import { Wheel, WheelFilters, WheelId, WheelSorting, WheelWithPicture } from '../../types';
import { cleanWheelId, customisedSortBy, filterWheels } from '../../utils';

export * from './columns';
export * from './comparing';
export * from './filtering';
export * from './headingButtons';
export * from './sidebar';
export * from './sorting';

export const useEucListInformationGroups = (sorting: WheelSorting) => {
  const showPrice = useSelector(getPricesConfig);
  const [listMainSpecs, listAdditionalSpecs] = useSelector(getListViewSpecs);

  const mainSpecKeys = [ ...listMainSpecs.filter(s => !!s && (s !== 'price' || showPrice)) ] as (keyof Wheel)[];

  if (sorting.key !== 'name' && sorting.key !== 'brandId' && !mainSpecKeys.includes(sorting.key)) {
    mainSpecKeys.unshift(sorting.key);
  }

  return {
    mainSpecs: mainSpecKeys,
    additionalSpecs: listAdditionalSpecs
  };
};

export const useEucList = (
  filters: WheelFilters,
  sorting: WheelSorting,
  pictures: Record<WheelId, string>
): WheelWithPicture[] => {
  const measureUnits = useSelector(getMeasureUnits);
  const maxCurrentAllowed = useSelector(getMaxCurrentAllowed);
  const wheels = useSelector(getWheels);

  return wheels
    .filter(wheel => filterWheels(wheel, filters, measureUnits))
    .map((wheel): WheelWithPicture => ({ ...wheel, picture: pictures?.[cleanWheelId(wheel.id)] }))
    .sort(customisedSortBy(sorting.key, sorting.order, { maxCurrentAllowed }));
};
