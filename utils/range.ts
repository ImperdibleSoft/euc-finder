import { Brand, Wheel } from '../types';
import { getBrandInfo } from './brands';

const hasWeight = (wheelWeight?: number) => !!wheelWeight && wheelWeight > 0;

const PERSON_REFERENCE_WEIGHT = 77;
const WHEEL_REFERENCE_WEIGH = 30;

const getWeightMultiplier = (userWeight: number, wheelWeight = 0) => {
  const referenceWeight = PERSON_REFERENCE_WEIGHT + (hasWeight(wheelWeight) ? WHEEL_REFERENCE_WEIGH : 0);
  const loadWeight = userWeight + wheelWeight;

  const multiplier = (1-(0.15) * (loadWeight - referenceWeight)/10);
  return multiplier;
};

export const getRangeFromBattery = (
  {
    battery,
    brandId,
    range,
    weight: wheelWeight
  }: Wheel,
  userWeight: number,
  brands: Brand[]
) => {
  const brand = getBrandInfo(brandId, brands);
  const defaultRange = (brand && battery?.wattsHour
    ? brand.misc.kmPerWh * battery.wattsHour
    : range);

  const multiplier = hasWeight(wheelWeight) ? 0.95 : 0.85;
  const maxRange = (defaultRange * multiplier) * getWeightMultiplier(userWeight, wheelWeight);

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
