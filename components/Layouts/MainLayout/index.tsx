import { Box, CssBaseline, Toolbar } from '@mui/material';
import React, { PropsWithChildren } from 'react';
import { useModalsContext } from '../../../context';
import { useBreakpoints } from '../../../hooks';
import InfoDisclaimer from '../../InfoDisclaimer';
import { NAV_SIDEBAR_WIDTH } from '../constants';
import BottomNavigation from './BottomNavigation';
import Header, { Props } from './Header';
import Notifications from './Notifications';

const MainLayout: React.FC<PropsWithChildren<Props>> = ({
  brands,
  children,
  handleSelectRegion,
  handleSelectWheel,
  regions,
  selectedRegion,
  wheels
}) => {
  const { initialDisclaimer } = useModalsContext();
  const { md: isDesktop } = useBreakpoints();
  
  return (
    <Box
      sx={ {
        bgcolor: (theme) => theme.palette.background.default,
        display: 'flex',
        flexDirection: 'row',
        minHeight: '100vh'
      } }
    >
      <CssBaseline />

      <Header
        brands={ brands }
        handleSelectRegion={ handleSelectRegion }
        handleSelectWheel={ handleSelectWheel }
        regions={ regions }
        selectedRegion={ selectedRegion }
        wheels={ wheels }
      />

      <Box
        sx={ { display: 'flex', flexDirection: isDesktop ? 'row-reverse' : 'column', flex: 1 } }
      >
        <Box
          component="main"
          sx={ {
            flexGrow: 1,
            maxWidth: {
              xs: '100vw',
              md: `calc(100vw - ${ NAV_SIDEBAR_WIDTH }px)`
            },
            py: 3
          } }
        >
          <Toolbar sx={ {
            boxSizing: 'content-box',
            py: { xs: 3, sm: 0 }
          } } />

          { children }
        </Box>

        <BottomNavigation isTablet={ isDesktop } />
      </Box>

      { initialDisclaimer.open && initialDisclaimer.handleClose && (
        <InfoDisclaimer
          handleClose={ initialDisclaimer.handleClose }
          open={ initialDisclaimer.open }
        />
      ) }

      <Notifications isTablet={ isDesktop } />
    </Box>
  );};

export default MainLayout;