import { StoreCode, StoreDiscount, StoreId, Stores } from '../../types';

export const stores: Stores = {
  [StoreId.ciclonic]: {
    color: '#0075ff',
    id: StoreId.ciclonic,
    name: 'Ciclonic',
    region: 'eu',
    sponsor: true,
    website: 'ciclonic.es'
  },
  [StoreId.urban360]: {
    color: '#76c043',
    id: StoreId.urban360,
    name: 'Urban 360',
    region: 'eu',
    website: 'https://store.urban360.es'
  },
  [StoreId.inmotionFrance]: {
    color: '#ee7203',
    id: StoreId.inmotionFrance,
    name: 'Inmotion France',
    region: 'eu',
    website: 'https://www.inmotion-france.fr'
  },
  [StoreId.euco]: {
    color: '#01b7fd',
    id: StoreId.euco,
    name: 'EUCO',
    region: 'us',
    website: 'https://www.euco.us/'
  },
  [StoreId.myewheel]: {
    color: '#34c1f0',
    id: StoreId.myewheel,
    name: 'My EWheel',
    region: 'eu',
    website: 'https://www.euco.us/'
  }
  // [StoreId.madridrueda]: {
  //   color: '',
  //   id: StoreId.madridrueda,
  //   name: 'Madrid Rueda',
  //   region: 'eu',
  //   website: 'madridrueda.es'
  // },
  // [StoreId.rodandoEs]: {
  //   color: '',
  //   id: StoreId.rodandoEs,
  //   name: 'Rodando.es',
  //   region: 'eu',
  //   website: 'https://rodando.es'
  // },
  // [StoreId.solorueda]: {
  //   color: '',
  //   id: StoreId.solorueda,
  //   name: 'Solo Rueda',
  //   region: 'eu',
  //   website: 'https://solorueda.com'
  // },
  // [StoreId.green220]: {
  //   color: '',
  //   id: StoreId.green220,
  //   name: 'Green 220',
  //   region: 'eu',
  //   website: 'https://www.green220.com'
  // },
  // [StoreId.eptv]: {
  //   color: '',
  //   id: StoreId.eptv,
  //   name: 'EPTV',
  //   region: 'eu',
  //   website: 'https://eptv.es'
  // },
  // [StoreId.monociclosCom]: {
  //   color: '',
  //   id: StoreId.monociclosCom,
  //   name: 'Monociclos.com',
  //   region: 'eu',
  //   website: 'https://tienda.monociclos.com'
  // },
  // [StoreId.gpsmodus]: {
  //   color: '',
  //   id: StoreId.gpsmodus,
  //   name: 'GPS Modus',
  //   region: 'us',
  //   website: 'https://www.gpsmodus.com/'
  // },
  // [StoreId.imoveblue]: {
  //   color: '',
  //   id: StoreId.imoveblue,
  //   name: 'iMove Blue',
  //   region: 'eu',
  //   website: 'https://www.imoveblue.es/'
  // },
};

export const storeDiscounts: StoreDiscount = {
  [StoreId.ciclonic]: 5,
  urban360: 0,
  inmotionFrance: 0,
  euco: 0,
  myewheel: 0
  // madridrueda: 0,
  // rodandoEs: 0,
  // solorueda: 0,
  // green220: 0,
  // eptv: 0,
  // monociclosCom: 0,
  // gpsmodus: 0,
  // imoveblue: 0,
};

export const storeCode: StoreCode = {
  [StoreId.ciclonic]: 'code=EUCFinder',
  urban360: '',
  inmotionFrance: '',
  euco: '',
  myewheel: ''
  // madridrueda: '',
  // rodandoEs: '',
  // solorueda: '',
  // green220: '',
  // eptv: '',
  // monociclosCom: '',
  // gpsmodus: '',
  // imoveblue: '',
};