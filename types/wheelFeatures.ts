import { WheelFeatures, WheelId } from './wheel';

export type Availability = 'leaked' | 'announced' | 'preorder' | 'available' | 'discontinued';

export type Category = 'starter' | 'standard' | 'high-end' | 'extreme';

export enum Usb {
  usbC = 'usbC',
  usbA = 'usbA',
}

export type UsbWeight = Record<Usb, number>;

export type GroundClearance = number | number[];

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

export enum PedalType {
  plain = 'plain',
  honeycomb = 'honeycomb'
}
export type PedalTypeWeight = Record<PedalType, number>

export enum PedalSurface {
  metalic = 'metalic',
  rubber = 'rubber',
  partialGripTape = 'partialGripTape',
  fullGripTape = 'fullGripTape',
}
export type PedalSurfaceWeight = Record<PedalSurface, number>

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
  black = 'black',
  blackAndRed = 'blackAndRed',
  blackAndYellow = 'blackAndYellow',
  blackAndSilver = 'blackAndSilver',
}

interface IconKeys extends WheelFeatures {
  brandId: string;
  name: string;
  availability: string;
}

export type WheelFeatureIcons = Record<keyof IconKeys | 'category', string>;
export type WheelFeatureFormatters = Record<keyof WheelFeatures, Function>;

export type WheelPurchaseLinks = Record<WheelId, string[]>;
