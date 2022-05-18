import { App } from '../../types';
import { apps as availableApps } from './data';
import fetchDataFromDB from './dataBaseApi';
import { createAppsFromServer } from './modelCreators/apps';
import { AppFromServer, AppPlatformFromServer } from './types/apps';

const getAllApps = async (): Promise<App[]> => {
  try {
    const platformsQuery = 'SELECT id, appId, url, logo FROM appPlatforms';
    const platformsFromServer = (await fetchDataFromDB(platformsQuery)) as AppPlatformFromServer[];

    const appsQuery = 'SELECT id, name, website FROM apps';
    const appsFromServer = (await fetchDataFromDB(appsQuery)) as AppFromServer[];

    const apps = createAppsFromServer(appsFromServer, platformsFromServer);
    return apps;
  } catch (err) {
    console.error('error', err);
  }

  return availableApps;
};

export const apps = {
  /**
   * Return a complete list of available apps for managing
   * EUCs
   */
  getAllApps
};
