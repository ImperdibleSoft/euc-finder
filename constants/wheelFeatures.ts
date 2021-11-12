import {
  AntiSpinWeight,
  DisplayWeight,
  KickstandWeight,
  SoundSystemWeight,
  SuspensionWeight,
  TrolleyHandleWeight,
  WheelFeatureFormatters,
  WheelFeatureIcons
} from '../types';
import * as formatters from '../utils/formatters';

export const wheelFeatureIcons: WheelFeatureIcons = {
  brandId: 'business',
  category: 'exposure',
  name: 'sort_by_alpha',
  price: 'euro',

  diameter: 'panorama_fish_eye',
  width: 'settings_ethernet',
  maxSpeed: 'speed',
  range: 'space_bar',
  weight: 'fitness_center',
  // weight: 'file_download',

  ratedPower: 'bolt',
  peakPower: 'offline_bolt',
  battery: 'battery_charging_full',
  batterySetup: 'battery_full',
  voltage: 'power',
  maxGradibility: 'filter_hdr',
  groundClearance: 'height',
  suspension: 'file_download',

  headlight: 'highlight',
  tailLight: 'tungsten',
  trolleyHandle: 'pan_tool',
  antiSpin: 'autorenew',
  kickstand: 'gavel',
  leds: 'light_mode',
  sound: 'volume_up',
  display: 'smart_screen',
  color: 'water_drop'
};

export const wheelFeatureFormatters: WheelFeatureFormatters = {
  price: formatters.currency,

  diameter: formatters.diameter,
  width: formatters.diameter,
  maxSpeed: formatters.speed,
  range: formatters.distance,
  weight: formatters.weight,

  ratedPower: formatters.power,
  peakPower: formatters.power,
  battery: formatters.energy,
  batterySetup: formatters.batterySetup,
  voltage: formatters.voltage,
  maxGradibility: formatters.degrees,
  groundClearance: formatters.groundClearance,
  suspension: formatters.suspension,

  headlight: formatters.lumens,
  tailLight: formatters.lumens,
  trolleyHandle: formatters.trolleyHandle,
  antiSpin: formatters.antiSpin,
  kickstand: formatters.kickstand,
  leds: formatters.boolean,
  sound: formatters.soundChannels,
  display: formatters.display,
  color: formatters.color
};

export const trolleyHandleWeight: TrolleyHandleWeight = {
  scorpion: 2,
  telescopic: 1
};

export const antiSpinWeight: AntiSpinWeight = {
  sensor: 3,
  button: 2,
  position: 1
};

export const kickstandWeight: KickstandWeight = {
  dedicated: 2,
  shell: 1
};

export const soundSystemWeight: SoundSystemWeight = {
  '5.1': 4,
  '4.0': 3,
  '2.1': 2,
  '2.0': 1
};

export const displayWeight: DisplayWeight = {
  lcd: 2,
  led: 1
};

export const suspensionWeight: SuspensionWeight = {
  standard: 2,
  custom: 1
};