import { ConfigState } from '../../store/types';
import { config as availableConfig } from './data';
import fetchDataFromDB from './dataBaseApi';
import { createConfigFromDatabase } from './modelCreators/config';
import { ConfigFromServer } from './types/config';

const getConfig = async (): Promise<ConfigState> => {
  try {
    // eslint-disable-next-line max-len
    const query = 'SELECT defaultPreset, maxComparedWheels, maxCurrentAllowed, paginationSize, calculatedRange, prices, purchaseLinks, specColumns, listAdditionalSpecs, listMainSpecs, wheelAdditionalSpecs, wheelHighlightedSpecs, wheelMainSpecs FROM config';
    const data = (await fetchDataFromDB(query)) as ConfigFromServer[];
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
