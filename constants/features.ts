import { Wheel } from '../types';

export const SHOW_PRICE = false;

// Wheels List
export const LIST_MAIN_SPECS: (keyof Wheel | undefined)[] = [
  SHOW_PRICE ? 'price' : undefined,
  'diameter',
  'maxSpeed',
  'range',
  'weight'
];

export const LIST_ADDITIONAL_SPECS: (keyof Wheel)[] = [
  'trolleyHandle',
  'antiSpin',
  'sound',
  'leds',
  'display',
  'suspension'
];

// Wheels Table
export const SPEC_COLUMNS: Array<keyof Wheel> = [
  'name',
  'price',

  'diameter',
  'width',

  'maxSpeed',
  
  'range',
  'weight',
  
  'ratedPower',
  'maxGradibility',
  'voltage',
  'battery',
  'batteryOutput',

  'color',
  'trolleyHandle',
  'antiSpin',
  'kickstand',
  'suspension',

  'groundClearance',

  'headlight',
  'tailLight',
  'leds',
  'sound',
  'display'
];

// Wheels details
export const DETAIL_HIGHLIGHTED_SPECS: (keyof Wheel | undefined)[] = [
  SHOW_PRICE ? 'price': undefined,
  'diameter',
  'width',
  'maxSpeed',
  'range',
  'weight'
];

export const DETAIL_MAIN_SPECS: (keyof Wheel | undefined)[] = [
  'ratedPower',
  'maxGradibility',
  'voltage',
  'trolleyHandle',
  'antiSpin',
  'kickstand',
  'suspension'
];

export const DETAIL_ADDITIONAL_SPECS: (keyof Wheel)[] = [
  'peakPower',
  'batteryOutput',
  'battery',
  'groundClearance',
  'headlight',
  'tailLight',
  'leds',
  'sound',
  'display',
  'color'
];