/* eslint-disable max-lines */
import {
  BrandId,
  Color,
  Display,
  TrolleyHandle,
  Wheel,
  WheelId
} from '../../../../types';

const recioWheel: Wheel = {
  id: WheelId.recio,
  brandId: BrandId.beidou,
  name: 'RecioWheel',
  price: 0,

  ratedPower: 2500,
  peakPower: 0,
  maxGradibility: 0,
  maxSpeed: 0,
  battery: {
    capacity: 0,
    parallels: 4,
    type: '21700',
    wattsHour: 1480
  },
  range: 110,
  voltage: 84,

  diameter: 18,
  width: 0,
  groundClearance: 0,
  weight: 30,
  trolleyHandle: TrolleyHandle.telescopic,
  antiSpin: undefined,
  kickstand: undefined,
  headlight: true,
  tailLight: true,
  leds: false,
  sound: undefined,
  display: Display.lcd,
  suspension: undefined,
  color: Color.black
};

export const beidouWheels = [
  recioWheel
];
