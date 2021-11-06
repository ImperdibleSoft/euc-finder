export type Region = 'us' | 'eu' | 'asia'

export enum StoreId {
  ciclonic = 'ciclonic',
  urban360 = 'urban360',
  inmotionFrance = 'inmotionFrance',
  euco = 'euco',
  myewheel = 'myewheel',
  ewheels = 'ewheels',
  madridrueda = 'madridrueda',
  rodandoEs = 'rodando.es',
  solorueda = 'solorueda',
  green220 = 'green220',
  eptv = 'eptv',
  monociclosCom = 'monociclos.com',
  gpsmodus = 'gpsmodus',
  imoveblue = 'imoveblue',
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
    public?: boolean;
    sponsor?: boolean;
  }
}
