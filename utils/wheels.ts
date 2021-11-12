import { Category, Wheel } from '../types';
import { getEstimatedMaxRange } from './range';

export const getWheelCategory = ({ maxSpeed, range, ratedPower, battery }: Wheel): Category => {
  if (maxSpeed <=20 || getEstimatedMaxRange(range)  <=25 || ratedPower <= 800 || battery <= 500) {
    return 'starter';
  }

  if (maxSpeed <=40 || getEstimatedMaxRange(range) <=60 || ratedPower < 2000 || battery <= 1000) {
    return 'standard';
  }

  if (maxSpeed <= 60 || getEstimatedMaxRange(range) <= 100 || ratedPower < 2000 || battery <= 1500) {
    return 'high-end';
  }

  return 'extreme';
};