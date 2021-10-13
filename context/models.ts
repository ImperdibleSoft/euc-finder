import { BrandId, WheelFilters, WheelSorting } from '../types';
import {
  DiameterUnits,
  GroundClearanceUnits,
  RangeUnits,
  SpeedUnits,
  WeightUnits,
  WidthUnits
} from '../types/settings';
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

export const getFiltersInitialValue = () => ({ ...filtersInitialValue });

const sortingInitialValue: WheelSorting = {
  key: 'range',
  order: 'desc'
};

export const getSortingInitialValue = () => ({ ...sortingInitialValue });

const measureUnitsInitialValue: ArenaContextState['measureUnits'] = {
  diameter: DiameterUnits.in,
  groundClearance: GroundClearanceUnits.mm,
  range: RangeUnits.km,
  maxSpeed: SpeedUnits.kmh,
  weight: WeightUnits.kg,
  width: WidthUnits.in
};

export const getMeasureUnitsInitialValue = () => ({ ...measureUnitsInitialValue });

const initialValue: ArenaContextState = {
  brands,
  filters: filtersInitialValue,
  measureUnits: measureUnitsInitialValue,
  pictures: wheelPictures,
  purchaseLinks: wheelPurchaseLinks,
  region: 'eu',
  sorting: sortingInitialValue,
  stores,
  wheels
};

export const getInitialValue = () => ({ ...initialValue });