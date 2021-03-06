import { Brand, BrandId } from '../../../types';

// Reference from V12, which I've tested personally
const kmPerWh = 136 / 1750;

const begode: Brand = {
  id: BrandId.begode,
  name: 'Begode',
  logo: '/logos/manufacturers/begode.png',
  website: 'https://www.begode.com/',
  misc: {
    // Reference from Monster, commonly used among friends
    kmPerWh: kmPerWh * 0.75
  }
};

const extremeBull: Brand = {
  id: BrandId.extremeBull,
  name: 'Extreme Bull',
  logo: '/logos/manufacturers/extremeBull.png',
  website: '',
  misc: {
    // Begode controller
    kmPerWh: begode.misc.kmPerWh
  }
};

const beidou: Brand = {
  id: BrandId.beidou,
  name: 'BeiDou',
  logo: '',
  website: '',
  misc: {
    // Begode controller
    kmPerWh: begode.misc.kmPerWh
  }
};

const veteran: Brand = {
  id: BrandId.veteran,
  name: 'Veteran',
  logo: '/logos/manufacturers/veteran.png',
  website: 'https://www.leaperkim.com/',
  misc: {
    // Not tested yet
    kmPerWh: kmPerWh * 0.8
  }
};

const kingsong: Brand = {
  id: BrandId.kingsong,
  name: 'Kingsong',
  logo: '/logos/manufacturers/kingsong.png',
  website: 'https://www.kingsong.com/',
  misc: {
    // Reference from S18, which I've tested personally
    kmPerWh: kmPerWh * 0.825
  }
};

const inmotion: Brand = {
  id: BrandId.inmotion,
  name: 'Inmotion',
  logo: '/logos/manufacturers/inmotion.png',
  website: 'https://www.inmotionworld.com/',
  misc: {
    // Reference from V12, which I've tested personally
    kmPerWh: kmPerWh * 0.85
  }
};

export const brands: Brand[] = [
  beidou,
  begode,
  extremeBull,
  inmotion,
  kingsong,
  veteran
];
