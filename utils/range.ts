import { SHOW_CALCULATED_RANGE } from '../constants';
import { Brands, Wheel } from '../types';

export const getRangeFromBattery = ({ battery, brandId, range }: Wheel, brands: Brands) => {
  const brand = brands[brandId];

  return SHOW_CALCULATED_RANGE && battery?.wattsHour
    ? brand.misc.kmPerWh * battery.wattsHour
    : range;
};

export const getEstimatedMinRange = (range: number) => range * 60 / 100;

export const getEstimatedMaxRange = (range: number) => range * 85 / 100;

export const toDecimals = (num: number, decimals = 2, minDecimals?: number) => num.toLocaleString('en-EN', {
  maximumFractionDigits: decimals,
  minimumFractionDigits: minDecimals ?? decimals
});
