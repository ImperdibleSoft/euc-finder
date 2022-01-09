/* eslint-disable max-lines */
import {
  antiSpinWeight,
  displayWeight,
  kickstandWeight,
  pedalSurfaceWeight,
  pedalTypeWeight,
  soundSystemWeight,
  suspensionWeight,
  trolleyHandleWeight
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
import { toDecimals } from '../range';

const applyMaxValue = (value: number, maxValue = 10) => 
  Number(toDecimals((value / 10) * maxValue, 2));

export const isCompetingValue = (key: keyof WheelScore) =>
  key !== 'brandId' &&
  key !== 'color' &&
  key !== 'diameter' &&
  key !== 'groundClearance' &&
  key !== 'peakPower' &&
  key !== 'voltage' &&
  key !== 'width';

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
    specWeights.range / 4
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

  const score = Number(toDecimals(price + maxSpeed + range + weight + ratedPower + battery + maxGradibility +
    suspension + headlight + tailLight + trolleyHandle + pedals + antiSpin + kickstand + leds + sound + display, 2));

  return {
    brandId: 0,
    price,

    diameter: 0,
    width: 0,
    maxSpeed,
    range,
    weight,
    
    ratedPower,
    peakPower: 0,
    battery,
    voltage: 0,
    maxGradibility,
    groundClearance: 0,
    suspension,

    headlight,
    tailLight,
    trolleyHandle,
    pedals,
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