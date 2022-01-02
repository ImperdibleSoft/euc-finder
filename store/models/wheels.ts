import { BrandId, Wheel, WheelFilters, WheelSorting } from '../../types';
import { getRangeFromBattery } from '../../utils';
import { WheelsState } from '../types';
import {
  begodeApp,
  brands,
  darknessBotApp,
  eucWorldApp,
  inmotionApp,
  kingsongApp,
  stores,
  wheelPictures,
  wheelPurchaseLinks,
  wheels
} from './data';

const getFiltersInitialValue = (): WheelFilters => ({
  categories: ['starter', 'standard', 'high-end', 'extreme'],
  brandId: Object.values(BrandId),

  maxMaxSpeed: undefined,
  minMaxSpeed: undefined,

  minRange: undefined,
  maxWeight: undefined,

  maxPrice: undefined,
  minPrice: undefined,

  maxDiameter: undefined,
  minDiameter: undefined,
  maxWidth: undefined,
  minWidth: undefined,

  maxGroundClearance: undefined,
  minGroundClearance: undefined,

  minPower: undefined,
  minVoltage: undefined,
  suspension: undefined,
  
  minBatteryParallels: undefined,
  maxBatteryParallels: undefined,
  minBatteryOutput: undefined,
  batteryType: undefined,

  color: undefined,
  trolleyHandle: undefined,
  antiSpin: undefined,
  kickstand: undefined,
  
  leds: undefined,
  sound: undefined,
  display: undefined
});

const getSortingInitialValue = (): WheelSorting => ({
  key: 'range',
  order: 'desc'
});

const getWheelsInitialValue = (): Wheel[] =>
  wheels.map(w => ({ ...w, range: getRangeFromBattery(w, brands) }));

export const getWheelsInitialState = (): WheelsState => ({
  apps: {
    official: [begodeApp, inmotionApp, kingsongApp],
    unofficial: [darknessBotApp, eucWorldApp]
  },
  brands,
  collection: getWheelsInitialValue(),
  filters: getFiltersInitialValue(),
  pictures: wheelPictures,
  purchaseLinks: wheelPurchaseLinks,
  sorting: getSortingInitialValue(),
  stores
});