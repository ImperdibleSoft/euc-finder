import { useSelector } from 'react-redux';
import { getBrands, getListViewSpecs, getMeasureUnits, getPricesConfig, getWheels } from '../../store/selectors';
import { Wheel, WheelFilters, WheelId, WheelSorting, WheelWithPicture } from '../../types';
import { customisedSortBy, filterWheels } from '../../utils';

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
  const brands = useSelector(getBrands);
  const measureUnits = useSelector(getMeasureUnits);
  const wheels = useSelector(getWheels);

  return wheels
    .filter(wheel => filterWheels(wheel, filters, measureUnits))
    .map((wheel): WheelWithPicture => ({ ...wheel, picture: pictures?.[wheel.id] }))
    .sort(customisedSortBy(brands)(sorting.key, sorting.order));
};