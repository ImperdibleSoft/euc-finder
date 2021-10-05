import { Box, CssBaseline, Toolbar } from '@mui/material';
import React, { PropsWithChildren } from 'react';
import Header, { Props } from './Header';

const MainLayout: React.FC<PropsWithChildren<Props>> = ({
  brands,
  children,
  handleSelectRegion,
  handleSelectWheel,
  regions,
  selectedRegion,
  wheels
}) => (
  <Box
    sx={ {
      bgcolor: '#ebedf0',
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
  </Box>
);

export default MainLayout;