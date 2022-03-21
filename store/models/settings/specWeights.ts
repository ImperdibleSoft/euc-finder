import { SpecWeights } from '../../types';

export const getGenericSpecWheights = (): SpecWeights => ({
  price: 20,

  hollowMotor: 0,
  ratedPower: 15,

  // This value is automatically calculated.
  // It is declared here in order to match Types
  battery: 0,
  stockCharger: 0,
  maxCharger: 0,
  chargePorts: 0,
  usbPorts: 0,

  maxGradibility: 10,
  maxSpeed: 15,
  range: 15,

  weight: 10,
  trolleyHandle: 10,
  antiSpin: 5,
  dimensions: 0,
  pedals: 10,
  pedalSize: 0,
  kickstand: 5,
  headlight: 10,
  tailLight: 10,
  leds: 1,
  sound: 3,
  display: 2,
  suspension: 5
});

export const getComfortableSpecWheights = (): SpecWeights => ({
  price: 20,

  hollowMotor: 0,
  ratedPower: 5,

  // This value is automatically calculated.
  // It is declared here in order to match Types
  battery: 0,
  stockCharger: 0,
  maxCharger: 0,
  chargePorts: 0,
  usbPorts: 0,

  maxGradibility: 10,
  maxSpeed: 5,
  range: 15,

  weight: 15,
  trolleyHandle: 15,
  antiSpin: 15,
  dimensions: 0,
  pedals: 10,
  pedalSize: 0,
  kickstand: 15,
  headlight: 10,
  tailLight: 10,
  leds: 0,
  sound: 6,
  display: 2,
  suspension: 15
});

export const getSafetySpecWheights = (): SpecWeights => ({
  price: 20,

  hollowMotor: 0,
  ratedPower: 15,

  // This value is automatically calculated.
  // It is declared here in order to match Types
  battery: 0,
  stockCharger: 0,
  maxCharger: 0,
  chargePorts: 0,
  usbPorts: 0,

  maxGradibility: 10,
  maxSpeed: 8,
  range: 10,

  weight: 10,
  trolleyHandle: 10,
  antiSpin: 10,
  dimensions: 0,
  pedals: 12,
  pedalSize: 0,
  kickstand: 5,
  headlight: 15,
  tailLight: 15,
  leds: 0,
  sound: 0,
  display: 2,
  suspension: 15
});

export const getPerformanceSpecWheights = (): SpecWeights => ({
  price: 20,

  hollowMotor: 0,
  ratedPower: 15,

  // This value is automatically calculated.
  // It is declared here in order to match Types
  battery: 0,
  stockCharger: 0,
  maxCharger: 0,
  chargePorts: 0,
  usbPorts: 0,

  maxGradibility: 5,
  maxSpeed: 20,
  range: 10,

  weight: 15,
  trolleyHandle: 0,
  antiSpin: 0,
  dimensions: 0,
  pedals: 10,
  pedalSize: 0,
  kickstand: 0,
  headlight: 0,
  tailLight: 0,
  leds: 0,
  sound: 0,
  display: 0,
  suspension: 0
});
