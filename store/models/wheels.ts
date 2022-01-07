import { BrandId, WheelFilters, WheelSorting } from '../../types';
import { WheelsState } from '../types';
import {
  begodeApp,
  brands,
  darknessBotApp,
  eucWorldApp,
  inmotionApp,
  kingsongApp,
  stores,
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

export const getWheelsInitialState = (): WheelsState => ({
  apps: {
    official: [begodeApp, inmotionApp, kingsongApp],
    unofficial: [darknessBotApp, eucWorldApp]
  },
  brands,
  collection: wheels,
  comparing: [],
  filters: getFiltersInitialValue(),
  purchaseLinks: wheelPurchaseLinks,
  sorting: getSortingInitialValue(),
  stores
});