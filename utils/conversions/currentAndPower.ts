import { toDecimals } from '../range';

interface ChargingTimeParams {
  wattsHour: number;
  voltage: number;
  tension: number;
}
export const getChargingTime = ({ tension, voltage, wattsHour }: ChargingTimeParams) =>
  toDecimals((wattsHour / voltage) / tension, 1);
