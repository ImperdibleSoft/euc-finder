export enum BrandId {
  beidou = 'beidou',
  begode = 'begode',
  extremeBull = 'extremeBull',
  inmotion = 'inmotion',
  kingsong = 'kingsong',
  veteran = 'veteran',
}

export interface Brand {
  id: BrandId
  name: string
  logo: string
  website: string,
  misc: {
    kmPerWh: number;
  }
}

export type Brands = Record<BrandId, Brand>