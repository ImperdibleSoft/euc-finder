import { RootState } from '../types';

// Config Values
export const getPresetDefaultConfig = ({ config }: RootState) =>
  config.configValues.defaultPreset;

export const getMaxComparedWheels = ({ config }: RootState) =>
  config.configValues.maxComparedWheels;
  
export const getPaginationConfig = ({ config }: RootState) =>
  config.configValues.paginationSize;

// Feature Flags
export const getPricesConfig = ({ config }: RootState) =>
  config.featureFlags.prices;

export const getPurchaseLinksConfig = ({ config }: RootState) =>
  config.featureFlags.purchaseLinks;

export const getRangeConfig = ({ config }: RootState) =>
  config.featureFlags.calculatedRange;

// Column specs
export const getTableViewSpecs = (rootState: RootState) => {
  const { config } = rootState;

  if (!getPricesConfig(rootState)) {
    return config.specColumns.filter(k => k !== 'price');
  }

  return config.specColumns;
};

// Wheels List view
export const getListViewSpecs = (rootState: RootState) => {
  const { config: { wheelsListInfo } } = rootState;

  if (!getPricesConfig(rootState)) {
    return [
      wheelsListInfo.mainSpecs.filter(k => k !== 'price'),
      wheelsListInfo.additionalSpecs.filter(k => k !== 'price')
    ];
  }
  
  return [
    wheelsListInfo.mainSpecs,
    wheelsListInfo.additionalSpecs
  ];
};

// Wheel Detail view
export const getDetailViewSpecs = (rootState: RootState) => {
  const { config: { wheelDetailsInfo } } = rootState;

  if (!getPricesConfig(rootState)) {
    return [
      wheelDetailsInfo.highlightedSpecs.filter(k => k !== 'price'),
      wheelDetailsInfo.mainSpecs.filter(k => k !== 'price'),
      wheelDetailsInfo.additionalSpecs.filter(k => k !== 'price')
    ];
  }
  
  return [
    wheelDetailsInfo.highlightedSpecs,
    wheelDetailsInfo.mainSpecs,
    wheelDetailsInfo.additionalSpecs
  ];
};