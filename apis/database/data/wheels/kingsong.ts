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
import {
  kingsongHoneycomb,
  kingsongPlainL,
  kingsongPlainM,
  kingsongPlainS,
  kingsongPlainXL,
  kingsongS18Pedals
} from './common';

const ks14m: Wheel = {
  id: WheelId.ks14m,
  brandId: BrandId.kingsong,
  name: '14M',
  website: 'https://www.kingsong.com/14inchseries/8-9.html',
  price: 500,
  availability: 'available',

  hollowMotor: false,
  ratedPower: 500,
  peakPower: 1500,

  battery: {
    capacity: 0,
    parallels: 0,
    type: '18650',
    wattsHour: 174
  },
  stockCharger: 2,
  maxCharger: 0,
  chargePorts: 1,
  usbPorts: [1, 0],
  
  maxGradibility: 28,
  maxSpeed: 20,
  range: 18,
  voltage: 67.2,

  diameter: 14,
  width: 2.125,
  groundClearance: 125,
  weight: 13.6,
  trolleyHandle: TrolleyHandle.telescopic,
  dimensions: [483, 202, 431],
  ...kingsongPlainS,
  antiSpin: undefined,
  kickstand: undefined,
  headlight: true,
  tailLight: true,
  leds: true,
  sound: SoundSystem.twoPointO,
  display: undefined,
  suspension: undefined,
  color: [Color.black, Color.white]
};

const ks14d: Wheel = {
  ...ks14m,
  id: WheelId.ks14d,
  name: '14D',
  website: 'https://www.kingsong.com/14inchseries/8-8.html',
  price: 1000,

  peakPower: 2400,

  battery: {
    ...ks14m.battery,
    wattsHour: 420
  },

  maxGradibility: 30,
  maxSpeed: 30,
  range: 35,

  weight: 12.5,
  sound: SoundSystem.twoPointO,
  color: [Color.black, Color.white]
};

const ks14s: Wheel = {
  ...ks14d,
  id: WheelId.ks14s,
  name: '14S',
  website: 'https://www.kingsong.com/14inchseries/8-7.html',
  price: 1300,

  peakPower: 2000,

  battery: {
    ...ks14d.battery,
    parallels: 4,
    wattsHour: 840
  },

  range: 70,

  weight: 16.2,
  color: Color.black
};

const ks16s: Wheel = {
  id: WheelId.ks16s,
  brandId: BrandId.kingsong,
  name: '16S',
  website: 'https://www.kingsong.com/16inchseries/7-4.html',
  price: 1650,
  availability: 'available',

  hollowMotor: false,
  ratedPower: 1200,
  peakPower: 3000,
  
  battery: {
    capacity: 0,
    parallels: 4,
    type: '18650',
    wattsHour: 840
  },
  stockCharger: 2,
  maxCharger: 0,
  chargePorts: 1,
  usbPorts: [0, 0],

  maxGradibility: 30,
  maxSpeed: 35,
  range: 70,
  voltage: 67.2,

  diameter: 16,
  width: 2.125,
  groundClearance: 120,
  weight: 17.4,
  trolleyHandle: TrolleyHandle.telescopic,
  dimensions: [406, 196, 463],
  ...kingsongPlainM,
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
  website: 'https://www.kingsong.com/16inchseries/7-5.html',
  price: 1800,
  availability: 'available',

  hollowMotor: false,
  ratedPower: 2200,
  peakPower: 4200,

  battery: {
    capacity: 0,
    parallels: 3,
    type: '18650',
    wattsHour: 777
  },
  stockCharger: 1.5,
  maxCharger: 0,
  chargePorts: 2,
  usbPorts: [2, 0],

  maxGradibility: 35,
  maxSpeed: 50,
  range: 75,
  voltage: 84,

  diameter: 16,
  width: 3,
  groundClearance: 170,
  weight: 21.5,
  trolleyHandle: TrolleyHandle.telescopic,
  dimensions: [584, 178, 495],
  ...kingsongPlainL,
  antiSpin: AntiSpin.sensor,
  kickstand: undefined,
  headlight: 800,
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
  website: 'https://www.kingsong.com/16inchseries/7-6.html',
  price: 2200,

  battery: {
    ...ks16xs.battery,
    capacity: 3500,
    parallels: 6,
    type: '18650',
    wattsHour: 1554
  },

  range: 150,

  weight: 24.4,
  color: Color.black
};

const ks18l: Wheel = {
  id: WheelId.ks18l,
  brandId: BrandId.kingsong,
  name: '18L',
  website: 'https://www.kingsong.com/18inchseries/6-2.html',
  price: 2000,
  availability: 'available',

  hollowMotor: false,
  ratedPower: 2000,
  peakPower: 4000,

  battery: {
    capacity: 0,
    parallels: 4,
    type: '18650',
    wattsHour: 1036
  },
  stockCharger: 1.5,
  maxCharger: 0,
  chargePorts: 2,
  usbPorts: [2, 0],

  maxGradibility: 35,
  maxSpeed: 50,
  range: 70,
  voltage: 84,

  diameter: 18,
  width: 2.5,
  groundClearance: 160,
  weight: 21.6,
  trolleyHandle: TrolleyHandle.telescopic,
  dimensions: [590, 180, 495],
  ...kingsongPlainXL,
  antiSpin: AntiSpin.sensor,
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
  website: 'https://www.kingsong.com/18inchseries/6-1.html',
  price: 2500,

  battery: {
    ...ks18l.battery,
    parallels: 6,
    wattsHour: 1554
  },

  range: 100,

  weight: 25.4,
  color: Color.black
};

const ksS18: Wheel = {
  id: WheelId.ksS18,
  brandId: BrandId.kingsong,
  name: 'S18',
  website: 'https://www.kingsong.com/18inchseries/6-3.html',
  price: 2300,
  availability: 'available',

  hollowMotor: false,
  ratedPower: 2200,
  peakPower: 5000,

  battery: {
    capacity: 3500,
    parallels: 3,
    type: '18650',
    wattsHour: 1110
  },
  stockCharger: 1.75,
  maxCharger: 0,
  chargePorts: 1,
  usbPorts: [1, 0],

  maxGradibility: 35,
  maxSpeed: 50,
  range: 100,
  voltage: 84,

  diameter: 18,
  width: 3,
  groundClearance: [100, 200],
  weight: 25,
  trolleyHandle: TrolleyHandle.telescopic,
  dimensions: [557, 200, 530],
  ...kingsongS18Pedals,
  antiSpin: AntiSpin.position,
  kickstand: undefined,
  headlight: 1600,
  tailLight: true,
  leds: false,
  sound: undefined,
  display: undefined,
  suspension: Suspension.standard,
  color: [Color.black, Color.white]
};

const ksS22: Wheel = {
  id: WheelId.ksS22,
  brandId: BrandId.kingsong,
  name: 'S20 Eagle',
  website: 'https://www.kingsong.com/18inchseries/6-20.html',
  price: 3300,
  availability: 'available',

  hollowMotor: true,
  ratedPower: 3300,
  peakPower: 7500,

  battery: {
    capacity: 0,
    parallels: 4,
    type: '21700',
    wattsHour: 2200
  },
  stockCharger: 6,
  maxCharger: 10,
  chargePorts: 2,
  usbPorts: undefined,

  maxGradibility: 40,
  maxSpeed: 70,
  range: 200,
  voltage: 126,

  diameter: 20,
  width: 2.75,
  groundClearance: [100, 230],
  weight: 35,
  trolleyHandle: TrolleyHandle.telescopic,
  dimensions: [686, 330, 584],
  ...kingsongHoneycomb,
  antiSpin: AntiSpin.sensor,
  kickstand: Kickstand.shell,
  headlight: true,
  tailLight: true,
  leds: false,
  sound: undefined,
  display: Display.led,
  suspension: Suspension.standard,
  color: Color.blackAndRed
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
  ksS22
];
