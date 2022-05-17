import { config } from '../data/config';
import { ConfigState, SpecWeightsPreset } from '../../../store/types';
import { Wheel } from '../../../types';

const createBooleanFromNumber = (val: number): boolean => val !== 0;
const createStringArrayFromString = (val: string): (keyof Wheel)[] =>
  val
    .replace(/\ /g, '')
    .replace(/\n/g, '')
    .replace(/\r/g, '')
    .split(',') as (keyof Wheel)[];

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const createConfigFromDatabase = (data: any): ConfigState => ({
  configValues: {
    defaultPreset: (data.defaultPreset as SpecWeightsPreset)
      ?? config.configValues.defaultPreset,
    maxComparedWheels: data.maxComparedWheels
      ?? config.configValues.maxComparedWheels,
    maxCurrentAllowed: data.maxCurrentAllowed
      ?? config.configValues.maxCurrentAllowed,
    paginationSize: data.paginationSize
      ?? config.configValues.paginationSize
  },
  featureFlags: {
    calculatedRange: createBooleanFromNumber(data.calculatedRange)
      ?? config.featureFlags.calculatedRange,
    prices: createBooleanFromNumber(data.prices)
      ?? config.featureFlags.prices,
    purchaseLinks: createBooleanFromNumber(data.purchaseLinks)
      ?? config.featureFlags.purchaseLinks
  },
  specColumns: data.specColumns
    ? createStringArrayFromString(data.specColumns)
    : config.specColumns,
  wheelDetailsInfo: {
    additionalSpecs: data.wheelAdditionalSpecs
      ? createStringArrayFromString(data.wheelAdditionalSpecs)
      : config.wheelDetailsInfo.additionalSpecs,
    highlightedSpecs: data.wheelHighlightedSpecs
      ? createStringArrayFromString(data.wheelHighlightedSpecs)
      : config.wheelDetailsInfo.highlightedSpecs,
    mainSpecs: data.wheelMainSpecs
      ? createStringArrayFromString(data.wheelMainSpecs)
      : config.wheelDetailsInfo.mainSpecs
  },
  wheelsListInfo: {
    additionalSpecs: data.listAdditionalSpecs
      ? createStringArrayFromString(data.listAdditionalSpecs)
      : config.wheelsListInfo.additionalSpecs,
    mainSpecs: data.listMainSpecs
      ? createStringArrayFromString(data.listMainSpecs)
      : config.wheelsListInfo.mainSpecs
  }
});
