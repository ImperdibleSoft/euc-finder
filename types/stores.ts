export type Region = 'us' | 'eu' | 'asia'

export enum StoreId {
  ciclonic = 'ciclonic',
  // madridrueda = 'madridrueda',
  urban360 = 'urban360',
  // rodandoEs = 'rodando.es',
  // solorueda = 'solorueda',
  // green220 = 'green220',
  // eptv = 'eptv',
  // monociclosCom = 'monociclos.com',
  inmotionFrance = 'inmotionFrance',
  // gpsmodus = 'gpsmodus',
  // imoveblue = 'imoveblue',
  euco = 'euco'
} 

export interface Store {
  id: StoreId,
  name: string
  region: Region
  website: string
  color: string
  sponsor?: boolean
}

export type Stores = Record<StoreId, Store>

export type StoreDiscount = Record<StoreId, number>

export type StoreCode = Record<StoreId, string>