/* eslint-disable max-lines */
import {
  AntiSpin,
  BrandId,
  Color,
  Display,
  Kickstand,
  PedalSurface,
  PedalType,
  SoundSystem,
  Suspension,
  TrolleyHandle,
  Wheel,
  WheelId
} from '../../../../types';

const v5: Wheel = {
  id: WheelId.v5,
  brandId: BrandId.inmotion,
  name: 'V5',
  price: 550,

  ratedPower: 450,
  peakPower: 0,
  maxGradibility: 18,
  maxSpeed: 20,
  battery: {
    capacity: 0,
    parallels: 0,
    type: '18650',
    wattsHour: 160
  },
  range: 18,
  voltage: 84,

  diameter: 14,
  width: 2.125,
  groundClearance: 115,
  weight: 10.9,
  trolleyHandle: TrolleyHandle.scorpion,
  pedals: [PedalType.plain, PedalSurface.fullGripTape, false],
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
  price: 1000,

  ratedPower: 800,
  peakPower: 0,
  maxGradibility: 25,
  maxSpeed: 30,
  battery: {
    capacity: 0,
    parallels: 0,
    type: '18650',
    wattsHour: 450
  },
  range: 40,
  voltage: 84,

  diameter: 16,
  width: 1.95,
  groundClearance: 151,
  weight: 13.8,
  trolleyHandle: TrolleyHandle.telescopic,
  pedals: [PedalType.plain, PedalSurface.fullGripTape, false],
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
  price: 1099,

  ratedPower: 1800,
  peakPower: 0,
  maxGradibility: 30,
  maxSpeed: 40,
  battery: {
    capacity: 2200,
    parallels: 4,
    type: '18650',
    wattsHour: 650
  },
  range: 70,
  voltage: 84,

  diameter: 16,
  width: 2.5,
  groundClearance: 172,
  weight: 20.6,
  trolleyHandle: TrolleyHandle.scorpion,
  pedals: [PedalType.plain, PedalSurface.fullGripTape, false],
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
  battery: {
    capacity: 5000,
    parallels: 4,
    type: '21700',
    wattsHour: 1500
  },
  range: 120,
  voltage: 84,

  diameter: 18,
  width: 3,
  groundClearance: [165, 250],
  weight: 27,
  trolleyHandle: TrolleyHandle.scorpion,
  pedals: [PedalType.plain, PedalSurface.fullGripTape, false],
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

const v12: Wheel = {
  id: WheelId.v12,
  brandId: BrandId.inmotion,
  name: 'V12',
  price: 2500,

  ratedPower: 2500,
  peakPower: 5000,
  maxGradibility: 35,
  maxSpeed: 70,
  battery: {
    capacity: 0,
    parallels: 0,
    type: '',
    wattsHour: 1750
  },
  range: 160,
  voltage: 100,

  diameter: 16,
  width: 3,
  groundClearance: [160, 170, 180],
  weight: 29,
  trolleyHandle: TrolleyHandle.scorpion,
  pedals: [PedalType.plain, PedalSurface.fullGripTape, false],
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

const raptor: Wheel = {
  id: WheelId.v13,
  brandId: BrandId.inmotion,
  name: 'V13 Raptor',
  price: 0,

  ratedPower: 0,
  peakPower: 0,
  maxGradibility: 0,
  maxSpeed: 0,
  battery: {
    capacity: 0,
    parallels: 0,
    type: '',
    wattsHour: 0
  },
  range: 0,
  voltage: 0,

  diameter: 0,
  width: 0,
  groundClearance: 0,
  weight: 0,
  trolleyHandle: undefined,
  pedals: [undefined, undefined, undefined],
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
  v12,
  raptor
];