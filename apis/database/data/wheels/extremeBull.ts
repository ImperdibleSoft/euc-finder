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
import { speedMotor, torqueMotor } from './common';

const commanderHT: Wheel = {
  id: WheelId.commanderHT,
  brandId: BrandId.extremeBull,
  name: 'Commander Torque',
  website: '',
  price: 3400,
  availability: 'available',

  hollowMotor: false,
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
  usbPorts:[0, 0],
  
  ...torqueMotor,
  range: 170,
  voltage: 100.8,

  diameter: 20,
  width: 2.75,
  groundClearance: 160,
  weight: 38.5,
  trolleyHandle: TrolleyHandle.telescopic,
  dimensions: [600, 239, 510],
  pedals: [PedalType.honeycomb, PedalSurface.metalic, true],
  pedalSize: [0, 0],
  antiSpin: undefined,
  kickstand: Kickstand.shell,
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
  
  ...speedMotor
};

const xmenHT: Wheel = {
  id: WheelId.xmenHT,
  brandId: BrandId.extremeBull,
  name: 'X-Men Torque',
  website: '',
  price: 0,
  availability: 'announced',

  hollowMotor: undefined,
  ratedPower: 2800,
  peakPower: 0,
  
  battery: {
    capacity: 4890,
    parallels: 0,
    type: '21700',
    wattsHour: 1800
  },
  stockCharger: 0,
  maxCharger: 0,
  chargePorts: 2,
  usbPorts: undefined,
  
  ...torqueMotor,
  range: 125,
  voltage: 100.8,

  diameter: 20,
  width: 2.75,
  groundClearance: 160,
  weight: 31,
  trolleyHandle: undefined,
  dimensions: [535, 198, 587],
  pedals: [PedalType.honeycomb, PedalSurface.metalic, true],
  pedalSize: [0, 0],
  antiSpin: undefined,
  kickstand: Kickstand.shell,
  headlight: 5000,
  tailLight: false,
  leds: true,
  sound: SoundSystem.twoPointO,
  display: Display.led,
  suspension: undefined,
  color: Color.blackAndYellow
};

const xmenHS: Wheel = {
  ...xmenHT,
  id: WheelId.xmenHS,
  name: 'X-Men Speed',
  
  ...speedMotor,

  color: Color.blackAndRed
};

export const extremeBullWheels: Wheel[] = [
  commanderHT,
  commanderHS,
  xmenHT,
  xmenHS
];
