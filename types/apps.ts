import { BrandId } from './brands';

export interface Platform {
  logo: string;
  url: string;
}

export interface IOSPlatform {
  iOS: Platform;
}

export interface AndroidPlatform {
  android: Platform;
}

export type UniversalPlatform = IOSPlatform & AndroidPlatform;

export type AvailablePlatforms = (keyof UniversalPlatform) | ''

export interface App {
  id: BrandId | string;
  name: string;
  url: string;
  platforms?: IOSPlatform | AndroidPlatform | UniversalPlatform;
}
