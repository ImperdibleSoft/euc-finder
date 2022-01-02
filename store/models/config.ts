import { LOCAL_STORAGE_KEY } from '../../types';
import { getItem } from '../../utils';
import { ConfigState } from '../types';

export const getConfigInitialState = (): ConfigState => ({
  calculatedRange: true,
  paginationSize: 12,
  prices: getItem(LOCAL_STORAGE_KEY.SHOW_PRICE) === 'true' || false,
  purchaseLinks: getItem(LOCAL_STORAGE_KEY.SHOW_PURCHASE_LINKS) === 'true' || true,

  specColumns: [
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
  ],

  listMainSpecs: [
    'price',
    'diameter',
    'maxSpeed',
    'range',
    'weight'
  ],
  listAdditionalSpecs: [
    'suspension',
    'trolleyHandle',
    'antiSpin',
    'sound',
    'leds',
    'display'
  ],

  detailHighlightedSpecs: [
    'price',
    'diameter',
    'width',
    'maxSpeed',
    'range',
    'weight'
  ],
  detailMainSpecs: [
    'ratedPower',
    'peakPower',
    'battery',
    'voltage',
    'maxGradibility',
    'groundClearance',
    'suspension'
  ],
  detailAdditionalSpecs: [
    'headlight',
    'tailLight',
    'trolleyHandle',
    'antiSpin',
    'kickstand',
    'leds',
    'sound',
    'display',
    'color'
  ]
});