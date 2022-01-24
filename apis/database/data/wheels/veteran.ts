/* eslint-disable max-lines */
import {
  BrandId,
  Color,
  Display,
  Kickstand,
  PedalSurface,
  PedalType,
  TrolleyHandle,
  Wheel,
  WheelId
} from '../../../../types';

const sherman: Wheel = {
  id: WheelId.sherman,
  brandId: BrandId.veteran,
  name: 'Sherman',
  price: 4400,
  availability: 'available',

  ratedPower: 2500,
  peakPower: 0,
  maxGradibility: 30,
  maxSpeed: 80,
  battery: {
    capacity: 3500,
    parallels: 10,
    type: '18650',
    wattsHour: 3200
  },
  range: 190,
  voltage: 100,

  diameter: 20,
  width: 3,
  groundClearance: 170,
  weight: 35,
  trolleyHandle: TrolleyHandle.telescopic,
  pedals: [PedalType.plain, PedalSurface.fullGripTape, false],
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
  availability: 'preorder',
  
  ratedPower: 2800,
  peakPower: 3750,
  maxGradibility: 35,
  battery: {
    capacity: 0,
    parallels: 0,
    type: '18650',
    wattsHour: 3600
  },
  range: 215,

  weight: 38,
  headlight: 3500
};

const abrams: Wheel = {
  id: WheelId.abrams,
  brandId: BrandId.veteran,
  name: 'Abrams',
  price: 3700,
  availability: 'available',

  ratedPower: 3500,
  peakPower: 6500,
  maxGradibility: 30,
  maxSpeed: 80,
  battery: {
    capacity: 0,
    parallels: 0,
    type: '21700',
    wattsHour: 2700
  },
  range: 130,
  voltage: 100,

  diameter: 22,
  width: 2.75,
  groundClearance: 180,
  weight: 40,
  trolleyHandle: TrolleyHandle.telescopic,
  pedals: [PedalType.plain, PedalSurface.metalic, true],
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
