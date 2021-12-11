import { BottomNavigationRoute } from '../types';
import { DEALERS, EUCS, INFLUENCERS, SETTINGS, VIDEOS } from './clientRoutes';

const dealers: BottomNavigationRoute = {
  label: 'dealers-title',
  icon: 'storefront',
  path: DEALERS
};

const eucs: BottomNavigationRoute = {
  label: 'eucs',
  icon: 'radio_button_unchecked',
  path: EUCS
};

const influencers: BottomNavigationRoute = {
  label: 'influencers-label',
  icon: 'person',
  path: INFLUENCERS
};

const settings: BottomNavigationRoute = {
  label: 'settings-title',
  icon: 'settings',
  path: SETTINGS
};

const videos: BottomNavigationRoute = {
  label: 'videos',
  icon: 'smart_display',
  path: VIDEOS
};

export const getMobileNavigation = () => [influencers, videos, eucs, dealers, settings];
export const getDesktopNavigation = () => [eucs, videos, dealers, influencers, settings];