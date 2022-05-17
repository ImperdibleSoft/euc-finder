import { Brand } from '../../types';
import { brands as availableBrands } from './data';
import fetchDataFromDB from './dataBaseApi';
import { createBrandsFromServer } from './modelCreators/brands';

const getAllBrands = async (): Promise<Brand[]> => {
  try {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const data = (await fetchDataFromDB('SELECT * FROM brands')) as any;
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
