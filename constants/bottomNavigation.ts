import { BottomNavigationRoute, LOCAL_STORAGE_KEY } from '../types';
import { getItem } from '../utils';
import { DEALERS, EUCS, EUC_COMPARE, INFLUENCERS, SETTINGS, VIDEOS } from './clientRoutes';

const eucManager: BottomNavigationRoute = {
  label: 'bottomNav-app',
  icon: 'speed',
  path: EUCS
};

const eucComparator: BottomNavigationRoute = {
  label: 'bottomNav-comparator',
  icon: 'compare',
  path: EUC_COMPARE
};

const eucFinder: BottomNavigationRoute = {
  label: 'bottomNav-eucs',
  icon: 'radio_button_unchecked',
  path: EUCS
};

const videos: BottomNavigationRoute = {
  label: 'bottomNav-videos',
  icon: 'smart_display',
  path: VIDEOS
};

const dealers: BottomNavigationRoute = {
  label: 'bottomNav-dealers',
  icon: 'storefront',
  path: DEALERS
};

const influencers: BottomNavigationRoute = {
  label: 'bottomNav-influencers',
  icon: 'person',
  path: INFLUENCERS
};

const settings: BottomNavigationRoute = {
  label: 'bottomNav-settings',
  icon: 'settings',
  path: SETTINGS
};

const apps = [
  eucComparator,
  eucFinder,
  videos,
  dealers,
  influencers,
  settings
];

export const getMobileNavigation = () => [influencers, videos, eucFinder, dealers, settings];
export const getDesktopNavigation = () => [eucFinder, videos, dealers, influencers, settings];

const getNavigation = () => {
  if (getItem(LOCAL_STORAGE_KEY.ENABLE_EUCMANAGER) === 'true') {
    return [
      eucManager,
      ...apps
    ];
  }
  
  return apps;
};

export default getNavigation;
