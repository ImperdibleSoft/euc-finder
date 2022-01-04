/* eslint-disable max-lines */
import {
  BrandId,
  Color,
  Display,
  Kickstand,
  PedalSurface,
  PedalType,
  SoundSystem,
  TrolleyHandle,
  Wheel,
  WheelId
} from '../../../../types';

const commanderHT: Wheel = {
  id: WheelId.commanderHT,
  brandId: BrandId.extremeBull,
  name: 'Commander Torque',
  price: 3400,

  ratedPower: 2800,
  peakPower: 0,
  maxGradibility: 30,
  maxSpeed: 68,
  battery: {
    capacity: 0,
    parallels: 0,
    type: '',
    wattsHour: 3600
  },
  range: 170,
  voltage: 100,

  diameter: 20,
  width: 0,
  groundClearance: 160,
  weight: 38.5,
  trolleyHandle: TrolleyHandle.telescopic,
  pedals: [PedalType.honeycomb, PedalSurface.metalic, true],
  antiSpin: undefined,
  kickstand: undefined,
  headlight: true,
  tailLight: true,
  leds: true,
  sound: SoundSystem.twoPointO,
  display: Display.led,
  suspension: undefined,
  color: Color.black
};

const commanderHS: Wheel = {
  ...commanderHT,
  id: WheelId.commanderHS,
  name: 'Commander Speed',

  maxSpeed: 80
};

const xmenHT: Wheel = {
  id: WheelId.xmenHT,
  brandId: BrandId.extremeBull,
  name: 'X-Men Torque',
  price: 0,

  ratedPower: 2800,
  peakPower: 0,
  maxGradibility: 30,
  maxSpeed: 68,
  battery: {
    capacity: 4890,
    parallels: 0,
    type: '21700',
    wattsHour: 1800
  },
  range: 125,
  voltage: 100,

  diameter: 0,
  width: 2.75,
  groundClearance: 160,
  weight: 31,
  trolleyHandle: undefined,
  pedals: [PedalType.honeycomb, PedalSurface.metalic, true],
  antiSpin: undefined,
  kickstand: Kickstand.dedicated,
  headlight: 5000,
  tailLight: true,
  leds: false,
  sound: SoundSystem.twoPointO,
  display: Display.led,
  suspension: undefined,
  color: Color.black
};

const xmenHS: Wheel = {
  ...xmenHT,
  id: WheelId.xmenHS,
  name: 'X-Men Speed',

  maxSpeed: 80
};

export const extremeBullWheels: Wheel[] = [
  commanderHT,
  commanderHS,
  xmenHT,
  xmenHS
];