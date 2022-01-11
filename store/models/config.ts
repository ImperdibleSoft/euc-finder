import { ConfigState } from '../types';

export const getConfigInitialState = (): ConfigState => ({
  calculatedRange: false,
  paginationSize: 0,
  prices: false,
  purchaseLinks: false,
  maxComparedWheels: 0,

  specColumns: [],

  listMainSpecs: [],
  listAdditionalSpecs: [],

  detailHighlightedSpecs: [],
  detailMainSpecs: [],
  detailAdditionalSpecs: []
});