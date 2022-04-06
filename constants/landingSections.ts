import { Theme } from '@mui/material';
import { BRAND_COLOR } from '../styles/theme';
import { LandingSectionProps } from '../types';
import { DEALERS, EUC_COMPARATOR, EUC_FINDER, INFLUENCERS, SETTINGS, VIDEOS } from './clientRoutes';

const landingSections: LandingSectionProps[] = [
  {
    callToAction: 'visit-btn',
    description: 'eucFinder-desc',
    extraText: 'eucFinder-desc2',
    path: EUC_FINDER,
    picture: '/assets/screenshots/eucFinder-{{lang}}.png',
    title: 'nav-finder',
    sx: {
      background: `linear-gradient(180deg, ${ BRAND_COLOR }FF 70%, ${ BRAND_COLOR }00 100%)`,
      '& .LandingSection-title, & .LandingSection-description': {
        // Avoid eslint to format this in 1 single line
        color: ({ palette }: Theme) => palette.getContrastText(BRAND_COLOR)
      }
    }
  },
  {
    callToAction: 'visit-btn',
    description: 'eucComparator-desc',
    extraText: 'eucComparator-desc2',
    path: EUC_COMPARATOR,
    picture: '/assets/screenshots/eucComparator-{{lang}}.png',
    title: 'nav-comparator'
  },
  {
    callToAction: 'visit-btn',
    description: 'settings-desc',
    extraText: 'settings-desc2',
    path: SETTINGS,
    picture: '/assets/screenshots/settings-{{lang}}.png',
    title: 'nav-settings'
  },
  {
    callToAction: 'visit-btn',
    description: 'videos-desc',
    extraText: 'videos-desc2',
    path: VIDEOS,
    picture: '/assets/screenshots/videos-{{lang}}.png',
    title: 'nav-videos'
  },
  {
    callToAction: 'visit-btn',
    description: 'dealers-desc',
    extraText: 'dealers-desc2',
    path: DEALERS,
    picture: '/assets/screenshots/dealers-{{lang}}.png',
    title: 'nav-dealers'
  },
  {
    callToAction: 'visit-btn',
    description: 'influencers-desc',
    extraText: 'influencers-desc2',
    path: INFLUENCERS,
    picture: '/assets/screenshots/influencers-{{lang}}.png',
    title: 'nav-influencers'
  }
];

export default landingSections;
