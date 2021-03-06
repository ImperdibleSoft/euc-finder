export type Region = 'us' | 'eu' | 'asia'

export enum StoreId {
  // EU
  myewheel = 'myewheel',
  ciclonic = 'ciclonic',
  urban360 = 'urban360',
  eucSale = 'eucsale',
  eucService = 'eucservice',
  eRides = 'eRides',
  oneRide = 'oneRide',
  // inmotionFrance = 'inmotionFrance',
  // green220 = 'green220',
  // imoveblue = 'imoveblue',
  // eptv = 'eptv',
  madridrueda = 'madridrueda',
  // rodandoEs = 'rodando.es',
  // solorueda = 'solorueda',

  // US
  euco = 'euco',
  ewheels = 'ewheels',
  revRides = 'revRides',
  alienRides = 'alienRides',
  smartWheel = 'smartWheel',
  eevees = 'eevees',
  // freeMotionShop = 'freeMotionShop',
  // monociclosCom = 'monociclos.com',
} 

export interface Store {
  id: StoreId;
  name: string;
  region: Region;
  website: string;
  color: string;
  logo: string;
  meta: {
    code?: string;
    discount?: number;
    manualDiscount?: boolean
    sponsor?: boolean;
  }
}
