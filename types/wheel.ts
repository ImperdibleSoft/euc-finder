import { BrandId } from './brands';
import {
  AntiSpin,
  Availability,
  Color,
  Display,
  Kickstand,
  Lumens,
  PedalSurface,
  PedalType,
  SoundSystem,
  Suspension,
  TrolleyHandle
} from './wheelFeatures';

export enum WheelId {
  // Begode / Gotway
  mten = 'mten',
  mcm5 = 'mcm5',
  tesla = 'tesla',
  nikola = 'nikola',
  msx = 'msx',
  msx100 = 'msx100',
  msp = 'msp',
  rsHT = 'rsHT',
  rsHS = 'rsHS',
  ex = 'ex',
  exnHT = 'exnHT',
  exnHS = 'exnHS',
  hero = 'hero',
  ex2 = 'ex2',
  master = 'master',
  monster = 'monster',
  monsterPro = 'monsterPro',

  // BeiDou
  recioWheel16 = 'recioWheel16',
  recioWheel18 = 'recioWheel18',

  // Extreme bull
  commanderHT = 'commanderHT',
  commanderHS = 'commanderHS',
  xmenHT = 'xmenHT',
  xmenHS = 'xmenHS',

  // Inmotion
  v5 = 'v5',
  v5f = 'v5f',
  v8 = 'v8',
  v8f = 'v8f',
  v10 = 'v10',
  v10f = 'v10f',
  v11 = 'v11',
  v12 = 'v12',
  v12HT = 'v12HT',
  v13 = 'v13',
  
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

  // Veteran
  sherman = 'sherman',
  abrams = 'abrams',
  shermanMax = 'shermanMax',
}

export interface Battery {
  /**
   * Battery capacity, in mAh
   */
  capacity: number;
  /**
   * Number of simultaneous parallels
   */
  parallels: number;
  /**
   * Battery brand and model
   */
  type: string;
  /**
   * Battery output, in W/h
   */
  wattsHour: number;
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
   * Battery information
   */
  battery: Battery
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
   * Wheel dimensions front-faced [height, width, deep]
   */
  dimensions: [number, number, number],
  /**
   * Pedals [type, surface, retentionpins]
   */
  pedals: [PedalType | undefined, PedalSurface | undefined, boolean | undefined]
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
  id: WheelId;
  brandId: BrandId;
  name: string;
  availability: Availability;
}

export interface WheelWithPicture extends Wheel {
  picture: string;
}
