export enum BrandId {
  beidou = 'beidou',
  begode = 'begode',
  extremeBull = 'extremeBull',
  inmotion = 'inmotion',
  kingsong = 'kingsong',
  // ninebot = 'ninebot',
  // rockwheel = 'rockwheel',
  veteran = 'veteran',
}

export interface Brand {
  id: BrandId
  name: string
  logo: string
  website: string
}

export type Brands = Record<BrandId, Brand>