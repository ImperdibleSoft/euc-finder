import { Theme } from '@mui/material';
import { BRAND_COLOR } from '../styles/theme';
import { LandingSectionProps } from '../types';
import { EUC_COMPARATOR, EUC_FINDER, VIDEOS } from './clientRoutes';

const landingSections: LandingSectionProps[] = [
  {
    callToAction: 'visit-btn',
    description: 'eucFinder-desc',
    path: EUC_FINDER,
    picture: '/favicon/maskable_icon_x512.png',
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
    path: EUC_COMPARATOR,
    picture: '/favicon/maskable_icon_x512.png',
    title: 'nav-comparator'
  },
  {
    callToAction: 'visit-btn',
    description: 'videos-desc',
    path: VIDEOS,
    picture: '/favicon/maskable_icon_x512.png',
    title: 'nav-videos'
  }
];

export default landingSections;
