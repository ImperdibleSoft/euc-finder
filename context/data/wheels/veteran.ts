/* eslint-disable max-lines */
import {
  BrandId,
  Color,
  Display,
  Kickstand,
  TrolleyHandle,
  Wheel,
  WheelId
} from '../../../types';

const sherman: Wheel = {
  id: WheelId.sherman,
  brandId: BrandId.veteran,
  name: 'Sherman',
  price: 4400,

  ratedPower: 2500,
  peakPower: 0,
  maxGradibility: 30,
  maxSpeed: 70,
  battery: 0,
  batteryOutput: 3200,
  range: 190,
  voltage: 100,

  diameter: 20,
  width: 2.75,
  groundClearance: 170,
  weight: 35,
  trolleyHandle: TrolleyHandle.telescopic,
  antiSpin: undefined,
  kickstand: undefined,
  headlight: 1500,
  tailLight: true,
  leds: false,
  sound: undefined,
  display: Display.lcd,
  suspension: undefined,
  color: Color.black
};

const abrams: Wheel = {
  id: WheelId.abrams,
  brandId: BrandId.veteran,
  name: 'Abrams',
  price: 3700,

  ratedPower: 3500,
  peakPower: 6500,
  maxGradibility: 30,
  maxSpeed: 80,
  battery: 0,
  batteryOutput: 2700,
  range: 130,
  voltage: 100,

  diameter: 22,
  width: 2.75,
  groundClearance: 180,
  weight: 44,
  trolleyHandle: TrolleyHandle.telescopic,
  antiSpin: undefined,
  kickstand: Kickstand.dedicated,
  headlight: 2800,
  tailLight: true,
  leds: false,
  sound: undefined,
  display: Display.lcd,
  suspension: undefined,
  color: Color.black
};

export const veteranWheels = [
  sherman,
  abrams
];
