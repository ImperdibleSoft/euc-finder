import { Box, CssBaseline, Toolbar } from '@mui/material';
import React, { PropsWithChildren } from 'react';
import { useModalsContext } from '../../../context';
import { useBreakpoints } from '../../../hooks';
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
  const { initialDisclaimer } = useModalsContext();
  const { md: isDesktop } = useBreakpoints();
  
  return (
    <Box
      id="MainLayout"
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
        id="MainLayout-contentWrapper"
        sx={ {
          display: 'flex',
          flexDirection: isDesktop ? 'row-reverse' : 'column',
          flex: 1,
          maxWidth: '100%'
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
          <Toolbar
            id="MainLayout-contentSpacer"
            sx={ {
              boxSizing: 'content-box',
              py: { xs: 3, sm: 0 }
            } }
          />

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
  );};

export default MainLayout;
