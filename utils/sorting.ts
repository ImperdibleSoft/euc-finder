/* eslint-disable max-lines */
import { Order, Wheel } from '../types';
import { getMaximumValue, getMinimumValue, sortBy } from './collections';
import {
  getAntiSpinScore,
  getDisplayScore,
  getKickstandScore,
  getPedalsScore,
  getSoundScore,
  getSuspensionScore,
  getTrolleyHandleScore,
  getUsbPortsScore
} from './comparing';
import { getChargingTime } from './conversions';
import { toDecimals } from './range';

const undefinedProxy = (key: keyof Wheel) => (a: Wheel, b: Wheel) => {
  if (a[key] === undefined && b[key] === undefined) return 0;
  if (a[key] === undefined && b[key] !== undefined) return 1;
  if (a[key] !== undefined && b[key] === undefined) return -1;
  return undefined;
};

interface Options {
  maxCurrentAllowed: number;
}

// eslint-disable-next-line max-lines-per-function
export const customisedSortBy = (key: keyof Wheel, order: Order, { maxCurrentAllowed }: Options) =>
// eslint-disable-next-line max-lines-per-function
  (a: Wheel, b: Wheel) => {
    switch (key) {
      case 'name':
        const aNameWeight = a.name;
        const bNameWeight = b.name;
        if (aNameWeight < bNameWeight) return order === 'asc' ? -1 : 1;
        if (aNameWeight > bNameWeight) return order === 'asc' ? 1 : -1;
        return sortBy(key, order)(a, b);

      case 'battery':
        const { capacity: aCap, parallels: aPar, wattsHour: aWat } = a.battery;
        const { capacity: bCap, parallels: bPar, wattsHour: bWat } = b.battery;
        if (aWat < bWat) return order === 'asc' ? -1 : 1;
        if (aWat > bWat) return order === 'asc' ? 1 : -1;
        if ((aCap * aPar) < (bCap * bPar)) return order === 'asc' ? -1 : 1;
        if ((aCap * aPar) > (bCap * bPar)) return order === 'asc' ? 1 : -1;
        return sortBy(key, order)(a, b);
      
      case 'stockCharger':
        const undefinedStockCharger = undefinedProxy(key)(a, b);
        if (undefinedStockCharger !== undefined) return undefinedStockCharger;

        const aStockWeight = Number(getChargingTime({
          tension: a.stockCharger * a.chargePorts,
          voltage: a.voltage,
          wattsHour: a.battery.wattsHour
        }));
        const bStockWeight = Number(getChargingTime({
          tension: b.stockCharger * b.chargePorts,
          voltage: b.voltage,
          wattsHour: b.battery.wattsHour
        }));
        if (aStockWeight < bStockWeight) return order === 'asc' ? -1 : 1;
        if (aStockWeight > bStockWeight) return order === 'asc' ? 1 : -1;
        return sortBy(key, order)(a, b);

      case 'maxCharger':
        const undefinedMaxCharger = undefinedProxy(key)(a, b);
        if (undefinedMaxCharger !== undefined) return undefinedMaxCharger;

        const aFastWeight = Number(getChargingTime({
          tension: (
            a.maxCharger ||
            Number(toDecimals(a.stockCharger * (maxCurrentAllowed ?? 1.7), 1, 0))
          ) * a.chargePorts,
          voltage: a.voltage,
          wattsHour: a.battery.wattsHour
        }));
        const bFastWeight = Number(getChargingTime({
          tension: (
            b.maxCharger ||
            Number(toDecimals(b.stockCharger * (maxCurrentAllowed ?? 1.7), 1, 0))
          ) * b.chargePorts,
          voltage: b.voltage,
          wattsHour: b.battery.wattsHour
        }));
        if (aFastWeight < bFastWeight) return order === 'asc' ? -1 : 1;
        if (aFastWeight > bFastWeight) return order === 'asc' ? 1 : -1;
        return sortBy(key, order)(a, b);

      case 'usbPorts':
        const undefinedUsbPorts = undefinedProxy(key)(a, b);
        if (undefinedUsbPorts !== undefined) return undefinedUsbPorts;
        
        const aUsbWeight = getUsbPortsScore(a.usbPorts ?? [0, 0]);
        const bUsbWeight = getUsbPortsScore(b.usbPorts ?? [0, 0]);
        if (aUsbWeight < bUsbWeight) return order === 'asc' ? -1 : 1;
        if (aUsbWeight > bUsbWeight) return order === 'asc' ? 1 : -1;
        return sortBy(key, order)(a, b);

      case 'groundClearance':
        const operation = order === 'asc' ? getMinimumValue : getMaximumValue;
        const aClearanceWeight = a.groundClearance ? operation(a.groundClearance) : 0;
        const bClearanceWeight = b.groundClearance ? operation(b.groundClearance) : 0;
        if (aClearanceWeight < bClearanceWeight) return order === 'asc' ? -1 : 1;
        if (aClearanceWeight > bClearanceWeight) return order === 'asc' ? 1 : -1;
        return sortBy(key, order)(a, b);

      case 'trolleyHandle':
        const undefinedTrolleyHandle = undefinedProxy(key)(a, b);
        if (undefinedTrolleyHandle !== undefined) return undefinedTrolleyHandle;
        
        const aTrolleyWeight = a.trolleyHandle ? getTrolleyHandleScore(a.trolleyHandle) : 0;
        const bTrolleyWeight = b.trolleyHandle ? getTrolleyHandleScore(b.trolleyHandle) : 0;
        if (aTrolleyWeight < bTrolleyWeight) return order === 'asc' ? -1 : 1;
        if (aTrolleyWeight > bTrolleyWeight) return order === 'asc' ? 1 : -1;
        return sortBy(key, order)(a, b);

      case 'dimensions':
        const [aHeight, aWidth, aDeep] = a.dimensions;
        const [bHeight, bWidth, bDeep] = b.dimensions;
        const aDimensionsWeight = aHeight * aWidth * aDeep;
        const bDimensionsWeight = bHeight * bWidth * bDeep;
        if (aDimensionsWeight < bDimensionsWeight) return order === 'asc' ? -1 : 1;
        if (aDimensionsWeight > bDimensionsWeight) return order === 'asc' ? 1 : -1;
        return sortBy(key, order)(a, b);

      case 'pedals':
        const aWeight = getPedalsScore(a.pedals);
        const bWeight = getPedalsScore(b.pedals);
        if (aWeight < bWeight) return order === 'asc' ? -1 : 1;
        if (aWeight > bWeight) return order === 'asc' ? 1 : -1;
        return sortBy(key, order)(a, b);

      case 'pedalSize':
        const [aSizeLength = 0, aSizeWidth = 0] = a.pedalSize;
        const [bSizeLength = 0, bSizeWidth = 0] = b.pedalSize;
        const aPedalSizeWeight = aSizeLength * aSizeWidth;
        const bPedalSizeWeight = bSizeLength * bSizeWidth;
        if (aPedalSizeWeight < bPedalSizeWeight) return order === 'asc' ? -1 : 1;
        if (aPedalSizeWeight > bPedalSizeWeight) return order === 'asc' ? 1 : -1;
        return sortBy(key, order)(a, b);

      case 'antiSpin':
        const undefinedAntiSpin = undefinedProxy(key)(a, b);
        if (undefinedAntiSpin !== undefined) return undefinedAntiSpin;
        
        const aAntiSpinWeight = getAntiSpinScore(a.antiSpin);
        const bAntiSpinWeight = getAntiSpinScore(b.antiSpin);
        if (aAntiSpinWeight < bAntiSpinWeight) return order === 'asc' ? -1 : 1;
        if (aAntiSpinWeight > bAntiSpinWeight) return order === 'asc' ? 1 : -1;
        return sortBy(key, order)(a, b);

      case 'kickstand':
        const undefinedKickstand = undefinedProxy(key)(a, b);
        if (undefinedKickstand !== undefined) return undefinedKickstand;
        
        const aKickstandWeight = getKickstandScore(a.kickstand);
        const bKickstandWeight = getKickstandScore(b.kickstand);
        if (aKickstandWeight < bKickstandWeight) return order === 'asc' ? -1 : 1;
        if (aKickstandWeight > bKickstandWeight) return order === 'asc' ? 1 : -1;
        return sortBy(key, order)(a, b);

      case 'sound':
        const undefinedSound = undefinedProxy(key)(a, b);
        if (undefinedSound !== undefined) return undefinedSound;
        
        const aSoundWeight = getSoundScore(a.sound);
        const bSoundWeight = getSoundScore(b.sound);
        if (aSoundWeight < bSoundWeight) return order === 'asc' ? -1 : 1;
        if (aSoundWeight > bSoundWeight) return order === 'asc' ? 1 : -1;
        return sortBy(key, order)(a, b);

      case 'display':
        const undefinedDisplay = undefinedProxy(key)(a, b);
        if (undefinedDisplay !== undefined) return undefinedDisplay;
        
        const aDisplayWeight = getDisplayScore(a.display);
        const bDisplayWeight = getDisplayScore(b.display);
        if (aDisplayWeight < bDisplayWeight) return order === 'asc' ? -1 : 1;
        if (aDisplayWeight > bDisplayWeight) return order === 'asc' ? 1 : -1;
        return sortBy(key, order)(a, b);

      case 'suspension':
        const aSuspensionWeight = a.suspension ? getSuspensionScore(a.suspension) : 0;
        const bSuspensionWeight = b.suspension ? getSuspensionScore(b.suspension) : 0;
        if (aSuspensionWeight < bSuspensionWeight) return order === 'asc' ? -1 : 1;
        if (aSuspensionWeight > bSuspensionWeight) return order === 'asc' ? 1 : -1;
        return sortBy(key, order)(a, b);
    
      case 'color':
        const aColorWeight = a.color ? 1 : 0;
        const bColorWeight = b.color ? 1 : 0;
        if (aColorWeight < bColorWeight) return order === 'asc' ? -1 : 1;
        if (aColorWeight > bColorWeight) return order === 'asc' ? 1 : -1;
        return sortBy(key, order)(a, b);

      default:
        const undefinedSorting = undefinedProxy(key)(a, b);
        if (undefinedSorting !== undefined) return undefinedSorting;
        
        return sortBy(key, order)(a, b);
    }
  };
