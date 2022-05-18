
import { App, BrandId, Platform } from '../../../types';
import { AppFromServer, AppPlatformFromServer } from '../types/apps';

const createPlatformFromServer = (platform: AppPlatformFromServer): Platform => ({
  logo: `${ platform.logo }`,
  url: `${ platform.url }`
});

const createPlatformsFromServer = (platformsFromServer: AppPlatformFromServer[]): App['platforms'] => {
  if (!platformsFromServer?.length) {
    return undefined;
  }

  const appStore = platformsFromServer.find(p => p.url && /apps.apple.com/.test(`${ p.url }`));
  const playStore = platformsFromServer.find(p => p.url && /play.google.com/.test(`${ p.url }`));

  if (appStore && playStore) {
    return {
      android: createPlatformFromServer(playStore),
      iOS: createPlatformFromServer(appStore)
    };
  }

  if (appStore) {
    return { iOS: createPlatformFromServer(appStore) };
  }

  if (playStore) {
    return { android: createPlatformFromServer(playStore) };
  }

  return undefined;
};

const createAppFromServer = (
  { id, name, website }: AppFromServer,
  platforms?: AppPlatformFromServer[]
): App | undefined => {
  if (!id) {
    return undefined;
  }

  const appPlatforms = platforms?.filter(p => p.appId === id) ?? [];

  return {
    id: `${ id }` as BrandId,
    name: `${ name ?? id }`,
    url: `${ website }`,
    platforms: createPlatformsFromServer(appPlatforms)
  };
};

export const createAppsFromServer = (
  apps: AppFromServer[],
  platforms?: AppPlatformFromServer[]
): App[] => {
  if (!Array.isArray(apps)) {
    console.error('Invalid apps object');
    return [];
  }

  return apps
    .map(a => createAppFromServer(a, platforms))
    .filter(a => !!a?.platforms && Object.keys(a.platforms).length >= 1) as App[];
};
