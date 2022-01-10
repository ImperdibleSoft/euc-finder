import {
  getComfortableSpecWheights,
  getGenericSpecWheights,
  getPerformanceSpecWheights,
  getSafetySpecWheights
} from '../models/settings/specWeights';
import { RootState, SpecWeights, SpecWeightsPreset } from '../types';

export const getDisclaimer = ({ settings }: RootState) =>
  settings.disclaimer;

export const getRegion = ({ settings }: RootState) =>
  settings.region;

export const getMeasureUnits = ({ settings }: RootState) =>
  settings.measureUnits;

export const getSpecWeightsActivePreset = ({ settings }: RootState): SpecWeightsPreset =>
  settings.specWeights.preset;

export const getSpecWeightsCustomValues = ({ settings }: RootState): SpecWeights =>
  settings.specWeights.customValues;

export const getSpecWeights = (rootState: RootState): SpecWeights => {
  let specWeights: SpecWeights;

  switch (rootState.settings.specWeights.preset) {
    case SpecWeightsPreset.generic:
      specWeights = getGenericSpecWheights();
      break;

    case SpecWeightsPreset.comfy:
      specWeights = getComfortableSpecWheights();
      break;

    case SpecWeightsPreset.safe:
      specWeights = getSafetySpecWheights();
      break;

    case SpecWeightsPreset.performant:
      specWeights = getPerformanceSpecWheights();
      break;
    
    case SpecWeightsPreset.custom:
    default:
      specWeights = getSpecWeightsCustomValues(rootState);
  }

  return {
    ...specWeights,
    battery: rootState.settings.specWeights.customValues.range / 4,
    price: rootState.config.prices ? rootState.settings.specWeights.customValues.price : 0
  };
};