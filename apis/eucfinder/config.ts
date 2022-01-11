import { ConfigState } from '../../store/types';
import { App, Brands, Store, Wheel } from '../../types';
import { http } from '../../utils';
import { config as defaultConfig } from '../database/data/config';

interface ReturnType {
  apps: App[];
  brands: Brands;
  config: ConfigState;
  dealers: Store[];
  wheels: Wheel[];
}

const getInitialData = async (): Promise<ReturnType> => {
  try {
    const response = await http.get<ReturnType>('/api/initialData');
    return response.data;
  } catch {
    return {
      apps: [],
      // @ts-ignore
      brands: {},
      config: defaultConfig,
      dealers: [],
      wheels: []
    };
  }
};

export const config = {
  /**
   * Retrieve needed information to initialize the application,
   * including:
   * - apps
   * - brands
   * - config
   * - dealers
   * - wheels
   */
  getInitialData
};