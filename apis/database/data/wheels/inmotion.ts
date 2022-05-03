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
} from '../../../../types';
import { inmotionPlainL, inmotionPlainM, inmotionPlainS } from './common';

const v5: Wheel = {
  id: WheelId.v5,
  brandId: BrandId.inmotion,
  name: 'V5',
  website: 'https://www.inmotionworld.com/product/electric-unicycle-inmotion-v5',
  price: 550,
  availability: 'available',

  hollowMotor: false,
  ratedPower: 450,
  peakPower: 0,

  battery: {
    capacity: 0,
    parallels: 0,
    type: '18650',
    wattsHour: 160
  },
  stockCharger: 1.5,
  maxCharger: 0,
  chargePorts: 1,
  usbPorts: [0, 0],

  maxGradibility: 18,
  maxSpeed: 20,
  range: 18,
  voltage: 84,

  diameter: 14,
  width: 2.125,
  groundClearance: 115,
  weight: 10.9,
  trolleyHandle: TrolleyHandle.scorpion,
  dimensions: [476, 166, 402],
  ...inmotionPlainS,
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
  battery: {
    ...v5.battery,
    capacity: 1100,
    parallels: 4,
    wattsHour: 320
  },
  range: 38,

  weight: 11.9
};

const v8: Wheel = {
  id: WheelId.v8,
  brandId: BrandId.inmotion,
  name: 'V8',
  website: 'https://www.inmotionworld.com/product/electric-unicycle-inmotion-v8f',
  price: 1000,
  availability: 'available',

  hollowMotor: false,
  ratedPower: 800,
  peakPower: 0,

  battery: {
    capacity: 0,
    parallels: 0,
    type: '18650',
    wattsHour: 450
  },
  stockCharger: 1.3,
  maxCharger: 0,
  chargePorts: 1,
  usbPorts: [0, 0],

  maxGradibility: 25,
  maxSpeed: 30,
  range: 40,
  voltage: 84,

  diameter: 16,
  width: 1.95,
  groundClearance: 151,
  weight: 13.8,
  trolleyHandle: TrolleyHandle.telescopic,
  dimensions: [538, 148, 462],
  ...inmotionPlainM,
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
  battery: {
    ...v8.battery,
    capacity: 583,
    parallels: 6,
    wattsHour: 518
  },
  range: 55,

  diameter: 16,
  width: 2.125,
  weight: 14.5
};

const v10: Wheel = {
  id: WheelId.v10,
  brandId: BrandId.inmotion,
  name: 'V10',
  website: 'https://www.inmotionworld.com/product/electric-unicycle-inmotion-v10',
  price: 1300,
  availability: 'available',

  hollowMotor: false,
  ratedPower: 1800,
  peakPower: 0,

  battery: {
    capacity: 2200,
    parallels: 4,
    type: '18650',
    wattsHour: 650
  },
  stockCharger: 1.5,
  maxCharger: 0,
  chargePorts: 1,
  usbPorts: [0, 0],

  maxGradibility: 30,
  maxSpeed: 40,
  range: 70,
  voltage: 84,

  diameter: 16,
  width: 2.5,
  groundClearance: 172,
  weight: 20.6,
  trolleyHandle: TrolleyHandle.scorpion,
  dimensions: [624, 160, 528],
  ...inmotionPlainL,
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
  battery: {
    ...v10.battery,
    capacity: 3250,
    parallels: 4,
    wattsHour: 960
  },
  range: 90,

  weight: 22.5
};

const v11: Wheel = {
  id: WheelId.v11,
  brandId: BrandId.inmotion,
  name: 'V11',
  website: 'https://www.inmotionworld.com/product/inmotion-v11',
  price: 2300,
  availability: 'available',

  hollowMotor: true,
  ratedPower: 2200,
  peakPower: 0,

  battery: {
    capacity: 5000,
    parallels: 4,
    type: '21700',
    wattsHour: 1500
  },
  stockCharger: 2.5,
  maxCharger: 0,
  chargePorts: 2,
  usbPorts: [1, 0],

  maxGradibility: 35,
  maxSpeed: 55,
  range: 120,
  voltage: 84,

  diameter: 18,
  width: 3,
  groundClearance: [165, 250],
  weight: 27,
  trolleyHandle: TrolleyHandle.scorpion,
  dimensions: [676, 200, 500],
  ...inmotionPlainL,
  antiSpin: AntiSpin.button,
  kickstand: Kickstand.dedicated,
  headlight: true,
  tailLight: true,
  leds: false,
  sound: undefined,
  display: undefined,
  suspension: Suspension.custom,
  color: Color.black
};

const v12HT: Wheel = {
  id: WheelId.v12HT,
  brandId: BrandId.inmotion,
  name: 'V12 Torque',
  website: '',
  price: 2500,
  availability: 'announced',

  hollowMotor: false,
  ratedPower: 2800,
  peakPower: 5000,

  battery: {
    capacity: 0,
    parallels: 4,
    type: '21700',
    wattsHour: 1750
  },
  stockCharger: 2.3,
  maxCharger: 0,
  chargePorts: 1,
  usbPorts: [1, 1],

  maxGradibility: 45,
  maxSpeed: 60,
  range: 160,
  voltage: 100.8,

  diameter: 16,
  width: 3,
  groundClearance: [160, 170, 180],
  weight: 29,
  trolleyHandle: TrolleyHandle.scorpion,
  dimensions: [607, 191, 498],
  ...inmotionPlainL,
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

const v12HS: Wheel = {
  ...v12HT,
  id: WheelId.v12,
  name: 'V12 Speed',
  availability: 'available',

  ratedPower: 2500,
  maxGradibility: 35,
  maxSpeed: 70
};

const v13: Wheel = {
  id: WheelId.v13,
  brandId: BrandId.inmotion,
  name: 'V13 Raptor',
  website: '',
  price: 0,
  availability: 'announced',

  hollowMotor: undefined,
  ratedPower: 0,
  peakPower: 0,

  battery: {
    capacity: 0,
    parallels: 0,
    type: '',
    wattsHour: 0
  },
  stockCharger: 0,
  maxCharger: 0,
  chargePorts: 0,
  usbPorts: undefined,

  maxGradibility: 0,
  maxSpeed: 0,
  range: 0,
  voltage: 0,

  diameter: 0,
  width: 0,
  groundClearance: 0,
  weight: 0,
  trolleyHandle: undefined,
  dimensions: [0, 0, 0],
  pedals: [undefined, undefined, undefined],
  pedalSize: [undefined, undefined],
  antiSpin: undefined,
  kickstand: undefined,
  headlight: false,
  tailLight: false,
  leds: false,
  sound: undefined,
  display: undefined,
  suspension: undefined,
  color: undefined
};

export const inmotionWheels = [
  v5,
  v5f,
  v8,
  v8f,
  v10,
  v10f,
  v11,
  v12HT,
  v12HS,
  v13
];
