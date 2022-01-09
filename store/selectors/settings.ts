import { RootState, SpecWeights } from '../types';

export const getDisclaimer = ({ settings }: RootState) =>
  settings.disclaimer;

export const getRegion = ({ settings }: RootState) =>
  settings.region;

export const getMeasureUnits = ({ settings }: RootState) =>
  settings.measureUnits;

export const getSpecWeights = ({ config, settings }: RootState): SpecWeights => ({
  ...settings.specWeights,
  price: config.prices ? settings.specWeights.price : 0
});