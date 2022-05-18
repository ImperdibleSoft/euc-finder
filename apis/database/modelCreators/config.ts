import { config } from '../data/config';
import { ConfigState, SpecWeightsPreset } from '../../../store/types';
import { Wheel } from '../../../types';
import { ConfigFromServer } from '../types/config';

const createBooleanFromNumber = (val: number): boolean => val !== 0;
const createStringArrayFromString = (val: string): (keyof Wheel)[] =>
  val
    .replace(/\ /g, '')
    .replace(/\n/g, '')
    .replace(/\r/g, '')
    .split(',') as (keyof Wheel)[];

export const createConfigFromDatabase = (data: ConfigFromServer): ConfigState => ({
  configValues: {
    defaultPreset: (data.defaultPreset as SpecWeightsPreset)
      ?? config.configValues.defaultPreset,
    maxComparedWheels: Number(data.maxComparedWheels ?? config.configValues.maxComparedWheels),
    maxCurrentAllowed: Number(data.maxCurrentAllowed ?? config.configValues.maxCurrentAllowed),
    paginationSize: Number(data.paginationSize ?? config.configValues.paginationSize)
  },
  featureFlags: {
    calculatedRange: data.calculatedRange
      ? createBooleanFromNumber(Number(data.calculatedRange))
      : config.featureFlags.calculatedRange,
    prices: data.prices
      ? createBooleanFromNumber(Number(data.prices))
      : config.featureFlags.prices,
    purchaseLinks: data.purchaseLinks
      ? createBooleanFromNumber(Number(data.purchaseLinks))
      : config.featureFlags.purchaseLinks
  },
  specColumns: data.specColumns
    ? createStringArrayFromString(`${ data.specColumns }`)
    : config.specColumns,
  wheelDetailsInfo: {
    additionalSpecs: data.wheelAdditionalSpecs
      ? createStringArrayFromString(`${ data.wheelAdditionalSpecs }`)
      : config.wheelDetailsInfo.additionalSpecs,
    highlightedSpecs: data.wheelHighlightedSpecs
      ? createStringArrayFromString(`${ data.wheelHighlightedSpecs }`)
      : config.wheelDetailsInfo.highlightedSpecs,
    mainSpecs: data.wheelMainSpecs
      ? createStringArrayFromString(`${ data.wheelMainSpecs }`)
      : config.wheelDetailsInfo.mainSpecs
  },
  wheelsListInfo: {
    additionalSpecs: data.listAdditionalSpecs
      ? createStringArrayFromString(`${ data.listAdditionalSpecs }`)
      : config.wheelsListInfo.additionalSpecs,
    mainSpecs: data.listMainSpecs
      ? createStringArrayFromString(`${ data.listMainSpecs }`)
      : config.wheelsListInfo.mainSpecs
  }
});
