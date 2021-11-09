import { BrandId, LOCAL_STORAGE_KEY, Region, WheelFilters, WheelSorting } from '../types';
import {
  DiameterUnits,
  GroundClearanceUnits,
  RangeUnits,
  SpeedUnits,
  WeightUnits,
  WidthUnits
} from '../types/settings';
import { getItem } from '../utils';
import { brands, stores, wheelPictures, wheelPurchaseLinks, wheels } from './data';
import { ArenaContextState } from './types';

export const getFiltersInitialValue = (): WheelFilters => ({
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
  display: undefined
});

export const getMeasureUnitsDefaultValue = (): ArenaContextState['measureUnits'] => ({
  diameter: DiameterUnits.in,
  groundClearance: GroundClearanceUnits.mm,
  maxSpeed: SpeedUnits.kmh,
  range: RangeUnits.km,
  weight: WeightUnits.kg,
  width: WidthUnits.in
});
const measureUnitsDefaultValue = getMeasureUnitsDefaultValue();

export const getMeasureUnitsInitialValue = (): ArenaContextState['measureUnits'] => ({
  diameter:
    getItem(LOCAL_STORAGE_KEY.PREFERENCE_DIAMETER) as DiameterUnits
    || measureUnitsDefaultValue.diameter,
  groundClearance:
    getItem(LOCAL_STORAGE_KEY.PREFERENCE_GROUND_CLEARANCE) as GroundClearanceUnits
    || measureUnitsDefaultValue.groundClearance,
  maxSpeed:
    getItem(LOCAL_STORAGE_KEY.PREFERENCE_MAX_SPEED) as SpeedUnits
    || measureUnitsDefaultValue.maxSpeed,
  range:
    getItem(LOCAL_STORAGE_KEY.PREFERENCE_RANGE) as RangeUnits
    || measureUnitsDefaultValue.range,
  weight:
    getItem(LOCAL_STORAGE_KEY.PREFERENCE_WEIGHT) as WeightUnits
    || measureUnitsDefaultValue.weight,
  width:
    getItem(LOCAL_STORAGE_KEY.PREFERENCE_WIDTH) as WidthUnits
    || measureUnitsDefaultValue.width
});

export const getSortingInitialValue = (): WheelSorting => ({
  key: 'range',
  order: 'desc'
});

export const getInitialValue = (): ArenaContextState => ({
  brands,
  filters: getFiltersInitialValue(),
  measureUnits: getMeasureUnitsInitialValue(),
  pictures: wheelPictures,
  purchaseLinks: wheelPurchaseLinks,
  region: (getItem(LOCAL_STORAGE_KEY.REGION) || 'eu') as Region,
  sorting: getSortingInitialValue(),
  stores,
  wheels
});