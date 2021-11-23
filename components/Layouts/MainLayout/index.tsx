import { Box, CssBaseline, Toolbar, useTheme } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';
import React, { PropsWithChildren } from 'react';
import { useArenaContext } from '../../../context';
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
  const { disclaimer } = useArenaContext();
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

      { disclaimer.open && disclaimer.handleClose && (
        <InfoDisclaimer
          handleClose={ disclaimer.handleClose }
          open={ disclaimer.open }
        />
      ) }

      <Notifications isTablet={ isTablet } />
    </Box>
  );};

export default MainLayout;