import { Store } from '../../types';
import { stores as availableDealers } from './data';

const getAllDealers = async (): Promise<Store[]> => availableDealers;

export const dealers = {
  /**
   * Return a complete list of available EUC dealers
   */
  getAllDealers
};