import { BottomNavigationRoute, LOCAL_STORAGE_KEY } from '../types';
import { getItem } from '../utils';
import { DEALERS, EUCS, EUC_COMPARE, INFLUENCERS, SETTINGS, VIDEOS } from './clientRoutes';

const getNavigation = (): BottomNavigationRoute[] => {
  const apps: BottomNavigationRoute[] = [
    {
      label: 'nav-comparator',
      icon: 'compare',
      path: EUC_COMPARE
    },
    {
      label: 'nav-finder',
      icon: 'search',
      path: EUCS
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
        path: EUCS
      },
      ...apps
    ];
  }
  
  return apps;
};

export default getNavigation;
