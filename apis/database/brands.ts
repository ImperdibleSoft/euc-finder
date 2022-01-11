import { Brands } from '../../types';
import { brands as availableBrands } from './data';

const getAllBrands = async (): Promise<Brands> => availableBrands;

export const brands = {
  /**
   * Return a complete list of available EUC manufacturers
   */
  getAllBrands
};