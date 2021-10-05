import { Brand, BrandId, Brands } from '../../types';

const begode: Brand = {
  id: BrandId.begode,
  name: 'Begode',
  logo: '',
  website: ''
};

const extremeBull: Brand = {
  id: BrandId.extremeBull,
  name: 'Extreme Bull/Begode',
  logo: '',
  website: ''
};

const inmotion: Brand = {
  id: BrandId.inmotion,
  name: 'Inmotion',
  logo: '',
  website: 'https://www.inmotionworld.com/'
};

const kingsong: Brand = {
  id: BrandId.kingsong,
  name: 'Kingsong',
  logo: '',
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
  logo: '',
  website: ''
};

export const brands: Brands = {
  [BrandId.begode]: begode,
  [BrandId.extremeBull]: extremeBull,
  [BrandId.inmotion]: inmotion,
  [BrandId.kingsong]: kingsong,
  // [BrandId.ninebot]: ninebot,
  // [BrandId.rockwheel]: rockwheel,
  [BrandId.veteran]: veteran
};