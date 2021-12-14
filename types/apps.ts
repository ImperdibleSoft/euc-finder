import { BrandId } from './brands';

interface IOSPlatform {
  iOS: {
    logo: string;
    url: string;
  };
}

interface AndroidPlatform {
  android: {
    logo: string;
    url: string;
  };
}

type UniversalPlatform = IOSPlatform & AndroidPlatform;

export type AvailablePlatforms = (keyof UniversalPlatform) | ''

export interface App {
  id: BrandId | string;
  name: string;
  url: string;
  platforms: IOSPlatform | AndroidPlatform | UniversalPlatform;
}