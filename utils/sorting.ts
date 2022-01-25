import { Order, Wheel } from '../types';
import { getMaximumValue, getMinimumValue, sortBy } from './collections';
import {
  getAntiSpinScore,
  getDisplayScore,
  getKickstandScore,
  getPedalsScore,
  getSoundScore,
  getSuspensionScore,
  getTrolleyHandleScore
} from './comparing';

export const customisedSortBy = (key: keyof Wheel, order: Order) => (a: Wheel, b: Wheel) => {
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

    case 'groundClearance':
      const operation = order === 'asc' ? getMinimumValue : getMaximumValue;
      const aClearanceWeight = a.groundClearance ? operation(a.groundClearance) : 0;
      const bClearanceWeight = b.groundClearance ? operation(b.groundClearance) : 0;
      if (aClearanceWeight < bClearanceWeight) return order === 'asc' ? -1 : 1;
      if (aClearanceWeight > bClearanceWeight) return order === 'asc' ? 1 : -1;
      return sortBy(key, order)(a, b);

    case 'trolleyHandle':
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

    case 'antiSpin':
      const aAntiSpinWeight = a.antiSpin ? getAntiSpinScore(a.antiSpin) : 0;
      const bAntiSpinWeight = b.antiSpin ? getAntiSpinScore(b.antiSpin) : 0;
      if (aAntiSpinWeight < bAntiSpinWeight) return order === 'asc' ? -1 : 1;
      if (aAntiSpinWeight > bAntiSpinWeight) return order === 'asc' ? 1 : -1;
      return sortBy(key, order)(a, b);

    case 'kickstand':
      const aKickstandWeight = a.kickstand ? getKickstandScore(a.kickstand) : 0;
      const bKickstandWeight = b.kickstand ? getKickstandScore(b.kickstand) : 0;
      if (aKickstandWeight < bKickstandWeight) return order === 'asc' ? -1 : 1;
      if (aKickstandWeight > bKickstandWeight) return order === 'asc' ? 1 : -1;
      return sortBy(key, order)(a, b);

    case 'sound':
      const aSoundWeight = a.sound ? getSoundScore(a.sound) : 0;
      const bSoundWeight = b.sound ? getSoundScore(b.sound) : 0;
      if (aSoundWeight < bSoundWeight) return order === 'asc' ? -1 : 1;
      if (aSoundWeight > bSoundWeight) return order === 'asc' ? 1 : -1;
      return sortBy(key, order)(a, b);

    case 'display':
      const aDisplayWeight = a.display ? getDisplayScore(a.display) : 0;
      const bDisplayWeight = b.display ? getDisplayScore(b.display) : 0;
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
      return sortBy(key, order)(a, b);
  }
};
