import { ConfigState } from '../../store/types';
import { http } from '../../utils';
import { config as defaultConfig } from '../database/data/config';

interface ReturnType {
  config: ConfigState;
}

const getConfig = async (): Promise<ReturnType> => {
  try {
    const response = await http.get<ReturnType>('/api/config');
    return response.data;
  } catch {
    return { config: defaultConfig };
  }
};

export const config = {
  /**
   * Retrieve needed information to initialize the application
   */
  getConfig
};