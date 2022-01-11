import { Brand, BrandId } from '../types';

export const getBrandInfo = (brandId: BrandId, brands: Brand[]) =>
  brands.find(b => b.id === brandId);