import { Box, SxProps, Theme, Typography } from '@mui/material';
import Link from 'next/link';
import React from 'react';
import { HEADER_HEIGHT } from '../components/Layouts/constants';
import { EUC_COMPARATOR, EUC_FINDER, VIDEOS } from '../constants/clientRoutes';
import { BRAND_COLOR } from '../styles/theme';
import { getTranslationsFromFiles } from '../utils-server';

const section: SxProps<Theme> = {
  alignItems: 'center',
  display: 'flex',
  flexDirection: 'row',
  height: {
    xs: `calc(100vh - ${ HEADER_HEIGHT }px)`,
    md: `calc(50vh - ${ HEADER_HEIGHT / 2 }px)`
  },
  justifyContent: 'center',
  mx: 'auto',
  maxWidth: 1280,
  width: '100%',
  '&:nth-child(even)': { flexDirection: 'row-reverse' }
};

const Landing = () => {
  return (
    <Box sx={ { my: -3 } }>
      <Box
        sx={ {
          ...section,
          background: `linear-gradient(180deg, ${ BRAND_COLOR }FF 70%, ${ BRAND_COLOR }00 100%)`,
          height: '100vh',
          maxWidth: 'none'
        } }
      >
        
      </Box>
      
      <Box sx={ section }>
        <Typography variant="h3">
          EUC Finder
        </Typography>

        <Link href={ EUC_FINDER }>Link</Link>
      </Box>

      <Box sx={ section }>
        <Typography variant="h3">
          EUC Comparator
        </Typography>

        <Link href={ EUC_COMPARATOR }>Link</Link>
      </Box>
      
      <Box sx={ section }>
        <Typography variant="h3">
          Videos
        </Typography>

        <Link href={ VIDEOS }>Link</Link>
      </Box>
      
      <Box sx={ section }>
        <Typography variant="h3">
          About
        </Typography>
      </Box>
    </Box>
  );
};

export default Landing;

export const getStaticProps = getTranslationsFromFiles([], 'none');
