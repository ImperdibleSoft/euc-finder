import { Brand } from '../../types';
import { brands as availableBrands } from './data';

const getAllBrands = async (): Promise<Brand[]> => availableBrands;

export const brands = {
  /**
   * Return a complete list of available EUC manufacturers
   */
  getAllBrands
};