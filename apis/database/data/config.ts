import { ConfigState } from '../../../store/types';
import { Wheel } from '../../../types';

const calculatedRange = true;

const paginationSize = 12;

const prices = false;

const purchaseLinks = true;

const maxComparedWheels = 5;

const specColumns: (keyof Wheel)[] =  [
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
  'pedals',
  'antiSpin',
  'kickstand',
  'leds',
  'sound',
  'display',
  'color'
];

const listMainSpecs: (keyof Wheel)[] =  [
  'price',
  'diameter',
  'maxSpeed',
  'range',
  'weight'
];

const listAdditionalSpecs: (keyof Wheel)[] =  [
  'trolleyHandle',
  'antiSpin',
  'sound',
  'leds',
  'display',
  'suspension'
];

const detailHighlightedSpecs: (keyof Wheel)[] =  [
  'price',
  'diameter',
  'width',
  'maxSpeed',
  'range',
  'weight'
];

const detailMainSpecs: (keyof Wheel)[] =  [
  'ratedPower',
  'peakPower',
  'battery',
  'voltage',
  'maxGradibility',
  'groundClearance',
  'suspension'
];

const detailAdditionalSpecs: (keyof Wheel)[] =  [
  'headlight',
  'tailLight',
  'trolleyHandle',
  'pedals',
  'antiSpin',
  'kickstand',
  'leds',
  'sound',
  'display',
  'color'
];

export const config: ConfigState = {
  calculatedRange,
  paginationSize,
  prices,
  purchaseLinks,
  maxComparedWheels,
  specColumns,
  listMainSpecs,
  listAdditionalSpecs,
  detailHighlightedSpecs,
  detailMainSpecs,
  detailAdditionalSpecs
};