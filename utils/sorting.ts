import {
  antiSpinWeight,
  displayWeight,
  kickstandWeight,
  pedalSurfaceWeight,
  pedalTypeWeight,
  soundSystemWeight,
  suspensionWeight,
  trolleyHandleWeight
} from '../constants';
import { Brands, Order, Wheel } from '../types';
import { getMaximumValue, getMinimumValue, sortBy } from './collections';

export const customisedSortBy = (brands: Brands) => (key: keyof Wheel, order: Order) => (a: Wheel, b: Wheel) => {
  switch (key) {
    case 'name':
      const aNameWeight = `${ a.name } ${ brands[a.brandId].name }`;
      const bNameWeight = `${ b.name } ${ brands[b.brandId].name }`;
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
      const aTrolleyWeight = a.trolleyHandle ? trolleyHandleWeight[a.trolleyHandle] : 0;
      const bTrolleyWeight = b.trolleyHandle ? trolleyHandleWeight[b.trolleyHandle] : 0;
      if (aTrolleyWeight < bTrolleyWeight) return order === 'asc' ? -1 : 1;
      if (aTrolleyWeight > bTrolleyWeight) return order === 'asc' ? 1 : -1;
      return sortBy(key, order)(a, b);

    case 'pedals':
      const [aPedalType, aPedalSurface, aRetentionPins] = a.pedals;
      const [bPedalType, bPedalSurface, bRetentionPins] = b.pedals;

      const aPedalTypeWeight = aPedalType ? pedalTypeWeight[aPedalType] : 0;
      const bPedalTypeWeight = bPedalType ? pedalTypeWeight[bPedalType] : 0;

      const aPedalSurfaceWeight = aPedalSurface ? pedalSurfaceWeight[aPedalSurface] : 0;
      const bPedalSurfaceWeight = bPedalSurface ? pedalSurfaceWeight[bPedalSurface] : 0;

      const aWeight = (aPedalTypeWeight + aPedalSurfaceWeight) * (aRetentionPins ? 2 : 1);
      const bWeight = (bPedalTypeWeight + bPedalSurfaceWeight) * (bRetentionPins ? 2 : 1);
      if (aWeight < bWeight) return order === 'asc' ? -1 : 1;
      if (aWeight > bWeight) return order === 'asc' ? 1 : -1;
      return sortBy(key, order)(a, b);

    case 'antiSpin':
      const aAntiSpinWeight = a.antiSpin ? antiSpinWeight[a.antiSpin] : 0;
      const bAntiSpinWeight = b.antiSpin ? antiSpinWeight[b.antiSpin] : 0;
      if (aAntiSpinWeight < bAntiSpinWeight) return order === 'asc' ? -1 : 1;
      if (aAntiSpinWeight > bAntiSpinWeight) return order === 'asc' ? 1 : -1;
      return sortBy(key, order)(a, b);

    case 'kickstand':
      const aKickstandWeight = a.kickstand ? kickstandWeight[a.kickstand] : 0;
      const bKickstandWeight = b.kickstand ? kickstandWeight[b.kickstand] : 0;
      if (aKickstandWeight < bKickstandWeight) return order === 'asc' ? -1 : 1;
      if (aKickstandWeight > bKickstandWeight) return order === 'asc' ? 1 : -1;
      return sortBy(key, order)(a, b);

    case 'sound':
      const aSoundWeight = a.sound ? soundSystemWeight[a.sound] : 0;
      const bSoundWeight = b.sound ? soundSystemWeight[b.sound] : 0;
      if (aSoundWeight < bSoundWeight) return order === 'asc' ? -1 : 1;
      if (aSoundWeight > bSoundWeight) return order === 'asc' ? 1 : -1;
      return sortBy(key, order)(a, b);

    case 'display':
      const aDisplayWeight = a.display ? displayWeight[a.display] : 0;
      const bDisplayWeight = b.display ? displayWeight[b.display] : 0;
      if (aDisplayWeight < bDisplayWeight) return order === 'asc' ? -1 : 1;
      if (aDisplayWeight > bDisplayWeight) return order === 'asc' ? 1 : -1;
      return sortBy(key, order)(a, b);

    case 'suspension':
      const aSuspensionWeight = a.suspension ? suspensionWeight[a.suspension] : 0;
      const bSuspensionWeight = b.suspension ? suspensionWeight[b.suspension] : 0;
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