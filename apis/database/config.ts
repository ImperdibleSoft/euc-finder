import { ConfigState } from '../../store/types';
import { config as availableConfig } from './data';
import fetchDataFromDB from './dataBaseApi';
import { createConfigFromDatabase } from './modelCreators/config';

const getConfig = async (): Promise<ConfigState> => {
  try {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const data = (await fetchDataFromDB('SELECT * FROM config')) as any;
    const config = createConfigFromDatabase(data?.[0]);
    return config;
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
