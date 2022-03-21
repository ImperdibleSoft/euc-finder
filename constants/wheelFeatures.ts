import {
  AntiSpinWeight,
  Availability,
  DisplayWeight,
  KickstandWeight,
  PedalSurfaceWeight,
  PedalTypeWeight,
  SoundSystemWeight,
  SuspensionWeight,
  TrolleyHandleWeight,
  UsbWeight,
  WheelFeatureFormatters,
  WheelFeatureIcons
} from '../types';
import * as formatters from '../utils/formatters';

export const wheelFeatureIcons: WheelFeatureIcons = {
  brandId: 'business',
  availability: 'event_available',
  category: 'exposure',
  name: 'sort_by_alpha',
  price: 'euro',

  diameter: 'panorama_fish_eye',
  width: 'settings_ethernet',
  maxSpeed: 'speed',
  range: 'space_bar',
  weight: 'fitness_center',

  hollowMotor: 'radio_button_unchecked',
  ratedPower: 'bolt',
  peakPower: 'offline_bolt',
  battery: 'battery_full',
  stockCharger: 'electrical_services',
  maxCharger: 'electrical_services',
  chargePorts: 'power',
  usbPorts: 'usb',

  voltage: 'battery_charging_full',
  maxGradibility: 'filter_hdr',
  groundClearance: 'height',
  suspension: 'file_download',

  headlight: 'highlight',
  tailLight: 'tungsten',
  trolleyHandle: 'pan_tool',
  dimensions: 'square_foot',
  pedals: 'splitscreen',
  pedalSize: 'fit_screen',
  antiSpin: 'autorenew',
  kickstand: 'gavel',
  leds: 'light_mode',
  sound: 'volume_up',
  display: 'smart_screen',
  color: 'water_drop'
};

export const availabilityIcons: Record<Availability, string> = {
  filtered: 'bubble_chart',
  announced: 'campaign',
  preorder: 'confirmation_number',
  available: 'event_available',
  discontinued: 'event_busy'
};

export const wheelFeatureFormatters: WheelFeatureFormatters = {
  price: formatters.currency,

  diameter: formatters.diameter,
  width: formatters.diameter,
  maxSpeed: formatters.speed,
  range: formatters.distance,
  weight: formatters.weight,

  hollowMotor: formatters.boolean,
  ratedPower: formatters.power,
  peakPower: formatters.power,
  battery: formatters.battery,
  stockCharger: formatters.chargeInfo,
  maxCharger: formatters.chargeInfo,
  chargePorts: formatters.chargePorts,
  usbPorts: formatters.usbPorts,
  voltage: formatters.voltage,
  maxGradibility: formatters.degrees,
  groundClearance: formatters.groundClearance,
  suspension: formatters.suspension,

  headlight: formatters.lumens,
  tailLight: formatters.lumens,
  trolleyHandle: formatters.trolleyHandle,
  antiSpin: formatters.antiSpin,
  dimensions: formatters.dimensions,
  pedals: formatters.pedals,
  pedalSize: formatters.pedalSize,
  kickstand: formatters.kickstand,
  leds: formatters.boolean,
  sound: formatters.soundChannels,
  display: formatters.display,
  color: formatters.color
};

export const usbWeight: UsbWeight = {
  usbC: 1.2,
  usbA: 1.1
};

export const trolleyHandleWeight: TrolleyHandleWeight = {
  scorpion: 1.1,
  telescopic: 1.0
};

export const antiSpinWeight: AntiSpinWeight = {
  sensor: 1.2,
  button: 1.1,
  position: 1.0
};

export const pedalTypeWeight: PedalTypeWeight = {
  honeycomb: 2,
  plain: 1
};

export const pedalSurfaceWeight: PedalSurfaceWeight = {
  fullGripTape: 0.4,
  partialGripTape: 0.3,
  rubber: 0.2,
  metalic: 0.1
};

export const kickstandWeight: KickstandWeight = {
  dedicated: 2,
  shell: 1
};

export const soundSystemWeight: SoundSystemWeight = {
  '5.1': 1.3,
  '4.0': 1.2,
  '2.1': 1.1,
  '2.0': 1.0
};

export const displayWeight: DisplayWeight = {
  lcd: 1.5,
  led: 1.0
};

export const suspensionWeight: SuspensionWeight = {
  standard: 1.5,
  custom: 1.0
};
