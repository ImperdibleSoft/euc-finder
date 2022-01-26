import { BottomNavigationRoute } from '../types';
import { DEALERS, EUCS, INFLUENCERS, SETTINGS, VIDEOS } from './clientRoutes';

const dealers: BottomNavigationRoute = {
  label: 'bottomNav-dealers',
  icon: 'storefront',
  path: DEALERS
};

const eucs: BottomNavigationRoute = {
  label: 'bottomNav-eucs',
  icon: 'radio_button_unchecked',
  path: EUCS
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

const videos: BottomNavigationRoute = {
  label: 'bottomNav-videos',
  icon: 'smart_display',
  path: VIDEOS
};

export const getMobileNavigation = () => [influencers, videos, eucs, dealers, settings];
export const getDesktopNavigation = () => [eucs, videos, dealers, influencers, settings];
