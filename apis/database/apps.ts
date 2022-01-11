import { App } from '../../types';
import { apps as availableApps } from './data';

const getAllApps = async (): Promise<App[]> => availableApps;

export const apps = {
  /**
   * Return a complete list of available apps for managing
   * EUCs
   */
  getAllApps
};