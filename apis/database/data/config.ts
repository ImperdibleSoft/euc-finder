import { ConfigState, SpecWeightsPreset } from '../../../store/types';
import { Wheel } from '../../../types';

// Config values
const defaultPreset = SpecWeightsPreset.generic;
const maxComparedWheels = 5;
const paginationSize = 12;
const maxCurrentAllowed = 1.7;

// Feature flags
const calculatedRange = true;
const prices = false;
const purchaseLinks = true;

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
  'dimensions',
  'pedals',
  'antiSpin',
  'kickstand',
  'leds',
  'sound',
  'display',
  'color'
];

// Wheels list info
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

// Wheel details info
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
  'hollowMotor',
  'chargePorts',
  'stockCharger',
  'maxCharger',
  'usbPorts',
  'headlight',
  'tailLight',
  'trolleyHandle',
  'dimensions',
  'pedals',
  'pedalSize',
  'antiSpin',
  'kickstand',
  'leds',
  'sound',
  'display',
  'color'
];

export const config: ConfigState = {
  configValues: {
    defaultPreset,
    maxComparedWheels,
    paginationSize,
    maxCurrentAllowed
  },
  featureFlags: {
    calculatedRange,
    prices,
    purchaseLinks
  },
  specColumns,
  wheelsListInfo: {
    mainSpecs: listMainSpecs,
    additionalSpecs: listAdditionalSpecs
  },
  wheelDetailsInfo: {
    highlightedSpecs: detailHighlightedSpecs,
    mainSpecs: detailMainSpecs,
    additionalSpecs: detailAdditionalSpecs
  }
};
