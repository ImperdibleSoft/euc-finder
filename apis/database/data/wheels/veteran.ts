/* eslint-disable max-lines */
import {
  BrandId,
  Color,
  Display,
  Kickstand,
  TrolleyHandle,
  Wheel,
  WheelId
} from '../../../../types';
import { veteranMetalicL, veteranPlainM } from './common';

const sherman: Wheel = {
  id: WheelId.sherman,
  brandId: BrandId.veteran,
  name: 'Sherman',
  website: 'https://www.leaperkim.com/sherman1?article_category=1&brd=1',
  price: 4400,
  availability: 'available',

  hollowMotor: false,
  ratedPower: 2500,
  peakPower: 0,

  battery: {
    capacity: 3500,
    parallels: 10,
    type: '18650',
    wattsHour: 3200
  },
  stockCharger: 5,
  maxCharger: 0,
  chargePorts: 2,
  usbPorts: undefined,

  maxGradibility: 30,
  maxSpeed: 80,
  range: 190,
  voltage: 100.8,

  diameter: 20,
  width: 3,
  groundClearance: 170,
  weight: 38,
  trolleyHandle: TrolleyHandle.telescopic,
  dimensions: [592, 195, 500],
  ...veteranPlainM,
  antiSpin: undefined,
  kickstand: undefined,
  headlight: 1500,
  tailLight: true,
  leds: false,
  sound: undefined,
  display: Display.led,
  suspension: undefined,
  color: Color.black
};

const shermanMax: Wheel = {
  ...sherman,
  id: WheelId.shermanMax,
  name: 'Sherman Max',
  website: '',
  availability: 'preorder',
  
  ratedPower: 2800,
  peakPower: 3750,
  
  battery: {
    ...sherman.battery,
    type: '21700',
    wattsHour: 3600
  },
  usbPorts: undefined,

  maxGradibility: 35,
  range: 215,

  weight: 40,
  dimensions: [605, 195, 500],
  headlight: 3500
};

const abrams: Wheel = {
  id: WheelId.abrams,
  brandId: BrandId.veteran,
  name: 'Abrams',
  website: '',
  price: 3700,
  availability: 'available',

  hollowMotor: false,
  ratedPower: 3500,
  peakPower: 6500,

  battery: {
    capacity: 0,
    parallels: 0,
    type: '21700',
    wattsHour: 2700
  },
  stockCharger: 9,
  maxCharger: 15,
  chargePorts: 1,
  usbPorts: undefined,
  
  maxGradibility: 30,
  maxSpeed: 80,
  range: 130,
  voltage: 100.8,

  diameter: 22,
  width: 2.75,
  groundClearance: 180,
  weight: 40,
  trolleyHandle: TrolleyHandle.telescopic,
  dimensions: [660, 215, 620],
  ...veteranMetalicL,
  antiSpin: undefined,
  kickstand: Kickstand.shell,
  headlight: 2800,
  tailLight: true,
  leds: false,
  sound: undefined,
  display: Display.led,
  suspension: undefined,
  color: Color.black
};

export const veteranWheels = [
  sherman,
  shermanMax,
  abrams
];
