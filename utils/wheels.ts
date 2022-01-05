import { Category, Wheel } from '../types';

export const getWheelCategory = ({ maxSpeed, range, ratedPower, battery }: Wheel): Category | undefined => {  
  if (
    (maxSpeed && maxSpeed <= 20)
    || (range && range <= 25)
    || (ratedPower && ratedPower <= 800)
    || (battery.wattsHour && battery.wattsHour <= 500)
  ) {
    return 'starter';
  }

  if (
    (maxSpeed && maxSpeed <= 40)
    || (range && range <= 60)
    || (ratedPower && ratedPower < 2000)
    || (battery.wattsHour && battery.wattsHour <= 1000)
  ) {
    return 'standard';
  }

  if (
    (maxSpeed && maxSpeed <= 60)
    || (range && range <= 100)
    || (ratedPower && ratedPower < 2000)
    || (battery.wattsHour && battery.wattsHour <= 1500)
  ) {
    return 'high-end';
  }

  // If there is no available data, don't return any category
  if (!maxSpeed && !range && !ratedPower && !battery.wattsHour) {
    return undefined;
  }

  return 'extreme';
};