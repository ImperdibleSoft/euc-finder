import { ConfigState } from '../../store/types';
import { config as availableConfig } from './data';
import fetchDataFromDB from './dataBaseApi';

const getConfig = async (): Promise<ConfigState> => {
  try {
    const data = await fetchDataFromDB('SELECT * FROM config');
    // eslint-disable-next-line no-console
    console.log('data', data);
  } catch (err) {
    console.error('error', err);
  }

  return availableConfig;
};

export const config = {
  /**
   * Return a complete list of available EUCs in the market
   */
  getConfig
};
