import { Box, CssBaseline, Toolbar } from '@mui/material';
import React, { PropsWithChildren } from 'react';
import { useArenaContext } from '../../../context';
import InfoDisclaimer from '../../InfoDisclaimer';
import Header, { Props } from './Header';

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
        // '#ebedf0',
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
          py: { xs: 2, sm: 0 }
        } } />

        { children }
      </Box>

      { disclaimer.open && disclaimer.handleClose && (
        <InfoDisclaimer
          handleClose={ disclaimer.handleClose }
          open={ disclaimer.open }
        />
      ) }
    </Box>
  );};

export default MainLayout;