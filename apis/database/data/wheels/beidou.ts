/* eslint-disable max-lines */
import {
  BrandId,
  Color,
  Display,
  PedalSurface,
  PedalType,
  TrolleyHandle,
  Wheel,
  WheelId
} from '../../../../types';

const recioWheel16: Wheel = {
  id: WheelId.recioWheel16,
  brandId: BrandId.beidou,
  name: 'RecioWheel 16',
  price: 0,
  availability: 'announced',

  ratedPower: 2500,
  peakPower: 0,
  maxGradibility: 0,
  maxSpeed: 0, // 60
  battery: {
    capacity: 0,
    parallels: 4,
    type: '21700',
    wattsHour: 1480
  },
  range: 110,
  voltage: 84,

  diameter: 16,
  width: 3,
  groundClearance: 0,
  weight: 30,
  trolleyHandle: TrolleyHandle.telescopic,
  pedals: [PedalType.honeycomb, PedalSurface.metalic, true],
  antiSpin: undefined,
  kickstand: undefined,
  headlight: true,
  tailLight: true,
  leds: false,
  sound: undefined,
  display: Display.led,
  suspension: undefined,
  color: Color.black
};

const recioWheel18: Wheel = {
  ...recioWheel16,
  id: WheelId.recioWheel18,
  name: 'RecioWheel 18',

  diameter: 18,
  width: 2.75
};

export const beidouWheels = [
  recioWheel16,
  recioWheel18
];
