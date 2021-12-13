import { Brand, BrandId, Brands } from '../../../types';

const beidou: Brand = {
  id: BrandId.beidou,
  name: 'BeiDou',
  logo: '',
  website: ''
};

const begode: Brand = {
  id: BrandId.begode,
  name: 'Begode',
  logo: '/logos/manufacturers/begode.png',
  website: 'https://www.begode.com/'
};

const extremeBull: Brand = {
  id: BrandId.extremeBull,
  name: 'Extreme Bull',
  logo: '/logos/manufacturers/extremeBull.png',
  website: ''
};

const inmotion: Brand = {
  id: BrandId.inmotion,
  name: 'Inmotion',
  logo: '/logos/manufacturers/inmotion.png',
  website: 'https://www.inmotionworld.com/'
};

const kingsong: Brand = {
  id: BrandId.kingsong,
  name: 'Kingsong',
  logo: '/logos/manufacturers/kingsong.png',
  website: 'https://www.kingsong.com/'
};

// const ninebot: Brand = {
//   id: BrandId.ninebot,
//   name: 'Ninebot',
//   logo: '',
//   website: ''
// };

// const rockwheel: Brand = {
//   id: BrandId.rockwheel,
//   name: 'Rockwheel',
//   logo: '',
//   website: ''
// };

const veteran: Brand = {
  id: BrandId.veteran,
  name: 'Veteran',
  logo: '/logos/manufacturers/veteran.png',
  website: 'https://www.leaperkim.com/'
};

export const brands: Brands = {
  [BrandId.beidou]: beidou,
  [BrandId.begode]: begode,
  [BrandId.extremeBull]: extremeBull,
  [BrandId.inmotion]: inmotion,
  [BrandId.kingsong]: kingsong,
  // [BrandId.ninebot]: ninebot,
  // [BrandId.rockwheel]: rockwheel,
  [BrandId.veteran]: veteran
};