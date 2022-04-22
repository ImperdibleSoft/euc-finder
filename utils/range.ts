import { Brand, Wheel } from '../types';
import { getBrandInfo } from './brands';

const REFERENCE_WEIGHT = 77;

const getWeightMultiplier = (weight: number) => {
  const multiplier = (1-(0.15) * (weight - REFERENCE_WEIGHT)/10);
  return multiplier;
};

export const getRangeFromBattery = ({ battery, brandId, range }: Wheel, weight: number, brands: Brand[]) => {
  const brand = getBrandInfo(brandId, brands);
  const defaultRange = (brand && battery?.wattsHour
    ? brand.misc.kmPerWh * battery.wattsHour
    : range);

  const maxRange = (defaultRange * 0.8) * getWeightMultiplier(weight);

  return (maxRange <= 0) ? 0 : maxRange;
};

export const getEstimatedMinRange = (maxRange: number) => {
  const minRange = (maxRange * 0.70);
  return (minRange <= 0) ? 0 : minRange;
};

export const toDecimals = (num: number, decimals = 2, minDecimals?: number) => num.toLocaleString('en-EN', {
  maximumFractionDigits: decimals,
  minimumFractionDigits: minDecimals ?? decimals
});
