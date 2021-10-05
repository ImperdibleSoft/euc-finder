/* eslint-disable max-lines */
import {
  AntiSpin,
  BrandId,
  Color,
  Display,
  Kickstand,
  SoundSystem,
  Suspension,
  TrolleyHandle,
  Wheel,
  WheelId
} from '../../../types';

const v5: Wheel = {
  id: WheelId.v5,
  brandId: BrandId.inmotion,
  name: 'V5',
  price: 550,

  ratedPower: 450,
  peakPower: 0,
  maxGradibility: 18,
  maxSpeed: 20,
  battery: 2200,
  batteryOutput: 160,
  range: 18,
  voltage: 84,

  diameter: 14,
  width: 2.125,
  groundClearance: 115,
  weight: 10.9,
  trolleyHandle: TrolleyHandle.scorpion,
  antiSpin: AntiSpin.button,
  kickstand: Kickstand.shell,
  headlight: true,
  tailLight: true,
  leds: false,
  sound: undefined,
  display: undefined,
  suspension: undefined,
  color: Color.white
};

const v5f: Wheel = {
  ...v5,
  id: WheelId.v5f,
  name: 'V5F',
  price: 700,

  ratedPower: 550,
  maxSpeed: 25,
  battery: 4400,
  batteryOutput: 320,
  range: 38,

  weight: 11.9
};

const v8: Wheel = {
  id: WheelId.v8,
  brandId: BrandId.inmotion,
  name: 'V8',
  price: 1000,

  ratedPower: 800,
  peakPower: 0,
  maxGradibility: 25,
  maxSpeed: 30,
  battery: 0,
  batteryOutput: 450,
  range: 40,
  voltage: 84,

  diameter: 16,
  width: 1.95,
  groundClearance: 151,
  weight: 13.8,
  trolleyHandle: TrolleyHandle.telescopic,
  antiSpin: AntiSpin.button,
  kickstand: Kickstand.shell,
  headlight: true,
  tailLight: true,
  leds: true,
  sound: SoundSystem.twoPointO,
  display: undefined,
  suspension: undefined,
  color: Color.black
};

const v8f: Wheel = {
  ...v8,
  id: WheelId.v8f,
  name: 'V8F',
  price: 1100,

  ratedPower: 1000,
  maxGradibility: 30,
  maxSpeed: 35,
  batteryOutput: 518,
  range: 55,

  diameter: 16,
  width: 2.125,
  weight: 14.5
};

const v10: Wheel = {
  id: WheelId.v10,
  brandId: BrandId.inmotion,
  name: 'V10',
  price: 1099,

  ratedPower: 1800,
  peakPower: 0,
  maxGradibility: 30,
  maxSpeed: 40,
  battery: 8800,
  batteryOutput: 650,
  range: 70,
  voltage: 84,

  diameter: 16,
  width: 2.5,
  groundClearance: 172,
  weight: 20.6,
  trolleyHandle: TrolleyHandle.scorpion,
  antiSpin: AntiSpin.button,
  kickstand: Kickstand.shell,
  headlight: true,
  tailLight: true,
  leds: true,
  sound: SoundSystem.twoPointO,
  display: undefined,
  suspension: undefined,
  color: Color.black
};

const v10f: Wheel = {
  ...v10,
  id: WheelId.v10f,
  name: 'V10F',
  price: 1600,

  ratedPower: 2000,
  battery: 12800,
  batteryOutput: 960,
  range: 90
};

const v11: Wheel = {
  id: WheelId.v11,
  brandId: BrandId.inmotion,
  name: 'V11',
  price: 2300,

  ratedPower: 2200,
  peakPower: 0,
  maxGradibility: 35,
  maxSpeed: 55,
  battery: 0,
  batteryOutput: 1500,
  range: 120,
  voltage: 84,

  diameter: 18,
  width: 3,
  groundClearance: [90, 160],
  weight: 27,
  trolleyHandle: TrolleyHandle.scorpion,
  antiSpin: AntiSpin.button,
  kickstand: Kickstand.dedicated,
  headlight: true,
  tailLight: true,
  leds: false,
  sound: undefined,
  display: undefined,
  suspension: Suspension.air,
  color: Color.black
};

const v12: Wheel = {
  id: WheelId.v12,
  brandId: BrandId.inmotion,
  name: 'V12',
  price: 2500,

  ratedPower: 2500,
  peakPower: 5000,
  maxGradibility: 35,
  maxSpeed: 70,
  battery: 0,
  batteryOutput: 1750,
  range: 160,
  voltage: 100,

  diameter: 16,
  width: 3,
  groundClearance: [160, 170, 180],
  weight: 29,
  trolleyHandle: TrolleyHandle.scorpion,
  antiSpin: AntiSpin.button,
  kickstand: Kickstand.dedicated,
  headlight: true,
  tailLight: true,
  leds: true,
  sound: SoundSystem.forPointO,
  display: Display.lcd,
  suspension: undefined,
  color: Color.black
};

export const inmotionWheels = [
  v5,
  v5f,
  v8,
  v8f,
  v10,
  v10f,
  v11,
  v12
];