import { StoreCode, StoreDiscount, StoreId, Stores } from '../../types';

export const stores: Stores = {
  [StoreId.ciclonic]: {
    color: '#0075ff',
    id: StoreId.ciclonic,
    logo: '/logos/ciclonic.png',
    name: 'Ciclonic',
    region: 'eu',
    sponsor: true,
    website: 'ciclonic.es'
  },
  [StoreId.urban360]: {
    color: '#76c043',
    id: StoreId.urban360,
    logo: '/logos/urban360.png',
    name: 'Urban 360',
    region: 'eu',
    website: 'https://store.urban360.es'
  },
  [StoreId.inmotionFrance]: {
    color: '#ee7203',
    id: StoreId.inmotionFrance,
    logo: '/logos/inmotionFrance.png',
    name: 'Inmotion France',
    region: 'eu',
    website: 'https://www.inmotion-france.fr'
  },
  [StoreId.euco]: {
    color: '#01b7fd',
    id: StoreId.euco,
    logo: '/logos/euco.png',
    name: 'EUCO',
    region: 'us',
    website: 'https://www.euco.us/'
  },
  [StoreId.myewheel]: {
    color: '#34c1f0',
    id: StoreId.myewheel,
    logo: '/logos/myewheel.png',
    name: 'My EWheel',
    region: 'eu',
    website: 'https://myewheel.com'
  },
  [StoreId.ewheels]: {
    color: '#b73225',
    id: StoreId.ewheels,
    logo: '/logos/ewheels.png',
    name: 'eWheels',
    region: 'us',
    website: 'https://www.ewheels.com/'
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
  [StoreId.urban360]: 0,
  [StoreId.inmotionFrance]: 0,
  [StoreId.euco]: 0,
  [StoreId.myewheel]: 0,
  [StoreId.ewheels]: 0
  // [StoreId.madridrueda]: 0,
  // [StoreId.rodandoEs]: 0,
  // [StoreId.solorueda]: 0,
  // [StoreId.green220]: 0,
  // [StoreId.eptv]: 0,
  // [StoreId.monociclosCom]: 0,
  // [StoreId.gpsmodus]: 0,
  // [StoreId.imoveblue]: 0,
};

export const storeCode: StoreCode = {
  [StoreId.ciclonic]: 'code=EUCFinder',
  [StoreId.urban360]: '',
  [StoreId.inmotionFrance]: '',
  [StoreId.euco]: '',
  [StoreId.myewheel]: '',
  [StoreId.ewheels]: ''
  // [StoreId.madridrueda]: '',
  // [StoreId.rodandoEs]: '',
  // [StoreId.solorueda]: '',
  // [StoreId.green220]: '',
  // [StoreId.eptv]: '',
  // [StoreId.monociclosCom]: '',
  // [StoreId.gpsmodus]: '',
  // [StoreId.imoveblue]: '',
};