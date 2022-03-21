/* eslint-disable max-lines */
import { SpecWeights } from '../../store/types';
import { MinMaxScores, MinMaxValues, ScoreCollection, Wheel, WheelId } from '../../types';
import {
  getAntiSpinScore,
  getBooleanScore,
  getDisplayScore,
  getKickstandScore,
  getLedsScore,
  getPedalSizeScore,
  getPedalsScore,
  getSoundScore,
  getSuspensionScore,
  getTrolleyHandleScore,
  getUsbPortsScore,
  getWheelScore
} from './wheelScore';

// eslint-disable-next-line max-lines-per-function
export const getAbsoluteMinMaxValues = (wheels: Wheel[]): MinMaxValues => {
  const minMaxValues: MinMaxValues = {
    price: [0, 0],
  
    diameter: [0, 0],
    width: [0, 0],
    maxSpeed: [0, 0],
    range: [0, 0],
    weight: [0, 0],

    hollowMotor: [0, 0],
    ratedPower: [0, 0],
    peakPower: [0, 0],

    battery: [0, 0],
    stockCharger: [0, 0],
    maxCharger: [0, 0],
    chargePorts: [0, 0],
    usbPorts: [0, 0],
    
    voltage: [0, 0],
    maxGradibility: [0, 0],
    groundClearance: [0, 0],
    suspension: [0, 0],

    headlight: [0, 0],
    tailLight: [0, 0],
    trolleyHandle: [0, 0],
    dimensions: [0, 0],
    pedals: [0, 0],
    pedalSize: [0, 0],
    antiSpin: [0, 0],
    kickstand: [0, 0],
    leds: [0, 0],
    sound: [0, 0],
    display: [0, 0],
    color: [0, 0]
  };

  // eslint-disable-next-line max-lines-per-function
  wheels.forEach(wheel => {
    if (!minMaxValues.price[0] || (wheel.price && wheel.price < minMaxValues.price[0])) {
      minMaxValues.price = [wheel.price, minMaxValues.price[1]];
    }
    if (!minMaxValues.price[1] || (wheel.price && wheel.price > minMaxValues.price[1])) {
      minMaxValues.price = [minMaxValues.price[0], wheel.price];
    }

    if (!minMaxValues.maxSpeed[1] || (wheel.maxSpeed && wheel.maxSpeed > minMaxValues.maxSpeed[1])) {
      minMaxValues.maxSpeed = [minMaxValues.maxSpeed[0], wheel.maxSpeed];
    }
    
    if (!minMaxValues.range[1] || (wheel.range && wheel.range > minMaxValues.range[1])) {
      minMaxValues.range = [minMaxValues.range[0], wheel.range];
    }

    if (!minMaxValues.weight[0] || (wheel.weight && wheel.weight < minMaxValues.weight[0])) {
      minMaxValues.weight = [wheel.weight, minMaxValues.weight[1]];
    }
    if (!minMaxValues.weight[1] || (wheel.weight && wheel.weight > minMaxValues.weight[1])) {
      minMaxValues.weight = [minMaxValues.weight[0], wheel.weight];
    }

    
    if (!minMaxValues.ratedPower[1] || (wheel.ratedPower && wheel.ratedPower > minMaxValues.ratedPower[1])) {
      minMaxValues.ratedPower = [minMaxValues.ratedPower[0], wheel.ratedPower];
    }
    
    if (!minMaxValues.peakPower[1] || (wheel.peakPower && wheel.peakPower > minMaxValues.peakPower[1])) {
      minMaxValues.peakPower = [minMaxValues.peakPower[0], wheel.peakPower];
    }
    
    if (!minMaxValues.battery[1] || (wheel.battery && wheel.battery.wattsHour > minMaxValues.battery[1])) {
      minMaxValues.battery = [minMaxValues.battery[0], wheel.battery.wattsHour];
    }
    if (!minMaxValues.stockCharger[1] || (wheel.stockCharger && wheel.stockCharger > minMaxValues.stockCharger[1])) {
      minMaxValues.stockCharger = [minMaxValues.stockCharger[0], wheel.stockCharger];
    }
    if (!minMaxValues.maxCharger[1] || (wheel.maxCharger && wheel.maxCharger > minMaxValues.maxCharger[1])) {
      minMaxValues.maxCharger = [minMaxValues.maxCharger[0], wheel.maxCharger];
    }
    if (!minMaxValues.chargePorts[1] || (wheel.chargePorts && wheel.chargePorts > minMaxValues.chargePorts[1])) {
      minMaxValues.chargePorts = [minMaxValues.chargePorts[0], wheel.chargePorts];
    }

    const usbPortsScore = getUsbPortsScore(wheel.usbPorts ?? [0, 0]);
    if (!minMaxValues.usbPorts[1] || (usbPortsScore && usbPortsScore > minMaxValues.usbPorts[1])) {
      minMaxValues.usbPorts = [minMaxValues.usbPorts[0], usbPortsScore];
    }
    
    if (
      !minMaxValues.maxGradibility[1] ||
    (wheel.maxGradibility && wheel.maxGradibility > minMaxValues.maxGradibility[1])
    ) {
      minMaxValues.maxGradibility = [minMaxValues.maxGradibility[0], wheel.maxGradibility];
    }

    const suspensionScore = getSuspensionScore(wheel.suspension);
    if (!minMaxValues.suspension[1] || suspensionScore > minMaxValues.suspension[1]) {
      minMaxValues.suspension = [minMaxValues.suspension[0], suspensionScore];
    }

    const headlightVal = typeof wheel.headlight === 'number' ? wheel.headlight : (wheel.headlight ? 1 : 0);
    if (!minMaxValues.headlight[0] || (wheel.headlight && headlightVal < minMaxValues.headlight[0])) {
      minMaxValues.headlight = [headlightVal, minMaxValues.headlight[1]];
    }
    if (!minMaxValues.headlight[1] || (wheel.headlight && headlightVal > minMaxValues.headlight[1])) {
      minMaxValues.headlight = [minMaxValues.headlight[0], headlightVal];
    }

    const taillightScore = getBooleanScore(wheel.tailLight);
    if (!minMaxValues.tailLight[0] || taillightScore < minMaxValues.tailLight[0]) {
      minMaxValues.tailLight = [taillightScore, minMaxValues.tailLight[1]];
    }
    if (!minMaxValues.tailLight[1] || taillightScore > minMaxValues.tailLight[1]) {
      minMaxValues.tailLight = [minMaxValues.tailLight[0], taillightScore];
    }

    const trolleyScore = getTrolleyHandleScore(wheel.trolleyHandle);
    if (!minMaxValues.trolleyHandle[0] || trolleyScore < minMaxValues.trolleyHandle[0]) {
      minMaxValues.trolleyHandle = [trolleyScore, minMaxValues.trolleyHandle[1]];
    }
    if (!minMaxValues.trolleyHandle[1] || trolleyScore > minMaxValues.trolleyHandle[1]) {
      minMaxValues.trolleyHandle = [minMaxValues.trolleyHandle[0], trolleyScore];
    }

    const pedalScore = getPedalsScore(wheel.pedals);
    if (!minMaxValues.pedals[0] || pedalScore < minMaxValues.pedals[0]) {
      minMaxValues.pedals = [pedalScore, minMaxValues.pedals[1]];
    }
    if (!minMaxValues.pedals[1] || pedalScore > minMaxValues.pedals[1]) {
      minMaxValues.pedals = [minMaxValues.pedals[0], pedalScore];
    }

    const pedalSizeScore = getPedalSizeScore(wheel.pedalSize);
    if (!minMaxValues.pedalSize[0] || pedalSizeScore < minMaxValues.pedalSize[0]) {
      minMaxValues.pedalSize = [pedalSizeScore, minMaxValues.pedalSize[1]];
    }
    if (!minMaxValues.pedalSize[1] || pedalSizeScore > minMaxValues.pedalSize[1]) {
      minMaxValues.pedalSize = [minMaxValues.pedalSize[0], pedalSizeScore];
    }

    const antiSpinScore = getAntiSpinScore(wheel.antiSpin);
    if (!minMaxValues.antiSpin[0] || antiSpinScore < minMaxValues.antiSpin[0]) {
      minMaxValues.antiSpin = [antiSpinScore, minMaxValues.antiSpin[1]];
    }
    if (!minMaxValues.antiSpin[1] || antiSpinScore > minMaxValues.antiSpin[1]) {
      minMaxValues.antiSpin = [minMaxValues.antiSpin[0], antiSpinScore];
    }

    const kickstandScore = getKickstandScore(wheel.kickstand);
    if (!minMaxValues.kickstand[0] || kickstandScore < minMaxValues.kickstand[0]) {
      minMaxValues.kickstand = [kickstandScore, minMaxValues.kickstand[1]];
    }
    if (!minMaxValues.kickstand[1] || kickstandScore > minMaxValues.kickstand[1]) {
      minMaxValues.kickstand = [minMaxValues.kickstand[0], kickstandScore];
    }

    const ledsScore = getLedsScore(wheel.leds);
    if (!minMaxValues.leds[0] || ledsScore < minMaxValues.leds[0]) {
      minMaxValues.leds = [ledsScore, minMaxValues.leds[1]];
    }
    if (!minMaxValues.leds[1] || ledsScore > minMaxValues.leds[1]) {
      minMaxValues.leds = [minMaxValues.leds[0], ledsScore];
    }

    const soundScore = getSoundScore(wheel.sound);
    if (!minMaxValues.sound[0] || soundScore < minMaxValues.sound[0]) {
      minMaxValues.sound = [soundScore, minMaxValues.sound[1]];
    }
    if (!minMaxValues.sound[1] || soundScore > minMaxValues.sound[1]) {
      minMaxValues.sound = [minMaxValues.sound[0], soundScore];
    }

    const displayScore = getDisplayScore(wheel.display);
    if (!minMaxValues.display[0] || displayScore < minMaxValues.display[0]) {
      minMaxValues.display = [displayScore, minMaxValues.display[1]];
    }
    if (!minMaxValues.display[1] || displayScore > minMaxValues.display[1]) {
      minMaxValues.display = [minMaxValues.display[0], displayScore];
    }
  });

  return minMaxValues;
};

export const getAbsoluteWheelsScores = (
  wheels: Wheel[],
  minMaxValues: MinMaxValues,
  specWeights: SpecWeights
): ScoreCollection => wheels.reduce(
  (scoreCollection, wheel) => {
    if (!scoreCollection[wheel.id]) {
      scoreCollection[wheel.id] = getWheelScore(wheel, minMaxValues, specWeights);
    }
      
    return scoreCollection;
  },
  {} as ScoreCollection
);

// eslint-disable-next-line max-lines-per-function
export const getRelativeMinMaxScores = (
  scores: ScoreCollection,
  wheels: WheelId[] = []
): MinMaxScores => {
  const minMaxScores: MinMaxScores = {
    price: [0, 0],
  
    diameter: [0, 0],
    width: [0, 0],
    maxSpeed: [0, 0],
    range: [0, 0],
    weight: [0, 0],

    hollowMotor: [0, 0],
    ratedPower: [0, 0],
    peakPower: [0, 0],

    battery: [0, 0],
    stockCharger: [0, 0],
    maxCharger: [0, 0],
    chargePorts: [0, 0],
    usbPorts: [0, 0],
    
    voltage: [0, 0],
    maxGradibility: [0, 0],
    groundClearance: [0, 0],
    suspension: [0, 0],

    headlight: [0, 0],
    tailLight: [0, 0],
    trolleyHandle: [0, 0],
    dimensions: [0, 0],
    pedals: [0, 0],
    pedalSize: [0, 0],
    antiSpin: [0, 0],
    kickstand: [0, 0],
    leds: [0, 0],
    sound: [0, 0],
    display: [0, 0],
    color: [0, 0],

    score: [0, 0]
  };

  // eslint-disable-next-line max-lines-per-function
  wheels.forEach(wheelId => {
    const wheelScore = scores[wheelId];

    if (!minMaxScores.price[0] || (wheelScore.price && wheelScore.price < minMaxScores.price[0])) {
      minMaxScores.price = [wheelScore.price, minMaxScores.price[1]];
    }
    if (!minMaxScores.price[1] || (wheelScore.price && wheelScore.price > minMaxScores.price[1])) {
      minMaxScores.price = [minMaxScores.price[0], wheelScore.price];
    }

    if (!minMaxScores.maxSpeed[1] || wheelScore.maxSpeed > minMaxScores.maxSpeed[1]) {
      minMaxScores.maxSpeed = [minMaxScores.maxSpeed[0], wheelScore.maxSpeed];
    }
    
    if (!minMaxScores.range[1] || wheelScore.range > minMaxScores.range[1]) {
      minMaxScores.range = [minMaxScores.range[0], wheelScore.range];
    }

    if (!minMaxScores.weight[0] || wheelScore.weight < minMaxScores.weight[0]) {
      minMaxScores.weight = [wheelScore.weight, minMaxScores.weight[1]];
    }
    if (!minMaxScores.weight[1] || wheelScore.weight > minMaxScores.weight[1]) {
      minMaxScores.weight = [minMaxScores.weight[0], wheelScore.weight];
    }
  
    if (!minMaxScores.ratedPower[1] || wheelScore.ratedPower > minMaxScores.ratedPower[1]) {
      minMaxScores.ratedPower = [minMaxScores.ratedPower[0], wheelScore.ratedPower];
    }
    
    if (!minMaxScores.peakPower[1] || wheelScore.peakPower > minMaxScores.peakPower[1]) {
      minMaxScores.peakPower = [minMaxScores.peakPower[0], wheelScore.peakPower];
    }
    
    if (!minMaxScores.battery[1] || wheelScore.battery > minMaxScores.battery[1]) {
      minMaxScores.battery = [minMaxScores.battery[0], wheelScore.battery];
    }
    
    if (!minMaxScores.stockCharger[1] || wheelScore.stockCharger > minMaxScores.stockCharger[1]) {
      minMaxScores.stockCharger = [minMaxScores.stockCharger[0], wheelScore.stockCharger];
    }
    
    if (!minMaxScores.maxCharger[1] || wheelScore.maxCharger > minMaxScores.maxCharger[1]) {
      minMaxScores.maxCharger = [minMaxScores.maxCharger[0], wheelScore.maxCharger];
    }
    
    if (!minMaxScores.chargePorts[1] || wheelScore.chargePorts > minMaxScores.chargePorts[1]) {
      minMaxScores.chargePorts = [minMaxScores.chargePorts[0], wheelScore.chargePorts];
    }
    
    if (!minMaxScores.usbPorts[1] || wheelScore.usbPorts > minMaxScores.usbPorts[1]) {
      minMaxScores.usbPorts = [minMaxScores.usbPorts[0], wheelScore.usbPorts];
    }
    
    if (!minMaxScores.maxGradibility[1] || wheelScore.maxGradibility > minMaxScores.maxGradibility[1]) {
      minMaxScores.maxGradibility = [minMaxScores.maxGradibility[0], wheelScore.maxGradibility];
    }

    if (!minMaxScores.suspension[1] || wheelScore.suspension > minMaxScores.suspension[1]) {
      minMaxScores.suspension = [minMaxScores.suspension[0], wheelScore.suspension];
    }

    const headlightVal = typeof wheelScore.headlight === 'number'
      ? wheelScore.headlight
      : (wheelScore.headlight ? 1 : 0);
    if (!minMaxScores.headlight[0] || headlightVal < minMaxScores.headlight[0]) {
      minMaxScores.headlight = [headlightVal, minMaxScores.headlight[1]];
    }
    if (!minMaxScores.headlight[1] || headlightVal > minMaxScores.headlight[1]) {
      minMaxScores.headlight = [minMaxScores.headlight[0], headlightVal];
    }

    if (!minMaxScores.tailLight[0] || wheelScore.tailLight < minMaxScores.tailLight[0]) {
      minMaxScores.tailLight = [wheelScore.tailLight, minMaxScores.tailLight[1]];
    }
    if (!minMaxScores.tailLight[1] || wheelScore.tailLight > minMaxScores.tailLight[1]) {
      minMaxScores.tailLight = [minMaxScores.tailLight[0], wheelScore.tailLight];
    }

    if (!minMaxScores.trolleyHandle[0] || wheelScore.trolleyHandle < minMaxScores.trolleyHandle[0]) {
      minMaxScores.trolleyHandle = [wheelScore.trolleyHandle, minMaxScores.trolleyHandle[1]];
    }
    if (!minMaxScores.trolleyHandle[1] || wheelScore.trolleyHandle > minMaxScores.trolleyHandle[1]) {
      minMaxScores.trolleyHandle = [minMaxScores.trolleyHandle[0], wheelScore.trolleyHandle];
    }

    if (!minMaxScores.pedals[0] || wheelScore.pedals < minMaxScores.pedals[0]) {
      minMaxScores.pedals = [wheelScore.pedals, minMaxScores.pedals[1]];
    }
    if (!minMaxScores.pedals[1] || wheelScore.pedals > minMaxScores.pedals[1]) {
      minMaxScores.pedals = [minMaxScores.pedals[0], wheelScore.pedals];
    }

    if (!minMaxScores.pedalSize[0] || wheelScore.pedalSize < minMaxScores.pedalSize[0]) {
      minMaxScores.pedalSize = [wheelScore.pedalSize, minMaxScores.pedalSize[1]];
    }
    if (!minMaxScores.pedalSize[1] || wheelScore.pedalSize > minMaxScores.pedalSize[1]) {
      minMaxScores.pedalSize = [minMaxScores.pedalSize[0], wheelScore.pedalSize];
    }

    if (!minMaxScores.antiSpin[0] || wheelScore.antiSpin < minMaxScores.antiSpin[0]) {
      minMaxScores.antiSpin = [wheelScore.antiSpin, minMaxScores.antiSpin[1]];
    }
    if (!minMaxScores.antiSpin[1] || wheelScore.antiSpin > minMaxScores.antiSpin[1]) {
      minMaxScores.antiSpin = [minMaxScores.antiSpin[0], wheelScore.antiSpin];
    }

    if (!minMaxScores.kickstand[0] || wheelScore.kickstand < minMaxScores.kickstand[0]) {
      minMaxScores.kickstand = [wheelScore.kickstand, minMaxScores.kickstand[1]];
    }
    if (!minMaxScores.kickstand[1] || wheelScore.kickstand > minMaxScores.kickstand[1]) {
      minMaxScores.kickstand = [minMaxScores.kickstand[0], wheelScore.kickstand];
    }

    if (!minMaxScores.leds[0] || wheelScore.leds < minMaxScores.leds[0]) {
      minMaxScores.leds = [wheelScore.leds, minMaxScores.leds[1]];
    }
    if (!minMaxScores.leds[1] || wheelScore.leds > minMaxScores.leds[1]) {
      minMaxScores.leds = [minMaxScores.leds[0], wheelScore.leds];
    }

    if (!minMaxScores.sound[0] || wheelScore.sound < minMaxScores.sound[0]) {
      minMaxScores.sound = [wheelScore.sound, minMaxScores.sound[1]];
    }
    if (!minMaxScores.sound[1] || wheelScore.sound > minMaxScores.sound[1]) {
      minMaxScores.sound = [minMaxScores.sound[0], wheelScore.sound];
    }

    if (!minMaxScores.display[0] || wheelScore.display < minMaxScores.display[0]) {
      minMaxScores.display = [wheelScore.display, minMaxScores.display[1]];
    }
    if (!minMaxScores.display[1] || wheelScore.display > minMaxScores.display[1]) {
      minMaxScores.display = [minMaxScores.display[0], wheelScore.display];
    }

    if (!minMaxScores.score[0] || wheelScore.score < minMaxScores.score[0]) {
      minMaxScores.score = [wheelScore.score, minMaxScores.score[1]];
    }
    if (!minMaxScores.score[1] || wheelScore.score > minMaxScores.score[1]) {
      minMaxScores.score = [minMaxScores.score[0], wheelScore.score];
    }
  });

  return minMaxScores;
};
