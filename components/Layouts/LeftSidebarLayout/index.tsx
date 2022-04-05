import { Box, Drawer, Icon, IconButton, SxProps, Theme } from '@mui/material';
import React, { PropsWithChildren } from 'react';
import { useBreakpoints } from '../../../hooks';
import Footer from '../Footer';
import { FILTERS_SIDEBAR_WIDTH, HEADER_HEIGHT } from '../constants';

const sidebarStyles: SxProps<Theme> = {
  alignItems: 'flex-start',
  display: { xs: 'block', sm: 'none' },
  justifyContent: 'flex-start',
  maxHeight: '100vh',
  maxWidth: 'calc(100vw - 48px)',
  overflow: 'hidden',
  overflowY: 'auto',
  width: FILTERS_SIDEBAR_WIDTH,
  '& .MuiDrawer-paper': { boxSizing: 'border-box', width: FILTERS_SIDEBAR_WIDTH }
};

interface Props {
  handleCloseSidebar: () => void
  handleOpenSidebar: () => void
  open: boolean,
  sidebar: PropsWithChildren<{}>['children']
}

const LeftSidebarLayout: React.FC<PropsWithChildren<Props>> = ({
  children,
  handleCloseSidebar,
  open,
  sidebar
}) => {
  const { sm: isPermanentSidebar } = useBreakpoints();

  const renderSwipableSidebar = (content: React.ReactNode) => (
    <Drawer
      id="LeftSidebarLayout-swipeableSidebar"
      anchor="left"
      BackdropProps={ { sx: { display: { xs: 'block', sm: 'none' } } } }
      open={ open }
      onClose={ handleCloseSidebar }
      PaperProps={ { sx: sidebarStyles } }
    >
      <IconButton onClick={ handleCloseSidebar }>
        <Icon fontSize="large">close</Icon>
      </IconButton>

      <Box sx={ {
        maxHeight: 'calc(100vh - 52px)',
        overflow: 'hidden',
        overflowY: 'auto'
      } }>
        { content }
      </Box>
    </Drawer>
  );

  const renderPermanentSidebar = (content: React.ReactNode) => (
    <Drawer
      id="LeftSidebarLayout-permanentSidebar"
      variant="permanent"
      PaperProps={ {
        sx:{ 
          ...sidebarStyles,
          display: { xs: 'none', sm: 'block' },
          maxHeight: `calc(100vh - ${ HEADER_HEIGHT }px)`,
          top: HEADER_HEIGHT,
          left: 0
        } 
      } }
      sx={ {
        backgroundColor: 'red',
        display: 'flex',
        height: '100%',
        width: FILTERS_SIDEBAR_WIDTH
      } }
      open
    >
      { content }
    </Drawer>
  );

  const renderSidebar = isPermanentSidebar ? renderPermanentSidebar : renderSwipableSidebar;
  
  return (
    <Box
      id="LeftSidebarLayout"
      sx={ { display: 'flex', maxWidth: '100%' } }
    >
      { renderSidebar(sidebar) }

      <Box
        id="LeftSidebarLayout-content"
        sx={ {
          display: 'flex',
          flex: 1,
          flexDirection: 'column',
          maxWidth: isPermanentSidebar ? `calc(100% - ${ FILTERS_SIDEBAR_WIDTH }px)` : '100%'
        } }
      >
        { children }

        <Footer />
      </Box>
    </Box>
  );};

export default LeftSidebarLayout;
