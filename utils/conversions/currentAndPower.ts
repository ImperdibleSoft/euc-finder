import { toDecimals } from '../range';

interface GetAmpsHourParams {
  wattsHour: number;
  voltage: number;
}

const getAmpsHour = ({ voltage, wattsHour }: GetAmpsHourParams) => wattsHour / voltage;


interface ChargingTimeParams {
  wattsHour: number;
  voltage: number;
  tension: number;
}

export const getChargingTime = ({ tension, voltage, wattsHour }: ChargingTimeParams) =>
  toDecimals(getAmpsHour({ voltage, wattsHour }) / tension, 1, 0);


/**
 * RS default
 * wh = 1800
 * v = 100.8
 * A1 = 3
 * A2 = 5
 * 
 * A2 / A1 = 1.7
 * 
 * x1 = 3 / (1800 / 100.8) = 0.168 = 16.8%
 * x2 = 5 / (1800 / 100.8) = 0.28 = 28%
 */

/**
 * S20 default
 * wh = 2200
 * v = 126
 * A1 = 6
 * A2 = 10
 * 
 * A2 / A1 = 1.67
 * 
 * x1 = 6 / (2200 / 126) = 0.3436 = 34%
 * x2 = 10 / (2200 / 126) = 0.5727 = 57%
 */

/**
 * Commander stock
 * wh = 3600
 * v = 100.8
 * A1 = 5
 * A2 = 8
 * 
 * A2 / A1 = 1.6
 * 
 * x1 = 5 / (3600 / 100.8) = 0.14 = 14%
 * x2 = 8 / (3600 / 100.8) = 0.224 = 22.4%
 */

/**
 * Abrams stock
 * wh = 2700
 * v = 100.8
 * A1 = 5
 * A2 = 9
 * 
 * A2 / A1 = 1.8
 * 
 * x1 = 5 / (2700 / 100.8) = 0.1866 = 18.67%
 * x2 = 9 / (2700 / 100.8) = 0.336 = 33.6%
 */
