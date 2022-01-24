import { BrandId, WheelFilters, WheelId, WheelSorting } from '../../types';
import { WheelsState } from '../types';

const getFiltersInitialValue = (): WheelFilters => ({
  availability: ['announced', 'preorder', 'available'],
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

  maxPower: undefined,
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
    official: [],
    unofficial: []
  },
  brands: [],
  collection: [],
  comparing: [
    // Begode / Gotway
    WheelId.mten,
    WheelId.mcm5,
    WheelId.tesla,
    WheelId.nikola,
    WheelId.msx,
    WheelId.msx100,
    WheelId.msp,
    WheelId.rsHT,
    WheelId.rsHS,
    WheelId.ex,
    WheelId.exnHT,
    WheelId.exnHS,
    WheelId.hero,
    WheelId.ex2,
    WheelId.master,
    WheelId.monster,
    WheelId.monsterPro,
  
    // BeiDou
    WheelId.recioWheel16,
    WheelId.recioWheel18,
  
    // Extreme bull
    WheelId.commanderHT,
    WheelId.commanderHS,
    WheelId.xmenHT,
    WheelId.xmenHS,
  
    // Inmotion
    WheelId.v5,
    WheelId.v5f,
    WheelId.v8,
    WheelId.v8f,
    WheelId.v10,
    WheelId.v10f,
    WheelId.v11,
    WheelId.v12,
    WheelId.v12HT,
    WheelId.v13,
    
    // Kingsong
    WheelId.ks14m,
    WheelId.ks14s,
    WheelId.ks14d,
    WheelId.ks16s,
    WheelId.ks16xs,
    WheelId.ks16x,
    WheelId.ks18l,
    WheelId.ks18xl,
    WheelId.ksS18,
    WheelId.ksS20,
  
    // Veteran
    WheelId.sherman,
    WheelId.abrams,
    WheelId.shermanMax
  ],
  filters: getFiltersInitialValue(),
  // @ts-ignore
  purchaseLinks: {},
  sorting: getSortingInitialValue(),
  stores: []
});
