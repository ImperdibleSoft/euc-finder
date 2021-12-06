import { Box, CssBaseline, Toolbar, useTheme } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';
import React, { PropsWithChildren } from 'react';
import { useModalsContext } from '../../../context';
import InfoDisclaimer from '../../InfoDisclaimer';
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
  const { breakpoints } = useTheme();
  const isTablet = useMediaQuery(breakpoints.up('md'));
  
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
        sx={ { display: 'flex', flexDirection: isTablet ? 'row-reverse' : 'column', flex: 1 } }
      >
        <Box
          component="main"
          sx={ {
            flexGrow: 1,
            maxWidth: '100vw',
            py: 3
          } }
        >
          <Toolbar sx={ {
            boxSizing: 'content-box',
            py: { xs: 3, sm: 0 }
          } } />

          { children }
        </Box>

        <BottomNavigation isTablet={ isTablet } />
      </Box>

      { initialDisclaimer.open && initialDisclaimer.handleClose && (
        <InfoDisclaimer
          handleClose={ initialDisclaimer.handleClose }
          open={ initialDisclaimer.open }
        />
      ) }

      <Notifications isTablet={ isTablet } />
    </Box>
  );};

export default MainLayout;