import { Box, CssBaseline, Toolbar } from '@mui/material';
import React, { PropsWithChildren } from 'react';
import { useArenaContext } from '../../../context';
import InfoDisclaimer from '../../InfoDisclaimer';
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
  
  return (
    <Box
      sx={ {
        bgcolor: (theme) => theme.palette.background.default,
        display: 'flex',
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

      { disclaimer.open && disclaimer.handleClose && (
        <InfoDisclaimer
          handleClose={ disclaimer.handleClose }
          open={ disclaimer.open }
        />
      ) }

      <Notifications />
    </Box>
  );};

export default MainLayout;