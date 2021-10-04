import { BrandId, WheelFilters, WheelSorting } from '../types';
import { brands, stores, wheelPictures, wheelPurchaseLinks, wheels } from './data';
import { ArenaContextState } from './types';

const filtersInitialValue: WheelFilters = {
  brandId: Object.values(BrandId),
  maxPrice: undefined,
  minPrice: undefined,

  minPower: undefined,
  maxMaxSpeed: undefined,
  minMaxSpeed: undefined,
  minBatteryOutput: undefined,
  minRange: undefined,
  minVoltage: undefined,

  maxDiameter: undefined,
  minDiameter: undefined,
  maxWeight: undefined,
  suspension: undefined,
  antiSpin: undefined,
  kickstand: undefined,
  trolleyHandle: undefined,
  maxGroundClearance: undefined,
  minGroundClearance: undefined,
  leds: undefined,
  sound: undefined,
  display: undefined,
  battery: undefined
};

export const getFiltersInitialValue = () => filtersInitialValue;

const sortingInitialValue: WheelSorting = {
  key: 'range',
  order: 'desc'
};

export const getSortingInitialValue = () => sortingInitialValue;

const initialValue: ArenaContextState = {
  brands,
  filters: filtersInitialValue,
  pictures: wheelPictures,
  purchaseLinks: wheelPurchaseLinks,
  sorting: sortingInitialValue,
  stores,
  wheels
};

export const getInitialValue = () => initialValue;