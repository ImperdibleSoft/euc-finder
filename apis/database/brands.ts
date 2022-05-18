import { Brand } from '../../types';
import { brands as availableBrands } from './data';
import fetchDataFromDB from './dataBaseApi';
import { createBrandsFromServer } from './modelCreators/brands';
import { BrandFromServer } from './types/brands';

const getAllBrands = async (): Promise<Brand[]> => {
  try {
    const data = (await fetchDataFromDB('SELECT id, name, logo, website, kmPerWh FROM brands')) as BrandFromServer[];
    const brands = createBrandsFromServer(data);
    return brands;
  } catch (err) {
    console.error('error', err);
  }

  return availableBrands;
};

export const brands = {
  /**
   * Return a complete list of available EUC manufacturers
   */
  getAllBrands
};
