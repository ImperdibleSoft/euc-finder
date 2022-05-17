import { Brand, BrandId } from '../../../types';
import { BrandFromServer } from '../types/brands';

// Reference from V12, which I've tested personally
const baseKmPerWh = 136 / 1750;

export const createBrandFromServer = ({
  id,
  name,
  logo,
  website,
  kmPerWh
}: BrandFromServer): Brand | undefined => {
  if (!id) {
    return undefined;
  }
  
  return ({
    id: id as BrandId,
    name: `${ name ?? id }`,
    logo: `${ logo }`,
    website: `${ website }`,
    misc: { kmPerWh: baseKmPerWh * Number(kmPerWh ?? 1) }
  });};

export const createBrandsFromServer = (brands: BrandFromServer[]): Brand[] => {
  if (!Array.isArray(brands)) {
    console.error('Invalid brands object');
    return [];
  }

  return brands.map(createBrandFromServer).filter(b => !!b) as Brand[];
};
