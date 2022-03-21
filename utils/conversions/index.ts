import { DiameterUnits, GroundClearanceUnits, RangeUnits, DimensionsUnits, SpeedUnits, WeightUnits } from '../../types';
import { toDecimals } from '../range';
import { inchesToCentimeters, kilogramsToPounds, kilometersToMiles, milimetersToInches } from './decimalMetricSystem';

export * from './currencies';
export * from './decimalMetricSystem';
export * from './currentAndPower';

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
      return toDecimals(kilometersToMiles(value), 0);

    case RangeUnits.km:
    default:
      return toDecimals(value, 0);
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

export const getConvertedDimensions = (value: number, units?: DimensionsUnits): string => {
  switch (units) {
    case DimensionsUnits.in:
      return toDecimals(milimetersToInches(value), 1);

    case DimensionsUnits.mm:
    default:
      return toDecimals(value, 0);
  }
};
