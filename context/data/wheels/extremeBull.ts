/* eslint-disable max-lines */
import {
  BrandId,
  Color,
  Display,
  TrolleyHandle,
  Wheel,
  WheelId
} from '../../../types';

const commanderHT: Wheel = {
  id: WheelId.commanderHT,
  brandId: BrandId.extremeBull,
  name: 'Commander HT',
  price: 3400,

  ratedPower: 2800,
  peakPower: 0,
  maxGradibility: 0,
  maxSpeed: 65,
  battery: 0,
  batteryOutput: 3600,
  range: 230,
  voltage: 100,

  diameter: 20,
  width: 0,
  groundClearance: 160,
  weight: 36.5,
  trolleyHandle: TrolleyHandle.telescopic,
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

const commanderHS: Wheel = {
  ...commanderHT,
  id: WheelId.commanderHS,
  name: 'Commander HS',

  maxSpeed: 80
};

export const extremeBullWheels: Wheel[] = [
  commanderHT,
  commanderHS
];