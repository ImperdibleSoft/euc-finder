/* eslint-disable max-lines */
import { Store, StoreId } from '../../types';

export const stores: Store[] = [
  // EU
  {
    id: StoreId.myewheel,
    name: 'My EWheel',
    website: 'https://myewheel.com',
    region: 'eu',
    logo: '/logos/distributors/myewheel.png',
    color: '#34c1f0',
    meta: {
      code: 'ref=eucfinder',
      discount: 5,
      manualDiscount: true,
      public: true,
      sponsor: false
    }
  },
  {
    id: StoreId.ciclonic,
    name: 'Ciclonic',
    website: 'ciclonic.es',
    region: 'eu',
    logo: '/logos/distributors/ciclonic.png',
    color: '#0075ff',
    meta: {
      code: 'code=eucfinder',
      discount: 5,
      manualDiscount: true,
      public: false,
      sponsor: true
    }
  },
  {
    id: StoreId.urban360,
    name: 'Urban 360',
    website: 'https://store.urban360.es',
    region: 'eu',
    logo: '/logos/distributors/urban360.png',
    color: '#76c043',
    meta: {
      code: 'code=eucfinder22',
      discount: 5,
      manualDiscount: true,
      public: false,
      sponsor: false
    }
  },
  {
    id: StoreId.eucSale,
    name: 'EUC Sale',
    website: 'https://eucsale.com/',
    region: 'eu',
    logo: '/logos/distributors/eucSale.png',
    color: '#2c2929',
    meta: {
      code: '',
      discount: 0,
      manualDiscount: true,
      public: false,
      sponsor: false
    }
  },
  {
    id: StoreId.eucService,
    name: 'EUC Service',
    website: 'https://eucservice.com/',
    region: 'eu',
    logo: '/logos/distributors/eucService.png',
    color: '#009fe3',
    meta: {
      code: '',
      discount: 0,
      manualDiscount: true,
      public: false,
      sponsor: false
    }
  },
  // {
  //   id: StoreId.inmotionFrance,
  //   name: 'Inmotion France',
  //   website: 'https://www.inmotion-france.fr',
  //   region: 'eu',
  //   logo: '/logos/distributors/inmotionFrance.png',
  //   color: '#ee7203',
  //   meta: {
  //     code: '',
  //     discount: 0,
  //     manualDiscount: true,
  //     public: false,
  //     sponsor: false
  //   }
  // },
  // {
  //   id: StoreId.green220,
  //   name: 'Green 220',
  //   website: 'https://www.green220.com',
  //   region: 'eu',
  //   logo: '',
  //   color: '',
  //   meta: {
  //     code: '',
  //     discount: 0,
  //     manualDiscount: true,
  //     public: false,
  //     sponsor: false
  //   }
  // },
  // {
  //   id: StoreId.imoveblue,
  //   name: 'iMove Blue',
  //   website: 'https://www.imoveblue.es/',
  //   region: 'eu',
  //   logo: '',
  //   color: '',
  //   meta: {
  //     code: '',
  //     discount: 0,
  //     manualDiscount: true,
  //     public: false,
  //     sponsor: false
  //   }
  // },
  // {
  //   id: StoreId.eptv,
  //   name: 'EPTV',
  //   website: 'https://eptv.es',
  //   region: 'eu',
  //   logo: '',
  //   color: '',
  //   meta: {
  //     code: '',
  //     discount: 0,
  //     manualDiscount: true,
  //     public: false,
  //     sponsor: false
  //   }
  // },
  // {
  //   id: StoreId.madridrueda,
  //   name: 'Madrid Rueda',
  //   website: 'madridrueda.es',
  //   region: 'eu',
  //   logo: '',
  //   color: '',
  //   meta: {
  //     code: '',
  //     discount: 0,
  //     manualDiscount: true,
  //     public: false,
  //     sponsor: false
  //   }
  // },
  // {
  //   id: StoreId.rodandoEs,
  //   name: 'Rodando.es',
  //   website: 'https://rodando.es',
  //   region: 'eu',
  //   logo: '',
  //   color: '',
  //   meta: {
  //     code: '',
  //     discount: 0,
  //     manualDiscount: true,
  //     public: false,
  //     sponsor: false
  //   }
  // },
  // {
  //   id: StoreId.solorueda,
  //   name: 'Solo Rueda',
  //   website: 'https://solorueda.com',
  //   region: 'eu',
  //   logo: '',
  //   color: '',
  //   meta: {
  //     code: '',
  //     discount: 0,
  //     manualDiscount: true,
  //     public: false,
  //     sponsor: false
  //   }
  // },

  // US
  {
    id: StoreId.euco,
    name: 'EUCO',
    website: 'https://www.euco.us/',
    region: 'us',
    logo: '/logos/distributors/euco.png',
    color: '#01b7fd',
    meta: {
      code: 'ref=159',
      discount: 0,
      manualDiscount: false,
      public: true,
      sponsor: false
    }
  },
  {
    id: StoreId.ewheels,
    name: 'eWheels',
    website: 'https://www.ewheels.com/',
    region: 'us',
    logo: '/logos/distributors/ewheels.png',
    color: '#b73225',
    meta: {
      code: '',
      discount: 0,
      manualDiscount: true,
      public: false,
      sponsor: false
    }
  },
  {
    id: StoreId.alienRides,
    name: 'Alien Rides',
    website: 'https://alienrides.com/',
    region: 'us',
    logo: '/logos/distributors/alienRides.png',
    color: '#000000',
    meta: {
      code: '',
      discount: 0,
      manualDiscount: true,
      public: true,
      sponsor: false
    }
  },
  {
    id: StoreId.smartWheel,
    name: 'Smart Wheel',
    website: 'https://www.smartwheel.ca/',
    region: 'us',
    logo: '/logos/distributors/smartWheel.png',
    color: '#01c3b7',
    meta: {
      code: '',
      discount: 0,
      manualDiscount: true,
      public: false,
      sponsor: false
    }
  }
  // {
  //   id: StoreId.gpsmodus,
  //   name: 'GPS Modus',
  //   website: 'https://www.gpsmodus.com/',
  //   region: 'us',
  //   logo: '',
  //   color: '',
  //   meta: {
  //     code: '',
  //     discount: 0,
  //     manualDiscount: true,
  //     public: false,
  //     sponsor: false
  //   }
  // },
  // {
  //   id: StoreId.monociclosCom,
  //   name: 'Monociclos.com',
  //   website: 'https://tienda.monociclos.com',
  //   region: 'eu',
  //   logo: '',
  //   color: '',
  //   meta: {
  //     code: '',
  //     discount: 0,
  //     manualDiscount: true,
  //     public: false,
  //     sponsor: false
  //   }
  // },
];