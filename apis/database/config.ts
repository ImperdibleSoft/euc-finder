import { ConfigState } from '../../store/types';
import { config as availableConfig } from './data';

const getConfig = async (): Promise<ConfigState> => availableConfig;

export const config = {
  /**
   * Return a complete list of available EUCs in the market
   */
  getConfig
};