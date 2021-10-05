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


const ks14m: Wheel = {
  id: WheelId.ks14m,
  brandId: BrandId.kingsong,
  name: '14M',
  price: 500,

  ratedPower: 500,
  peakPower: 1500,
  maxGradibility: 28,
  maxSpeed: 20,
  battery: 0,
  batteryOutput: 174,
  range: 18,
  voltage: 67.2,

  diameter: 14,
  width: 1.125,
  groundClearance: 125,
  weight: 13.6,
  trolleyHandle: TrolleyHandle.telescopic,
  antiSpin: undefined,
  kickstand: undefined,
  headlight: true,
  tailLight: true,
  leds: true,
  sound: undefined,
  display: undefined,
  suspension: undefined,
  color: [Color.black, Color.white]
};

const ks14d: Wheel = {
  ...ks14m,
  id: WheelId.ks14d,
  name: '14D',
  price: 1000,

  peakPower: 2400,
  maxGradibility: 30,
  maxSpeed: 30,
  batteryOutput: 420,
  range: 35,

  weight: 12.5,
  sound: SoundSystem.twoPointO,
  color: [Color.black, Color.white]
};

const ks14s: Wheel = {
  ...ks14d,
  id: WheelId.ks14s,
  name: '14S',
  price: 1300,

  peakPower: 2000,
  batteryOutput: 840,
  range: 70,

  weight: 16.2,
  color: Color.black
};

const ks16s: Wheel = {
  id: WheelId.ks16s,
  brandId: BrandId.kingsong,
  name: '16S',
  price: 1650,

  ratedPower: 1200,
  peakPower: 3000,
  maxGradibility: 30,
  maxSpeed: 35,
  battery: 0,
  batteryOutput: 840,
  range: 70,
  voltage: 67.2,

  diameter: 16,
  width: 1.125,
  groundClearance: 120,
  weight: 17.4,
  trolleyHandle: TrolleyHandle.telescopic,
  antiSpin: undefined,
  kickstand: undefined,
  headlight: true,
  tailLight: true,
  leds: true,
  sound: SoundSystem.twoPointO,
  display: undefined,
  suspension: undefined,
  color: [Color.black]
};

const ks16xs: Wheel = {
  id: WheelId.ks16xs,
  brandId: BrandId.kingsong,
  name: '16XS',
  price: 1800,

  ratedPower: 2200,
  peakPower: 4200,
  maxGradibility: 35,
  maxSpeed: 50,
  battery: 0,
  batteryOutput: 777,
  range: 75,
  voltage: 84,

  diameter: 16,
  width: 3,
  groundClearance: 170,
  weight: 21.5,
  trolleyHandle: TrolleyHandle.telescopic,
  antiSpin: AntiSpin.sensor,
  kickstand: undefined,
  headlight: true,
  tailLight: true,
  leds: true,
  sound: SoundSystem.fivePointOne,
  display: undefined,
  suspension: undefined,
  color: Color.black
};

const ks16x: Wheel = {
  ...ks16xs,
  id: WheelId.ks16x,
  name: '16X',
  price: 2200,

  batteryOutput: 1554,
  range: 150,

  weight: 24.4,
  color: Color.black
};

const ks18l: Wheel = {
  id: WheelId.ks18l,
  brandId: BrandId.kingsong,
  name: '18L',
  price: 2000,

  ratedPower: 2000,
  peakPower: 4000,
  maxGradibility: 35,
  maxSpeed: 50,
  battery: 0,
  batteryOutput: 1036,
  range: 70,
  voltage: 84,

  diameter: 18,
  width: 2.5,
  groundClearance: 160,
  weight: 21.6,
  trolleyHandle: TrolleyHandle.telescopic,
  antiSpin: undefined,
  kickstand: undefined,
  headlight: true,
  tailLight: true,
  leds: true,
  sound: SoundSystem.forPointO,
  display: undefined,
  suspension: undefined,
  color: [Color.black, Color.white]
};

const ks18xl: Wheel = {
  ...ks18l,
  id: WheelId.ks18xl,
  name: '18XL',
  price: 2500,

  batteryOutput: 1554,
  range: 100,

  weight: 25.4,
  color: Color.black
};

const ksS18: Wheel = {
  id: WheelId.ksS18,
  brandId: BrandId.kingsong,
  name: 'S18',
  price: 2300,

  ratedPower: 2200,
  peakPower: 4000,
  maxGradibility: 35,
  maxSpeed: 50,
  battery: 0,
  batteryOutput: 1110,
  range: 100,
  voltage: 84,

  diameter: 18,
  width: 3,
  groundClearance: [100, 200],
  weight: 25,
  trolleyHandle: TrolleyHandle.telescopic,
  antiSpin: AntiSpin.position,
  kickstand: undefined,
  headlight: 1600,
  tailLight: true,
  leds: false,
  sound: undefined,
  display: undefined,
  suspension: Suspension.air,
  color: [Color.black, Color.white]
};

const ksS20: Wheel = {
  id: WheelId.ksS20,
  brandId: BrandId.kingsong,
  name: 'S20',
  price: 3300,

  ratedPower: 3300,
  peakPower: 7500,
  maxGradibility: 40,
  maxSpeed: 70,
  battery: 0,
  batteryOutput: 2220,
  range: 200,
  voltage: 126,

  diameter: 20,
  width: 0,
  groundClearance: [100, 230],
  weight: 35,
  trolleyHandle: TrolleyHandle.telescopic,
  antiSpin: AntiSpin.position,
  kickstand: Kickstand.dedicated,
  headlight: true,
  tailLight: true,
  leds: false,
  sound: undefined,
  display: Display.led,
  suspension: Suspension.oil,
  color: Color.black
};

export const kingsongWheels = [
  ks14m,
  ks14d,
  ks14s,
  ks16s,
  ks16xs,
  ks16x,
  ks18l,
  ks18xl,
  ksS18,
  ksS20
];