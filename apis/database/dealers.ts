import { Store } from '../../types';
import { stores as availableDealers } from './data';
import fetchDataFromDB from './dataBaseApi';
import { createDealersFromServer } from './modelCreators/dealers';
import { DealerFromServer } from './types/dealers';

const getAllDealers = async (): Promise<Store[]> => {
  try {
    const query = 'SELECT code, color, discount, id, logo, manualDiscount, name, region, sponsor, website FROM dealers';
    const data = (await fetchDataFromDB(query)) as DealerFromServer[];
    const dealers = createDealersFromServer(data);
    return dealers;
  } catch (err) {
    console.error('error', err);
  }

  return availableDealers;
};

export const dealers = {
  /**
   * Return a complete list of available EUC dealers
   */
  getAllDealers
};
