import { LOCAL_STORAGE_KEY, NavigationRoute } from '../types';
import { getItem } from '../utils';
import { DEALERS, EUC_FINDER, EUC_COMPARATOR, INFLUENCERS, SETTINGS, VIDEOS, EUC_MANAGER, ABOUT } from './clientRoutes';

const getNavigation = (): NavigationRoute[] => {
  const eucFinder = {
    label: 'nav-finder',
    icon: 'search',
    path: EUC_FINDER
  };

  const eucComparator = {
    label: 'nav-comparator',
    icon: 'compare',
    path: EUC_COMPARATOR
  };

  const eucManager = {
    label: 'nav-manager',
    icon: 'speed',
    path: EUC_MANAGER
  };

  const videos = {
    label: 'nav-videos',
    icon: 'smart_display',
    path: VIDEOS
  };

  const dealers= {
    label: 'nav-dealers',
    icon: 'storefront',
    path: DEALERS,
    secondary: true
  };

  const influencers = {
    label: 'nav-influencers',
    icon: 'person',
    path: INFLUENCERS,
    secondary: true
  };

  const about = {
    label: 'nav-about',
    icon: 'info',
    path: ABOUT,
    secondary: true
  };

  const instagram = {
    label: 'nav-instagram',
    icon: 'instagram',
    path: 'https://instagram.com/EUCFinder',
    small: true
  };

  const telegram = {
    label: 'nav-telegram',
    icon: 'telegram',
    path: 'https://t.me/EUCFinder',
    small: true
  };

  const settings = {
    label: 'nav-settings',
    icon: 'settings',
    path: SETTINGS,
    secondary: true
  };

  const nav = [eucFinder, eucComparator];

  if (getItem(LOCAL_STORAGE_KEY.ENABLE_EUCMANAGER) === 'true') {
    nav.push(eucManager);
  }

  nav.push(videos, dealers, influencers, about, instagram, telegram, settings);
  return nav;
};

export default getNavigation;
