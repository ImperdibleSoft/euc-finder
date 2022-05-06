import { NavigationRoute } from '../types';
import {
  DEALERS,
  EUC_FINDER,
  EUC_COMPARATOR,
  INFLUENCERS,
  SETTINGS,
  VIDEOS,
  ABOUT,
  EMBED_GENERATE
} from './clientRoutes';

const getNavigation = (): NavigationRoute[] => [
  {
    label: 'nav-finder',
    icon: 'search',
    path: EUC_FINDER
  },
  {
    label: 'nav-comparator',
    icon: 'compare',
    path: EUC_COMPARATOR
  },
  {
    label: 'nav-videos',
    icon: 'smart_display',
    path: VIDEOS
  },
  {
    label: 'nav-dealers',
    icon: 'storefront',
    path: DEALERS,
    secondary: true
  },
  {
    label: 'nav-influencers',
    icon: 'person',
    path: INFLUENCERS,
    secondary: true
  },
  {
    label: 'nav-embedGenerator',
    icon: 'extension',
    path: EMBED_GENERATE,
    secondary: true
  },
  {
    label: 'nav-settings',
    icon: 'settings',
    path: SETTINGS,
    secondary: true
  },
  {
    label: 'nav-about',
    icon: 'info',
    path: ABOUT,
    secondary: true
  },
  {
    label: 'nav-instagram',
    icon: 'instagram',
    path: 'https://instagram.com/EUCFinder',
    small: true
  },
  {
    label: 'nav-telegram',
    icon: 'telegram',
    path: 'https://t.me/EUCFinder',
    small: true
  }
];

export default getNavigation;
