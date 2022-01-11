import { Wheel } from '../../../types';
import { begodeWheels } from './wheels/begode';
import { beidouWheels } from './wheels/beidou';
import { extremeBullWheels } from './wheels/extremeBull';
import { inmotionWheels } from './wheels/inmotion';
import { kingsongWheels } from './wheels/kingsong';
import { veteranWheels } from './wheels/veteran';


export const wheels: Wheel[] = [
  ...begodeWheels,
  ...beidouWheels,
  ...extremeBullWheels,
  ...inmotionWheels,
  ...kingsongWheels,
  ...veteranWheels
];