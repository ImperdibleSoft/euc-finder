import { Brand, Wheel } from '../types';
import { formatWheelName } from './formatters';
import { toDecimals } from './range';

interface Options {
  brands?: Brand[];
  maxCurrentAllowed?: number;
}

export const getFormatterValue = (
  wheel: Wheel,
  key: keyof Wheel,
  {
    brands,
    maxCurrentAllowed 
  }: Options
) => {
  switch (key) {
    case 'name':
      return formatWheelName(wheel, (brands ?? []));

    case 'stockCharger':
      return {
        battery: wheel.battery,
        voltage: wheel.voltage,
        chargePorts: wheel.chargePorts,
        tension: wheel.stockCharger
      };

    case 'maxCharger':
      return {
        battery: wheel.battery,
        voltage: wheel.voltage,
        chargePorts: wheel.chargePorts,
        tension: (
          wheel.maxCharger ||
          Number(toDecimals(wheel.stockCharger * (maxCurrentAllowed ?? 1.7), 1, 0))
        )
      };

    case 'usbPorts':
      if (!wheel.usbPorts) {
        return undefined;
      }

      const [usbA, usbC] = wheel.usbPorts;
      if (!usbA && !usbC) {
        return false;
      }

      return [usbA, usbC];

    default:
      return wheel[key];
  }
};
