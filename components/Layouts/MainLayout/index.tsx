import { Box, CssBaseline, Theme } from '@mui/material';
import { useRouter } from 'next/router';
import React, { PropsWithChildren } from 'react';
import { useSelector } from 'react-redux';
import { ROOT } from '../../../constants/clientRoutes';
import { useModalsContext } from '../../../context';
import { useBreakpoints, useLayoutTranslations } from '../../../hooks';
import { getComparedWheels, getNewVideosLength } from '../../../store/selectors';
import { BRAND_COLOR } from '../../../styles/theme';
import InfoDisclaimer from '../../InfoDisclaimer';
import Header from './Header';

interface Props {
  loading: boolean;
}

const MainLayout = ({ children, loading }: PropsWithChildren<Props>) => {
  const { initialDisclaimer } = useModalsContext();
  const { md: isDesktop } = useBreakpoints();
  const { t } = useLayoutTranslations();
  const router = useRouter();
  const comparedWheels = useSelector(getComparedWheels).length;
  const newVideos = useSelector(getNewVideosLength());
  const isLanding = router.pathname === ROOT;

  const handleNavigate = (path: string) => {
    if (path.startsWith('http')) {
      global?.window?.open?.(path);
    } else { 
      router.push(path);
    }
  };

  return (
    <Box
      id="MainLayout"
      sx={ {
        bgcolor: ({ palette }: Theme) => loading
          ? BRAND_COLOR
          : (
            isLanding
              ? palette.background.paper
              : palette.background.default
          ),
        display: 'flex',
        flexDirection: 'row',
        minHeight: '100vh',
        transition: 'backgroundColor 0.2s'
      } }
    >
      <CssBaseline />

      <Header
        comparedWheels={ comparedWheels }
        handleNavigate={ handleNavigate }
        isLanding={ isLanding }
        newVideos={ newVideos }
        pathname={ router.pathname }
        t={ t }
      />

      <Box
        id="MainLayout-contentWrapper"
        sx={ {
          display: 'flex',
          flexDirection: isDesktop ? 'row-reverse' : 'column',
          flex: 1,
          maxWidth: '100%',
          mt: 8
        } }
      >
        <Box
          id="MainLayout-content"
          component="main"
          sx={ {
            display: 'flex',
            flexDirection: 'column',
            flexGrow: 1,
            maxWidth: '100%',
            position: 'relative',
            py: 3
          } }
        >
          { children }
        </Box>
      </Box>

      { initialDisclaimer.open && initialDisclaimer.handleClose && (
        <InfoDisclaimer
          handleClose={ initialDisclaimer.handleClose }
          open={ initialDisclaimer.open }
        />
      ) }
    </Box>
  );
};

export default MainLayout;
