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
import { begodeHoneycomb, begodePlainL, begodePlainM, begodePlainS, speedMotor, torqueMotor } from './common';

const mten: Wheel = {
  id: WheelId.mten,
  brandId: BrandId.begode,
  name: 'Mten 3',
  website: 'http://www.begode.com/productinfo/371629.html',
  price: 1000,
  availability: 'available',

  ratedPower: 800,
  peakPower: 0,
  hollowMotor: false,

  battery: {
    capacity: 0,
    parallels: 2,
    type: '18650',
    wattsHour: 512
  },
  stockCharger: 1.2,
  maxCharger: 0,
  chargePorts: 1,
  usbPorts: [0, 0],

  maxGradibility: 30,
  maxSpeed: 38,
  range: 40,
  voltage: 84,

  diameter: 10,
  width: 3,
  groundClearance: 110,
  weight: 13,
  trolleyHandle: TrolleyHandle.telescopic,
  dimensions: [450, 150, 290],
  ...begodePlainS,
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
  website: 'http://www.begode.com/productinfo/371631.html',
  price: 1400,
  availability: 'available',

  hollowMotor: false,
  ratedPower: 1500,
  peakPower: 2250,
  
  battery: {
    capacity: 0,
    parallels: 0,
    type: '18650',
    wattsHour: 800
  },
  stockCharger: 1.9,
  maxCharger: 0,
  chargePorts: 1,
  usbPorts: [1, 0],

  maxGradibility: 30,
  maxSpeed: 35,
  range: 65,
  voltage: 84,

  diameter: 14,
  width: 2.5,
  groundClearance: 120,
  weight: 17,
  trolleyHandle: TrolleyHandle.telescopic,
  dimensions: [410, 170, 525],
  ...begodePlainS,
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
  website: 'http://www.begode.com/productinfo/371642.html',
  price: 1650,
  availability: 'available',

  hollowMotor: true,
  ratedPower: 2000,
  peakPower: 4000,
  
  battery: {
    capacity: 0,
    parallels: 4,
    type: '21700',
    wattsHour: 1480
  },
  stockCharger: 2.15,
  maxCharger: 0,
  chargePorts: 1,
  usbPorts: undefined,

  maxGradibility: 30,
  maxSpeed: 55,
  range: 100,
  voltage: 84,

  diameter: 16,
  width: 2.125,
  groundClearance: 135,
  weight: 22,
  trolleyHandle: TrolleyHandle.telescopic,
  dimensions: [570, 230, 420],
  ...begodePlainM,
  antiSpin: AntiSpin.button,
  kickstand: undefined,
  headlight: 1200,
  tailLight: true,
  leds: true,
  sound: SoundSystem.twoPointO,
  display: Display.led,
  suspension: undefined,
  color: Color.black
};

const nikola: Wheel = {
  id: WheelId.nikola,
  brandId: BrandId.begode,
  name: 'Nikola Plus',
  website: 'http://www.begode.com/productinfo/371591.html',
  price: 2800,
  availability: 'available',

  hollowMotor: false,
  ratedPower: 2000,
  peakPower: 0,

  battery: {
    capacity: 3500,
    parallels: 6,
    type: '18650',
    wattsHour: 1860
  },
  stockCharger: 3,
  maxCharger: 0,
  chargePorts: 1,
  usbPorts: [1, 0],

  maxGradibility: 30,
  maxSpeed: 70,
  range: 95,
  voltage: 100.8,

  diameter: 16,
  width: 3,
  groundClearance: 145,
  weight: 26,
  trolleyHandle: TrolleyHandle.scorpion,
  dimensions: [490, 200, 590],
  ...begodePlainM,
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

const msx: Wheel = {
  id: WheelId.msx,
  brandId: BrandId.begode,
  name: 'MSuper X',
  website: 'http://www.begode.com/productinfo/371621.html',
  price: 3400,
  availability: 'discontinued',

  hollowMotor: false,
  ratedPower: 2000,
  peakPower: 4000,

  battery: {
    capacity: 3500,
    parallels: 6,
    type: '18650',
    wattsHour: 1600
  },
  stockCharger: 1.25,
  maxCharger: 0,
  chargePorts: 1,
  usbPorts: undefined,

  maxGradibility: 35,
  maxSpeed: 60,
  range: 100,
  voltage: 84,

  diameter: 18,
  width: 3,
  groundClearance: 136,
  weight: 23.5,
  trolleyHandle: TrolleyHandle.telescopic,
  dimensions: [490, 230, 560],
  ...begodePlainM,
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
  availability: 'discontinued',

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
  website: 'http://www.begode.com/productinfo/406993.html',
  price: 2500,
  availability: 'discontinued',

  hollowMotor: false,
  ratedPower: 2500,
  peakPower: 0,

  battery: {
    capacity: 5000,
    parallels: 4,
    type: '21700',
    wattsHour: 1800
  },
  stockCharger: 3,
  maxCharger: 0,
  chargePorts: 1,
  usbPorts: undefined,

  maxGradibility: 35,
  maxSpeed: 60,
  range: 120,
  voltage: 100.8,

  diameter: 18,
  width: 3,
  groundClearance: 165,
  weight: 25,
  trolleyHandle: TrolleyHandle.telescopic,
  dimensions: [490, 230, 560],
  ...begodePlainM,
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

const rsHT: Wheel = {
  id: WheelId.rsHT,
  brandId: BrandId.begode,
  name: 'RS Torque',
  website: 'http://www.begode.com/productinfo/3129.html',
  price: 2300,
  availability: 'available',
  
  hollowMotor: true,
  ratedPower: 2600,
  peakPower: 0,

  battery: {
    capacity: 5000,
    parallels: 4,
    type: '21700',
    wattsHour: 1800
  },
  stockCharger: 3,
  maxCharger: 0,
  chargePorts: 2,
  usbPorts: [1, 0],
  
  ...torqueMotor,
  range: 130,
  voltage: 100.8,

  diameter: 19,
  width: 3,
  groundClearance: 165,
  weight: 27,
  trolleyHandle: TrolleyHandle.telescopic,
  dimensions: [560, 240, 490],
  ...begodePlainM,
  antiSpin: AntiSpin.button,
  kickstand: undefined,
  headlight: 6000,
  tailLight: true,
  leds: true,
  sound: SoundSystem.twoPointOne,
  display: Display.led,
  suspension: undefined,
  color: Color.black
};

const rsHS: Wheel = {
  ...rsHT,
  id: WheelId.rsHS,
  name: 'RS Speed',
  
  ...speedMotor
};

const ex: Wheel = {
  id: WheelId.ex,
  brandId: BrandId.begode,
  name: 'EX',
  website: 'http://www.begode.com/productinfo/515824.html',
  price: 4000,
  availability: 'available',

  hollowMotor: true,
  ratedPower: 3500,
  peakPower: 0,

  battery: {
    capacity: 5000,
    parallels: 6,
    type: '21700',
    wattsHour: 2700
  },
  stockCharger: 3,
  maxCharger: 0,
  chargePorts: 1,
  usbPorts: undefined,
  
  maxGradibility: 30,
  maxSpeed: 70,
  range: 190,
  voltage: 100.8,

  diameter: 20,
  width: 3,
  groundClearance: [90, 190],
  weight: 33,
  trolleyHandle: TrolleyHandle.telescopic,
  dimensions: [615, 250, 510],
  ...begodePlainL,
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
  id: WheelId.exnHT,
  name: 'EX.N Torque',
  website: 'http://www.begode.com/productinfo/557433.html',
  price: 3000,
  availability: 'available',
  
  ratedPower: 2800,
  peakPower: 3500,

  ...torqueMotor,
  range: 190,

  groundClearance: 160,
  dimensions: [858, 250, 510],
  sound: SoundSystem.twoPointO,
  suspension: undefined,
  color: Color.black
};

const exnHS: Wheel = {
  ...exnHT,
  id: WheelId.exnHS,
  name: 'EX.N Speed',
  
  ...speedMotor
};

const heroHT: Wheel = {
  id: WheelId.heroHT,
  brandId: BrandId.begode,
  name: 'Hero Torque',
  website: 'http://www.begode.com/productinfo/715123.html',
  price: 3000,
  availability: 'available',
  
  hollowMotor: true,
  ratedPower: 2800,
  peakPower: 0,
  
  battery: {
    capacity: 0,
    parallels: 0,
    type: '21700',
    wattsHour: 1800
  },
  stockCharger: 0,
  maxCharger: 0,
  chargePorts: 2,
  usbPorts: [1, 0],

  ...torqueMotor,
  range: 125,
  voltage: 100.8,

  diameter: 18,
  width: 3,
  groundClearance: [90, 170],
  weight: 36.5,
  trolleyHandle: TrolleyHandle.telescopic,
  dimensions: [580, 200, 790],
  ...begodeHoneycomb,
  antiSpin: AntiSpin.position,
  kickstand: Kickstand.shell,
  headlight: 5000,
  tailLight: true,
  leds: false,
  sound: SoundSystem.twoPointO,
  display: Display.led,
  suspension: Suspension.standard,
  color: Color.black
};

const heroHS: Wheel = {
  ...heroHT,
  id: WheelId.heroHS,
  name: 'Hero Speed',

  ...speedMotor
};

const ex20s: Wheel = {
  id: WheelId.ex20s,
  brandId: BrandId.begode,
  name: 'EX20S',
  website: 'http://www.begode.com/productinfo/756873.html',
  price: 0,
  availability: 'preorder',

  hollowMotor: undefined,
  ratedPower: 3000,
  peakPower: 0,

  battery: {
    capacity: 0,
    parallels: 8,
    type: '21700',
    wattsHour: 3600
  },
  stockCharger: 3,
  maxCharger: 0,
  chargePorts: 2,
  usbPorts: [0, 0],
  
  ...torqueMotor,
  range: 190,
  voltage: 100.8,

  diameter: 20,
  width: 2.75,
  groundClearance: [160, 240],
  weight: 49,
  trolleyHandle: TrolleyHandle.telescopic,
  dimensions: [550, 330, 710],
  ...begodeHoneycomb,
  antiSpin: AntiSpin.button,
  kickstand: Kickstand.shell,
  headlight: 7000,
  tailLight: true,
  leds: false,
  sound: undefined,
  display: undefined,
  suspension: Suspension.standard,
  color: Color.blackAndSilver
};

const master: Wheel = {
  id: WheelId.master,
  brandId: BrandId.begode,
  name: 'Master',
  website: 'http://www.begode.com/productinfo/770685.html',
  price: 2900,
  availability: 'announced',

  hollowMotor: undefined,
  ratedPower: 3500,
  peakPower: 0,

  battery: {
    capacity: 0,
    parallels: 0,
    type: '',
    wattsHour: 2400
  },
  stockCharger: 3,
  maxCharger: 0,
  chargePorts: 1,
  usbPorts: undefined,

  ...torqueMotor,
  maxSpeed: 90,
  range: 150,
  voltage: 134.4,

  diameter: 20,
  width: 2.75,
  groundClearance: [140, 220],
  weight: 36,
  trolleyHandle: TrolleyHandle.telescopic,
  dimensions: [567, 330, 628],
  ...begodeHoneycomb,
  antiSpin: AntiSpin.button,
  kickstand: Kickstand.shell,
  headlight: 7000,
  tailLight: true,
  leds: false,
  sound: undefined,
  display: Display.led,
  suspension: Suspension.standard,
  color: Color.blackAndRed
};

const monster: Wheel = {
  id: WheelId.monster,
  brandId: BrandId.begode,
  name: 'Monster',
  website: 'http://www.begode.com/productinfo/371628.html',
  price: 3500,
  availability: 'available',

  hollowMotor: false,
  ratedPower: 2500,
  peakPower: 0,

  battery: {
    capacity: 3500,
    parallels: 6,
    type: '18650',
    wattsHour: 1845
  },
  stockCharger: 3,
  maxCharger: 0,
  chargePorts: 1,
  usbPorts: [1, 0],

  maxGradibility: 20,
  maxSpeed: 68,
  range: 120,
  voltage: 100.8,

  diameter: 22,
  width: 3,
  groundClearance: 164,
  weight: 29,
  trolleyHandle: undefined,
  dimensions: [655, 231, 590],
  ...begodePlainL,
  antiSpin: AntiSpin.button,
  kickstand: undefined,
  headlight: true,
  tailLight: true,
  leds: false,
  sound: SoundSystem.twoPointO,
  display: undefined,
  suspension: undefined,
  color: Color.black
};

const monsterPro: Wheel = {
  ...monster,
  id: WheelId.monsterPro,
  name: 'Monster Pro',
  website: 'http://www.begode.com/productinfo/515827.html',
  price: 3900,
  availability: 'available',

  hollowMotor: true,
  ratedPower: 3500,
  
  battery: {
    capacity: 5000,
    parallels: 8,
    type: '21700',
    wattsHour: 3600
  },
  chargePorts: 2,
  
  maxSpeed: 80,
  range: 200,
  voltage: 100.8,

  diameter: 24,
  width: 2.7,
  groundClearance: 165,
  weight: 45,
  trolleyHandle: TrolleyHandle.telescopic,
  dimensions: [680, 260, 610],
  antiSpin: AntiSpin.button,
  sound: SoundSystem.twoPointO,
  display: Display.led
};

export const begodeWheels: Wheel[] = [
  mten,
  mcm5,
  tesla,
  nikola,
  msx,
  msx100,
  msp,
  rsHT,
  rsHS,
  exnHT,
  exnHS,
  ex,
  heroHT,
  heroHS,
  ex20s,
  master,
  monster,
  monsterPro
];
