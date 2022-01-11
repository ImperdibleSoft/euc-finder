import { Category, Wheel, WheelId } from '../types';

export const cleanWheelId = (wheelId: WheelId): WheelId =>
  wheelId
    // HT or HS
    .replace(/H(T|S)$/, '')

    // 100v versions
    .replace(/100$/, '')

    // 16 or 18 inches
    .replace(/recioWheel1(6|8)$/, 'recioWheel')

    // 16xs and 16x
    .replace(/16xs$/, '16x')

    // vXX and vXXf versions
    .replace(/f$/, '')
  
    // Max versions
    .replace(/Max$/, '') as WheelId;

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