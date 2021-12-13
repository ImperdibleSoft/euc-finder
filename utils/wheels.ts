import { Category, Wheel } from '../types';
import { getEstimatedMaxRange } from './range';

export const getWheelCategory = ({ maxSpeed, range, ratedPower, battery }: Wheel): Category => {
  if (
    (maxSpeed && maxSpeed <=20)
    || (range && getEstimatedMaxRange(range)  <=25)
    || (ratedPower && ratedPower <= 800)
    || (battery.wattsHour && battery.wattsHour <= 500)
  ) {
    return 'starter';
  }

  if (
    (maxSpeed && maxSpeed <=40)
    || (range && getEstimatedMaxRange(range) <=60)
    || (ratedPower && ratedPower < 2000)
    || (battery.wattsHour && battery.wattsHour <= 1000)
  ) {
    return 'standard';
  }

  if (
    (maxSpeed && maxSpeed <= 60)
    || (range && getEstimatedMaxRange(range) <= 100)
    || (ratedPower && ratedPower < 2000)
    || (battery.wattsHour && battery.wattsHour <= 1500)
  ) {
    return 'high-end';
  }

  return 'extreme';
};