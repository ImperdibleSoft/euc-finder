import { WheelFeatures, WheelId } from './wheel';

export type Category = 'starter' | 'standard' | 'high-end' | 'extreme'

export type GroundClearance = number | number[]

export enum TrolleyHandle {
  scorpion = 'scorpion',
  telescopic = 'telescopic',
}
export type TrolleyHandleWeight = Record<TrolleyHandle, number>

export enum AntiSpin {
  position = 'position',
  button = 'button',
  sensor = 'sensor',
}
export type AntiSpinWeight = Record<AntiSpin, number>

export enum Kickstand {
  dedicated = 'dedicated',
  shell = 'shell',
}
export type KickstandWeight = Record<Kickstand, number>

export type Lumens = number | boolean

export enum SoundSystem {
  twoPointO = '2.0',
  twoPointOne = '2.1',
  forPointO = '4.0',
  fivePointOne = '5.1',
}
export type SoundSystemWeight = Record<SoundSystem, number>

export enum Display {
  lcd = 'lcd',
  led = 'led'
}
export type DisplayWeight = Record<Display, number>

export enum Suspension {
  standard = 'standard',
  custom = 'custom',
}
export type SuspensionWeight = Record<Suspension, number>

export enum Color {
  white = 'white',
  black = 'black'
}

interface IconKeys extends WheelFeatures {
  brandId: string
  name: string
}

export type WheelFeatureIcons = Record<keyof IconKeys | 'category', string>
export type WheelFeatureFormatters = Record<keyof WheelFeatures, Function>

export type WheelPictures = Record<WheelId, string[]>

export type WheelPurchaseLinks = Record<WheelId, string[]>