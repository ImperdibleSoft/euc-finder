import { Brands, Wheel } from '../types';

export const getRangeFromBattery = ({ battery, brandId, range }: Wheel, brands: Brands) => {
  const brand = brands[brandId];

  return battery?.wattsHour
    ? brand.misc.kmPerWh * battery.wattsHour
    : range;
};

export const getEstimatedMinRange = (maxRange: number) => maxRange * 70.5882 / 100;

export const toDecimals = (num: number, decimals = 2, minDecimals?: number) => num.toLocaleString('en-EN', {
  maximumFractionDigits: decimals,
  minimumFractionDigits: minDecimals ?? decimals
});