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
import { speedMotor, torqueMotor } from './motors';

const mten: Wheel = {
  id: WheelId.mten,
  brandId: BrandId.begode,
  name: 'Mten 3',
  price: 1000,

  ratedPower: 800,
  peakPower: 0,
  maxGradibility: 30,
  maxSpeed: 35,
  battery: {
    capacity: 0,
    parallels: 0,
    type: '',
    wattsHour: 512
  },
  range: 40,
  voltage: 84,

  diameter: 10,
  width: 3,
  groundClearance: 110,
  weight: 11,
  trolleyHandle: TrolleyHandle.telescopic,
  pedals: [PedalType.plain, PedalSurface.fullGripTape, false],
  antiSpin: AntiSpin.button,
  kickstand: undefined,
  headlight: 500,
  tailLight: false,
  leds: true,
  sound: undefined,
  display: undefined,
  suspension: undefined,
  color: Color.white
};

const mcm5: Wheel = {
  id: WheelId.mcm5,
  brandId: BrandId.begode,
  name: 'MCM 5',
  price: 1400,

  ratedPower: 1500,
  peakPower: 2250,
  maxGradibility: 30,
  maxSpeed: 40,
  battery: {
    capacity: 0,
    parallels: 0,
    type: '18650',
    wattsHour: 800
  },
  range: 65,
  voltage: 84,

  diameter: 14,
  width: 2.5,
  groundClearance: 140,
  weight: 17,
  trolleyHandle: TrolleyHandle.telescopic,
  pedals: [PedalType.plain, PedalSurface.fullGripTape, false],
  antiSpin: AntiSpin.button,
  kickstand: undefined,
  headlight: 500,
  tailLight: false,
  leds: true,
  sound: SoundSystem.twoPointO,
  display: undefined,
  suspension: undefined,
  color: Color.black
};

const tesla: Wheel = {
  id: WheelId.tesla,
  brandId: BrandId.begode,
  name: 'Tesla',
  price: 1650,

  ratedPower: 2000,
  peakPower: 4000,
  maxGradibility: 30,
  maxSpeed: 50,
  battery: {
    capacity: 0,
    parallels: 0,
    type: '',
    wattsHour: 1500
  },
  range: 100,
  voltage: 84,

  diameter: 16,
  width: 2.125,
  groundClearance: 135,
  weight: 22,
  trolleyHandle: TrolleyHandle.telescopic,
  pedals: [PedalType.plain, PedalSurface.fullGripTape, false],
  antiSpin: AntiSpin.button,
  kickstand: undefined,
  headlight: 1200,
  tailLight: true,
  leds: true,
  sound: undefined,
  display: Display.led,
  suspension: undefined,
  color: Color.black
};

const nikola: Wheel = {
  id: WheelId.nikola,
  brandId: BrandId.begode,
  name: 'Nikola Plus',
  price: 2800,

  ratedPower: 2000,
  peakPower: 0,
  maxGradibility: 30,
  maxSpeed: 60,
  battery: {
    capacity: 3500,
    parallels: 6,
    type: '18650',
    wattsHour: 1860
  },
  range: 95,
  voltage: 100,

  diameter: 16,
  width: 3,
  groundClearance: 145,
  weight: 26,
  trolleyHandle: TrolleyHandle.scorpion,
  pedals: [PedalType.plain, PedalSurface.fullGripTape, false],
  antiSpin: AntiSpin.button,
  kickstand: Kickstand.shell,
  headlight: 1200,
  tailLight: true,
  leds: true,
  sound: SoundSystem.twoPointOne,
  display: undefined,
  suspension: undefined,
  color: Color.black
};

const rsHT: Wheel = {
  ...torqueMotor,
  id: WheelId.rsHT,
  brandId: BrandId.begode,
  name: 'RS Torque',
  price: 2300,

  ratedPower: 2600,
  peakPower: 0,
  battery: {
    capacity: 5000,
    parallels: 4,
    type: '21700',
    wattsHour: 1800
  },
  range: 130,
  voltage: 100,

  diameter: 18,
  width: 3,
  groundClearance: 165,
  weight: 27,
  trolleyHandle: TrolleyHandle.telescopic,
  pedals: [PedalType.plain, PedalSurface.fullGripTape, false],
  antiSpin: AntiSpin.button,
  kickstand: undefined,
  headlight: 6000,
  tailLight: true,
  leds: true,
  sound: SoundSystem.twoPointOne,
  display: undefined,
  suspension: undefined,
  color: Color.black
};

const rsHS: Wheel = {
  ...rsHT,
  ...speedMotor,
  id: WheelId.rsHS,
  name: 'RS Speed'
};

const msx: Wheel = {
  id: WheelId.msx,
  brandId: BrandId.begode,
  name: 'MSuper X',
  price: 3400,

  ratedPower: 2000,
  peakPower: 4000,
  maxGradibility: 35,
  maxSpeed: 60,
  battery: {
    capacity: 3500,
    parallels: 6,
    type: '18650',
    wattsHour: 1600
  },
  range: 100,
  voltage: 84,

  diameter: 18,
  width: 3,
  groundClearance: 136,
  weight: 23.5,
  trolleyHandle: TrolleyHandle.telescopic,
  pedals: [PedalType.plain, PedalSurface.fullGripTape, false],
  antiSpin: AntiSpin.button,
  kickstand: undefined,
  headlight: true,
  tailLight: true,
  leds: true,
  sound: SoundSystem.twoPointOne,
  display: undefined,
  suspension: undefined,
  color: Color.black
};

const msx100: Wheel = {
  ...msx,
  id: WheelId.msx100,
  name: 'MSuper X (100v)',
  price: 2500,

  ratedPower: 2350,
  peakPower: 5700,
  battery: {
    ...msx.battery,
    wattsHour: 1860
  },
  range: 95,
  voltage: 100
};

const msp: Wheel = {
  id: WheelId.msp,
  brandId: BrandId.begode,
  name: 'MSuper Pro',
  price: 2500,

  ratedPower: 2500,
  peakPower: 0,
  maxGradibility: 35,
  maxSpeed: 50,
  battery: {
    capacity: 5000,
    parallels: 4,
    type: '21700',
    wattsHour: 1800
  },
  range: 120,
  voltage: 100,

  diameter: 18,
  width: 3,
  groundClearance: 165,
  weight: 25,
  trolleyHandle: TrolleyHandle.telescopic,
  pedals: [PedalType.plain, PedalSurface.fullGripTape, false],
  antiSpin: AntiSpin.button,
  kickstand: undefined,
  headlight: true,
  tailLight: true,
  leds: true,
  sound: SoundSystem.twoPointOne,
  display: undefined,
  suspension: undefined,
  color: Color.black
};

const ex: Wheel = {
  id: WheelId.ex,
  brandId: BrandId.begode,
  name: 'EX',
  price: 4000,

  ratedPower: 3500,
  peakPower: 0,
  maxGradibility: 30,
  maxSpeed: 70,
  battery: {
    capacity: 5000,
    parallels: 6,
    type: '21700',
    wattsHour: 2700
  },
  range: 190,
  voltage: 100,

  diameter: 20,
  width: 3,
  groundClearance: [90, 190],
  weight: 33,
  trolleyHandle: TrolleyHandle.telescopic,
  pedals: [PedalType.plain, PedalSurface.fullGripTape, false],
  antiSpin: AntiSpin.button,
  kickstand: undefined,
  headlight: 6000,
  tailLight: true,
  leds: false,
  sound: SoundSystem.twoPointO,
  display: Display.led,
  suspension: Suspension.custom,
  color: Color.black
};

const exnHT: Wheel = {
  ...ex,
  ...torqueMotor,
  id: WheelId.exnHT,
  name: 'EX.N Torque',
  price: 3000,

  ratedPower: 2800,
  range: 190,

  groundClearance: 160,
  sound: SoundSystem.twoPointO,
  suspension: undefined,
  color: Color.black
};

const exnHS: Wheel = {
  ...exnHT,
  ...speedMotor,
  id: WheelId.exnHS,
  name: 'EX.N Speed'
};

const hero: Wheel = {
  ...torqueMotor,
  id: WheelId.hero,
  brandId: BrandId.begode,
  name: 'Hero',
  price: 3000,

  ratedPower: 2800,
  peakPower: 0,
  battery: {
    capacity: 0,
    parallels: 0,
    type: '',
    wattsHour: 1800
  },
  range: 125,
  voltage: 100,

  diameter: 18,
  width: 3,
  groundClearance: [90, 170],
  weight: 36.5,
  trolleyHandle: TrolleyHandle.telescopic,
  pedals: [PedalType.honeycomb, PedalSurface.metalic, true],
  antiSpin: AntiSpin.position,
  kickstand: Kickstand.dedicated,
  headlight: 5000,
  tailLight: true,
  leds: false,
  sound: SoundSystem.twoPointO,
  display: Display.led,
  suspension: Suspension.standard,
  color: Color.black
};

const monster: Wheel = {
  id: WheelId.monster,
  brandId: BrandId.begode,
  name: 'Monster',
  price: 3500,

  ratedPower: 2500,
  peakPower: 0,
  maxGradibility: 20,
  maxSpeed: 68,
  battery: {
    capacity: 3500,
    parallels: 6,
    type: '18650',
    wattsHour: 1845
  },
  range: 120,
  voltage: 100,

  diameter: 22,
  width: 3,
  groundClearance: 164,
  weight: 29,
  trolleyHandle: undefined,
  pedals: [PedalType.plain, PedalSurface.fullGripTape, false],
  antiSpin: undefined,
  kickstand: undefined,
  headlight: true,
  tailLight: true,
  leds: false,
  sound: undefined,
  display: undefined,
  suspension: undefined,
  color: Color.black
};

const monsterPro: Wheel = {
  ...monster,
  id: WheelId.monsterPro,
  name: 'Monster Pro',
  price: 3900,

  ratedPower: 3500,
  maxSpeed: 80,
  battery: {
    capacity: 5000,
    parallels: 8,
    type: '21700',
    wattsHour: 3600
  },
  range: 200,
  voltage: 100,

  diameter: 24,
  width: 3,
  groundClearance: 165,
  weight: 40,
  trolleyHandle: TrolleyHandle.telescopic,
  pedals: [PedalType.plain, PedalSurface.fullGripTape, false],
  antiSpin: AntiSpin.sensor,
  sound: SoundSystem.twoPointO,
  display: Display.led
};

const ex2: Wheel = {
  ...torqueMotor,
  id: WheelId.ex2,
  brandId: BrandId.begode,
  name: 'EX2S',
  price: 0,

  ratedPower: 3000,
  peakPower: 0,
  battery: {
    capacity: 0,
    parallels: 0,
    type: '21700',
    wattsHour: 3600
  },
  range: 190,
  voltage: 100,

  diameter: 20,
  width: 3,
  groundClearance: [160, 240],
  weight: 47,
  trolleyHandle: TrolleyHandle.telescopic,
  pedals: [PedalType.honeycomb, PedalSurface.metalic, true],
  antiSpin: undefined,
  kickstand: Kickstand.dedicated,
  headlight: 7000,
  tailLight: true,
  leds: false,
  sound: undefined,
  display: undefined,
  suspension: Suspension.standard,
  color: [Color.black, Color.silver]
};

export const begodeWheels: Wheel[] = [
  mten,
  mcm5,
  tesla,
  nikola,
  rsHT,
  rsHS,
  msx,
  msx100,
  msp,
  ex,
  exnHT,
  exnHS,
  hero,
  monster,
  monsterPro,
  ex2
];