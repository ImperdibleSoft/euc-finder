import { DiameterUnits, GroundClearanceUnits, RangeUnits, SpeedUnits, WeightUnits } from '../types';
import { toDecimals } from './range';

const inchesToCentimeters = (inches: number) => inches * 2.54;

const kilometersToMiles = (kilometers: number) => kilometers * 0.621371;

const kilogramsToPounds = (kilograms: number) => kilograms * 2.20462;

const milimetersToInches = (milimeters: number) => milimeters * 0.0393701;

export const getConvertedDiameter = (value: number, units?: DiameterUnits, decimals = 0): string => {
  switch (units) {
    case DiameterUnits.cm:
      return toDecimals(inchesToCentimeters(value), decimals, decimals ? 0 : 0);

    case DiameterUnits.in:
    default:
      return toDecimals(value, decimals, decimals ? 0 : 0);
  }
};

export const getConvertedSpeed = (value: number, units?: SpeedUnits): string => {
  switch (units) {
    case SpeedUnits.mih:
      return toDecimals(kilometersToMiles(value), 0);

    case SpeedUnits.kmh:
    default:
      return toDecimals(value, 0);
  }
};

export const getConvertedRange = (value: number, units?: RangeUnits): string => {
  switch (units) {
    case RangeUnits.mi:
      return toDecimals(kilometersToMiles(value));

    case RangeUnits.km:
    default:
      return toDecimals(value);
  }
};

export const getConvertedGroundClearance = (value: number, units?: GroundClearanceUnits): string => {
  switch (units) {
    case GroundClearanceUnits.in:
      return toDecimals(milimetersToInches(value), 1);

    case GroundClearanceUnits.mm:
    default:
      return toDecimals(value, 0);
  }
};

export const getConvertedWeight = (value: number, units?: WeightUnits): string => {
  switch (units) {
    case WeightUnits.lb:
      return toDecimals(kilogramsToPounds(value), 2);

    case WeightUnits.kg:
    default:
      return toDecimals(value, 2);
  }
};