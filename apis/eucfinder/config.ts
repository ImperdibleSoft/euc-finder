import { ConfigState } from '../../store/types';
import { App, Brands, Store, Wheel } from '../../types';
import { http } from '../../utils';

interface ReturnType {
  apps: App[];
  config: ConfigState;
  brands: Brands;
  dealers: Store[];
  wheels: Wheel[];
}

const getConfig = async (): Promise<ReturnType | undefined> => {
  try {
    const response = await http.get<ReturnType>('/api/config');
    return response.data;
  } catch {
    return undefined;
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
  getConfig
};