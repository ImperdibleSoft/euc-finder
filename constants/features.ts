import { Wheel } from '../types';

export const SHOW_PRICE = false;

export const PAGINATION_SIZE = 12;

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
  'battery',
  'voltage',
  'maxGradibility',
  'groundClearance',
  'suspension',

  'headlight',
  'tailLight',
  'trolleyHandle',
  'antiSpin',
  'kickstand',
  'leds',
  'sound',
  'display',
  'color'
];

// Wheels List
export const LIST_MAIN_SPECS: (keyof Wheel | undefined)[] = [
  'price',
  'diameter',
  'maxSpeed',
  'range',
  'weight'
];

export const LIST_ADDITIONAL_SPECS: (keyof Wheel)[] = [
  'suspension',
  'trolleyHandle',
  'antiSpin',
  'sound',
  'leds',
  'display'
];

// Wheels details
export const DETAIL_HIGHLIGHTED_SPECS: (keyof Wheel | undefined)[] = [
  'price',
  'diameter',
  'width',
  'maxSpeed',
  'range',
  'weight'
];

export const DETAIL_MAIN_SPECS: (keyof Wheel | undefined)[] = [
  'ratedPower',
  'peakPower',
  'battery',
  'voltage',
  'maxGradibility',
  'groundClearance',
  'suspension'
];

export const DETAIL_ADDITIONAL_SPECS: (keyof Wheel)[] = [
  'headlight',
  'tailLight',
  'trolleyHandle',
  'antiSpin',
  'kickstand',
  'leds',
  'sound',
  'display',
  'color'
];