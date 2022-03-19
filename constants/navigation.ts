import { BottomNavigationRoute, LOCAL_STORAGE_KEY } from '../types';
import { getItem } from '../utils';
import { DEALERS, EUC_FINDER, EUC_COMPARATOR, INFLUENCERS, SETTINGS, VIDEOS, EUC_MANAGER } from './clientRoutes';

const getNavigation = (): BottomNavigationRoute[] => {
  const apps: BottomNavigationRoute[] = [
    {
      label: 'nav-comparator',
      icon: 'compare',
      path: EUC_COMPARATOR
    },
    {
      label: 'nav-finder',
      icon: 'search',
      path: EUC_FINDER
    },
    {
      label: 'nav-videos',
      icon: 'smart_display',
      path: VIDEOS
    },
    {
      label: 'nav-dealers',
      icon: 'storefront',
      path: DEALERS
    },
    {
      label: 'nav-influencers',
      icon: 'person',
      path: INFLUENCERS
    },
    {
      label: 'nav-instagram',
      icon: 'instagram',
      path: 'https://instagram.com/EUCFinder'
    },
    {
      label: 'nav-telegram',
      icon: 'telegram',
      path: 'https://t.me/EUCFinder'
    },
    {
      label: 'nav-settings',
      icon: 'settings',
      path: SETTINGS
    }
  ];

  if (getItem(LOCAL_STORAGE_KEY.ENABLE_EUCMANAGER) === 'true') {
    return [
      {
        label: 'nav-manager',
        icon: 'speed',
        path: EUC_MANAGER
      },
      ...apps
    ];
  }
  
  return apps;
};

export default getNavigation;
