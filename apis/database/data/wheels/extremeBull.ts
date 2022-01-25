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
import { speedMotor, torqueMotor } from './motors';

const commanderHT: Wheel = {
  ...torqueMotor,
  id: WheelId.commanderHT,
  brandId: BrandId.extremeBull,
  name: 'Commander Torque',
  price: 3400,
  availability: 'available',

  ratedPower: 2800,
  peakPower: 0,
  battery: {
    capacity: 0,
    parallels: 8,
    type: '21700',
    wattsHour: 3600
  },
  range: 170,
  voltage: 100,

  diameter: 20,
  width: 0,
  groundClearance: 160,
  weight: 38.5,
  trolleyHandle: TrolleyHandle.telescopic,
  sizes: [0, 0, 0],
  pedals: [PedalType.honeycomb, PedalSurface.metalic, true],
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
  ...speedMotor,
  id: WheelId.commanderHS,
  name: 'Commander Speed'
};

const xmenHT: Wheel = {
  ...torqueMotor,
  id: WheelId.xmenHT,
  brandId: BrandId.extremeBull,
  name: 'X-Men Torque',
  price: 0,
  availability: 'announced',

  ratedPower: 2800,
  peakPower: 0,
  battery: {
    capacity: 4890,
    parallels: 0,
    type: '21700',
    wattsHour: 1800
  },
  range: 125,
  voltage: 100,

  diameter: 20,
  width: 2.75,
  groundClearance: 160,
  weight: 31,
  trolleyHandle: undefined,
  sizes: [0, 0, 0],
  pedals: [PedalType.honeycomb, PedalSurface.metalic, true],
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
  ...speedMotor,
  id: WheelId.xmenHS,
  name: 'X-Men Speed',

  color: Color.blackAndRed
};

export const extremeBullWheels: Wheel[] = [
  commanderHT,
  commanderHS,
  xmenHT,
  xmenHS
];
