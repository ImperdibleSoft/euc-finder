import { Brand, BrandId, Brands } from '../../../types';

const begode: Brand = {
  id: BrandId.begode,
  name: 'Begode',
  logo: '/logos/manufacturers/begode.png',
  website: 'https://www.begode.com/',
  misc: { batteryManagement: 0.75 }
};

const extremeBull: Brand = {
  id: BrandId.extremeBull,
  name: 'Extreme Bull',
  logo: '/logos/manufacturers/extremeBull.png',
  website: '',
  misc: { batteryManagement: begode.misc.batteryManagement }
};

const beidou: Brand = {
  id: BrandId.beidou,
  name: 'BeiDou',
  logo: '',
  website: '',
  misc: { batteryManagement: begode.misc.batteryManagement }
};

const veteran: Brand = {
  id: BrandId.veteran,
  name: 'Veteran',
  logo: '/logos/manufacturers/veteran.png',
  website: 'https://www.leaperkim.com/',
  misc: { batteryManagement: 0.8 }
};

const kingsong: Brand = {
  id: BrandId.kingsong,
  name: 'Kingsong',
  logo: '/logos/manufacturers/kingsong.png',
  website: 'https://www.kingsong.com/',
  misc: { batteryManagement: 0.9 }
};

const inmotion: Brand = {
  id: BrandId.inmotion,
  name: 'Inmotion',
  logo: '/logos/manufacturers/inmotion.png',
  website: 'https://www.inmotionworld.com/',
  misc: { batteryManagement: 1 }
};

export const brands: Brands = {
  [BrandId.beidou]: beidou,
  [BrandId.begode]: begode,
  [BrandId.extremeBull]: extremeBull,
  [BrandId.inmotion]: inmotion,
  [BrandId.kingsong]: kingsong,
  [BrandId.veteran]: veteran
};