import { ConfigState, SpecWeightsPreset } from '../types';

export const getConfigInitialState = (): ConfigState => ({
  configValues: {
    defaultPreset: SpecWeightsPreset.generic,
    maxComparedWheels: 0,
    paginationSize: 0,
    maxCurrentAllowed: 0
  },
  featureFlags: {
    calculatedRange: false,
    prices: false,
    purchaseLinks: false
  },
  specColumns: [],
  wheelsListInfo: {
    mainSpecs: [],
    additionalSpecs: []
  },
  wheelDetailsInfo: {
    highlightedSpecs: [],
    mainSpecs: [],
    additionalSpecs: []
  }
});
