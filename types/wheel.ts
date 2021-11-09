import { BrandId } from './brands';
import { AntiSpin, Color, Display, Kickstand, Lumens, SoundSystem, Suspension, TrolleyHandle } from './wheelFeatures';

export enum WheelId {
  // Begode / Gotway
  mten = 'mten',
  mcm5 = 'mcm5',
  tesla = 'tesla',
  nikola = 'nikola',
  rsHT = 'rsHT',
  rsHS = 'rsHS',
  msx = 'msx',
  msx100 = 'msx100',
  msp = 'msp',
  ex = 'ex',
  exnHT = 'exnHT',
  exnHS = 'exnHS',
  hero = 'hero',
  monster = 'monster',
  monsterPro = 'monsterPro',

  // Extreme bull
  commanderHT = 'commanderHT',
  commanderHS = 'commanderHS',
  
  // Kingsong
  ks14m = 'ks14m',
  ks14s = 'ks14s',
  ks14d = 'ks14d',
  ks16s = 'ks16s',
  ks16xs = 'ks16xs',
  ks16x = 'ks16x',
  ks18l = 'ks18l',
  ks18xl = 'ks18xl',
  ksS18 = 'ksS18',
  ksS20 = 'ksS20',

  // Inmotion
  v5 = 'v5',
  v5f = 'v5f',
  v8 = 'v8',
  v8f = 'v8f',
  v10 = 'v10',
  v10f = 'v10f',
  v11 = 'v11',
  v12 = 'v12',

  // Veteran
  sherman = 'sherman',
  abrams = 'abrams',
}

export interface WheelFeatures {
  /**
   * Price, in €
   */
  price: number

  /**
   * Rated nominal power, in W
   */
  ratedPower: number
  /**
   * Peak nominal power, in W
   */
  peakPower: number
  /**
   * Can go up ramps with this incline, in º
   */
  maxGradibility: number
  /**
   * Top speed, in km/h
   */
  maxSpeed: number
  /**
   * Battery capacity, in mAh
   */
  batterySetup: [number, number]
  /**
   * Battery output, in W/h
   */
  battery: number
  /**
   * Estimated mileage, in km
   */
  range: number
  /**
   * Charge output, in v
   */
  voltage: number

  /**
   * Wheel diameter, in inches
   */
  diameter: number
  /**
   * Wheel width, in inches
   */
  width: number


  /**
   * Ground clearance, in mm
   */
  groundClearance: number | number[]
  /**
   * Weight, in Kg
   */
  weight: number,
  /**
   * Trolley handle
   */
  trolleyHandle: undefined | TrolleyHandle
  /**
   * Anti-spin button
   */
  antiSpin: undefined | AntiSpin
  /**
   * Kickstand
   */
  kickstand: undefined | Kickstand
  /**
   * Integrated front lights, in Lumens
   */
  headlight: Lumens
  /**
   * Integrated taillight
   */
  tailLight: boolean
  /**
   * Color LEDs
   */
  leds: boolean
  /**
   * Sound system, in channels
   */
  sound: undefined | SoundSystem
  /**
   * Display
   */
  display: undefined | Display
  /**
   * Suspension system
   */
  suspension: undefined | Suspension
  /**
   * Wheel main color
   */
  color: undefined | Color | Color[]
}

export interface Wheel extends WheelFeatures {
  id: WheelId,
  brandId: BrandId,
  name: string
}