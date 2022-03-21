/* eslint-disable max-lines */
import {
  antiSpinWeight,
  displayWeight,
  kickstandWeight,
  pedalSurfaceWeight,
  pedalTypeWeight,
  soundSystemWeight,
  suspensionWeight,
  trolleyHandleWeight,
  usbWeight
} from '../../constants';
import { SpecWeights } from '../../store/types';
import {
  AntiSpin,
  Display,
  Kickstand,
  MinMaxValues,
  PedalSurface,
  PedalType,
  SoundSystem,
  Suspension,
  TrolleyHandle,
  Wheel,
  WheelFeatures,
  WheelScore
} from '../../types';
import { getChargingTime } from '../conversions';
import { toDecimals } from '../range';

const applyMaxValue = (value: number, maxValue = 10) => 
  Number(toDecimals((value / 10) * maxValue, 2));

export const isCompetingValue = (key: keyof WheelScore) =>
  key !== 'brandId' &&
  key !== 'diameter' &&
  key !== 'width' &&
  key !== 'peakPower' &&
  key !== 'voltage' &&
  key !== 'groundClearance' &&
  key !== 'color';

export const getBooleanScore = (value?: boolean) =>
  (value ? 1 : 0) * 10;

export const getValueBasedOnMinMax = (value: number, minMax: [number, number]) => {
  if (!value) {
    return 0;
  }

  const [min, max] = minMax;

  if (value === max) {
    return 10;
  }

  if (value === min) {
    return 0;
  }

  const percentageVal = ((value - min) * 100) / (max - min);
  return Number(toDecimals(percentageVal / 10, 2, 2));
};

export const getLowestValueScore = (value: number, minMax: [number, number]) => {
  const [min, max] = minMax;
  return getValueBasedOnMinMax(value, [max, min]);
};

export const getStockChargerScore = (wheel: Wheel) => {
  if (!wheel.stockCharger) {
    return 0;
  }

  const tension = wheel.stockCharger * (wheel.chargePorts || 1);
  if (!wheel.voltage || !wheel.battery.wattsHour) {
    return tension;
  }

  return Number(getChargingTime({
    tension,
    voltage: wheel.voltage,
    wattsHour: wheel.battery.wattsHour
  }));
};

export const getMaxChargerScore = (wheel: Wheel) => {
  if (!wheel.stockCharger) {
    return 0;
  }

  const tension = (wheel.maxCharger || wheel.stockCharger) * (wheel.chargePorts || 1);
  if (!wheel.voltage || !wheel.battery.wattsHour) {
    return tension;
  }

  return Number(getChargingTime({
    tension,
    voltage: wheel.voltage,
    wattsHour: wheel.battery.wattsHour
  }));
};

export const getUsbPortsScore = (value: [number, number]) => {
  const [usbA, usbC] = value;
  return (usbA * usbWeight.usbA) + (usbC * usbWeight.usbC);
};

export const getMaxGradabilityScore = (value: number, minMax: [number, number]) =>
  (getValueBasedOnMinMax(value, minMax) / 10) * 5;

export const getSuspensionScore = (value?: Suspension) => {
  const min = 0;
  const max = suspensionWeight.standard;
  
  const total = value ? suspensionWeight[value] : 0;

  return (getValueBasedOnMinMax(total, [min, max]) / 10) * 5;
};


export const getHeadlightScore = (value: number | boolean, minMax: [number, number]) => {
  const total = typeof value === 'number'
    ? 9 + (getValueBasedOnMinMax(value, minMax) / 10)
    : value === true ? 9 : 0;

  return getValueBasedOnMinMax(total, [0, 10]);
};

export const getTrolleyHandleScore = (value?: TrolleyHandle) => {
  const min = 0;
  const max = trolleyHandleWeight.scorpion;
  
  const total = value ? trolleyHandleWeight[value] : 0;

  return getValueBasedOnMinMax(total, [min, max]);
};

const getPedalTypeScore = (value?: PedalType) => {
  const min = pedalTypeWeight.plain;
  const max = pedalTypeWeight.honeycomb;

  const total = value ? pedalTypeWeight[value] : 0;

  return getValueBasedOnMinMax(total, [min, max]);
};

const getPedalSurfaceScore = (value?: PedalSurface) => {
  const min = pedalSurfaceWeight.metalic;
  const max = pedalSurfaceWeight.fullGripTape;

  const total = value ? pedalSurfaceWeight[value] : 0;

  return getValueBasedOnMinMax(total, [min, max]);
};

export const getPedalsScore = (value?: WheelFeatures['pedals']) => {
  const min = getPedalTypeScore(PedalType.plain)
    + getPedalSurfaceScore(PedalSurface.metalic)
    + getBooleanScore(false);

  const max = getPedalTypeScore(PedalType.honeycomb)
    + getPedalSurfaceScore(PedalSurface.fullGripTape)
    + getBooleanScore(true);

  const [pedalType, pedalSurface, retentionPins] = (value ?? []);
  
  const pedalTypeScore = getPedalTypeScore(pedalType);
  const pedalSurfaceScore = getPedalSurfaceScore(pedalSurface);
  const retentionPinsScore = getBooleanScore(retentionPins);
  const total = pedalTypeScore + pedalSurfaceScore + retentionPinsScore;

  return getValueBasedOnMinMax(total, [min, max]);
};

export const getPedalSizeScore = (value: WheelFeatures['pedalSize']) => {
  const [length = 1, width = 1] = (value ?? [1, 1]);
  return length * width;
};

export const getAntiSpinScore = (value?: AntiSpin) => {
  const min = 0;
  const max = antiSpinWeight.sensor;
  
  const total = value ? antiSpinWeight[value] : 0;

  return getValueBasedOnMinMax(total, [min, max]);
};

export const getKickstandScore = (value?: Kickstand) => {
  const min = 0;
  const max = kickstandWeight.dedicated;
  
  const total = value ? kickstandWeight[value] : 0;

  return getValueBasedOnMinMax(total, [min, max]);
};

export const getLedsScore = (value?: boolean) =>
  getBooleanScore(value);

export const getSoundScore = (value?: SoundSystem) => {
  const min = 0;
  const max = soundSystemWeight['5.1'];
  
  const total = value ? soundSystemWeight[value] : 0;

  return getValueBasedOnMinMax(total, [min, max]);
};

export const getDisplayScore = (value?: Display) => {
  const min = 0;
  const max = displayWeight.lcd;
  
  const total = value ? displayWeight[value] : 0;

  return getValueBasedOnMinMax(total, [min, max]);
};

// eslint-disable-next-line max-lines-per-function
export const getWheelScore = (wheel: Wheel, minMaxValues: MinMaxValues, specWeights: SpecWeights): WheelScore => {
  const price = applyMaxValue(
    getLowestValueScore(wheel.price, minMaxValues.price),
    specWeights.price
  );

  const maxSpeed = applyMaxValue(
    getValueBasedOnMinMax(wheel.maxSpeed, minMaxValues.maxSpeed),
    specWeights.maxSpeed
  );
  const range = applyMaxValue(
    getValueBasedOnMinMax(wheel.range, minMaxValues.range),
    specWeights.range
  );
  const weight = applyMaxValue(
    getLowestValueScore(wheel.weight, minMaxValues.weight),
    specWeights.weight
  );
  
  const ratedPower = applyMaxValue(
    getValueBasedOnMinMax(wheel.ratedPower, minMaxValues.ratedPower),
    specWeights.ratedPower
  );
  const battery = applyMaxValue(
    getValueBasedOnMinMax(wheel.battery.wattsHour, minMaxValues.battery),
    specWeights.battery
  );
  const stockCharger = applyMaxValue(
    getLowestValueScore(getStockChargerScore(wheel), minMaxValues.stockCharger),
    specWeights.stockCharger
  );
  const maxCharger = applyMaxValue(
    getLowestValueScore(getMaxChargerScore(wheel), minMaxValues.maxCharger),
    specWeights.maxCharger
  );
  const chargePorts = applyMaxValue(
    wheel.chargePorts,
    specWeights.chargePorts
  );
  const usbPorts = applyMaxValue(
    getUsbPortsScore(wheel.usbPorts ?? [0, 0]),
    specWeights.usbPorts
  );
  const maxGradibility = applyMaxValue(
    getMaxGradabilityScore(wheel.maxGradibility, minMaxValues.maxGradibility),
    specWeights.maxGradibility
  );
  const suspension = applyMaxValue(
    getSuspensionScore(wheel.suspension),
    specWeights.suspension
  );

  const headlight = applyMaxValue(
    getHeadlightScore(wheel.headlight, minMaxValues.headlight),
    specWeights.headlight
  );
  const tailLight = applyMaxValue(
    getBooleanScore(wheel.tailLight),
    specWeights.tailLight
  );
  const trolleyHandle = applyMaxValue(
    getTrolleyHandleScore(wheel.trolleyHandle),
    specWeights.trolleyHandle
  );
  const pedals = applyMaxValue(
    getPedalsScore(wheel.pedals),
    specWeights.pedals
  );
  const pedalSize = applyMaxValue(
    getValueBasedOnMinMax(getPedalSizeScore(wheel.pedalSize), minMaxValues.pedalSize),
    specWeights.pedalSize
  );
  const antiSpin = applyMaxValue(
    getAntiSpinScore(wheel.antiSpin),
    specWeights.antiSpin
  );
  const kickstand = applyMaxValue(
    getKickstandScore(wheel.kickstand),
    specWeights.kickstand
  );
  const leds = applyMaxValue(
    getLedsScore(wheel.leds),
    specWeights.leds
  );
  const sound = applyMaxValue(
    getSoundScore(wheel.sound),
    specWeights.sound
  );
  const display = applyMaxValue(
    getDisplayScore(wheel.display),
    specWeights.display
  );

  const rawScore = price +
    maxSpeed +
    range +
    weight +
    ratedPower +
    battery +
    stockCharger +
    maxCharger +
    chargePorts +
    usbPorts +
    maxGradibility +
    suspension +
    headlight +
    tailLight +
    trolleyHandle +
    pedals +
    pedalSize +
    antiSpin +
    kickstand +
    leds +
    sound +
    display;
  const score = Number(toDecimals(rawScore, 2));

  return {
    brandId: 0,
    price,

    diameter: 0,
    width: 0,
    maxSpeed,
    range,
    weight,
    
    hollowMotor: 0,
    ratedPower,
    peakPower: 0,

    battery,
    stockCharger,
    maxCharger,
    chargePorts,
    usbPorts,

    voltage: 0,
    maxGradibility,
    groundClearance: 0,
    suspension,

    headlight,
    tailLight,
    trolleyHandle,
    dimensions: 0,
    pedals,
    pedalSize,
    antiSpin,
    kickstand,
    leds,
    sound,
    display,
    color: 0,
    
    score
  };
};


export const isTopValue = (
  score: number,
  minMaxValue?: [number, number]
// eslint-disable-next-line max-params
): boolean => {
  const [, max] = minMaxValue ?? [];
  
  return max !== undefined && !!score && score >= max;
};
