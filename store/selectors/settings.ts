import {
  getComfortableSpecWheights,
  getGenericSpecWheights,
  getPerformanceSpecWheights,
  getSafetySpecWheights
} from '../models/settings/specWeights';
import { RootState, SpecWeights, SpecWeightsPreset } from '../types';
import { getPresetDefaultConfig, getPricesConfig } from './config';

export const getDisclaimer = ({ settings }: RootState) =>
  settings.disclaimer;

export const getRegion = ({ settings }: RootState) =>
  settings.region;

export const getMeasureUnits = ({ settings }: RootState) =>
  settings.measureUnits;

export const getSpecWeightsActivePreset = (rootState: RootState): SpecWeightsPreset =>
  rootState.settings.specWeights.preset ?? getPresetDefaultConfig(rootState);

export const getSpecWeightsCustomValues = ({ settings }: RootState): SpecWeights =>
  settings.specWeights.customValues;

export const getSpecWeights = (rootState: RootState): SpecWeights => {
  let specWeights: SpecWeights;
  const showPrices = getPricesConfig(rootState);
  const activePreset = getSpecWeightsActivePreset(rootState);

  switch (activePreset) {
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
    battery: specWeights.range / 4,
    price: showPrices ? specWeights.price : 0
  };
};