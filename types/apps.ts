import { BrandId } from './brands';

interface IOSPlatform {
  iOS: string;
}

interface AndroidPlatform {
  android: string;
}

type UniversalPlatform = IOSPlatform & AndroidPlatform;

export interface App {
  id: BrandId | string;
  name: string;
  url: string;
  platforms: IOSPlatform | AndroidPlatform | UniversalPlatform;
}