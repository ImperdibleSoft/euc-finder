import { LIST_ADDITIONAL_SPECS, LIST_MAIN_SPECS } from '../../constants';
import { useArenaContext } from '../../context';
import { Wheel, WheelFilters, WheelSorting } from '../../types';
import { customisedSortBy, filterWheels } from '../../utils';

export * from './columns';
export * from './filtering';
export * from './sidebar';
export * from './sorting';

export const useEucListInformationGroups = (sorting: WheelSorting) => {
  const mainSpecKeys = [ ...LIST_MAIN_SPECS.filter(s => !!s) ] as (keyof Wheel)[];

  if (sorting.key !== 'name' && sorting.key !== 'brandId' && !mainSpecKeys.includes(sorting.key)) {
    mainSpecKeys.unshift(sorting.key);
  }

  return {
    mainSpecs: mainSpecKeys,
    additionalSpecs: LIST_ADDITIONAL_SPECS
  };
};

export const useEucList = (filters: WheelFilters, sorting: WheelSorting): Wheel[] => {
  const { brands, wheels } = useArenaContext();

  return wheels
    .filter(wheel => filterWheels(wheel, filters))
    .sort(customisedSortBy(brands)(sorting.key, sorting.order));
};