import { Box, Drawer, Icon, IconButton, SwipeableDrawer, SxProps, Theme } from '@mui/material';
import React, { PropsWithChildren } from 'react';
import { useBreakpoints } from '../../../hooks';
import Footer from '../Footer';
import { BOTTOM_NAVIGATION_HEIGHT, FILTERS_SIDEBAR_WIDTH, HEADER_HEIGHT, NAV_SIDEBAR_WIDTH } from '../constants';

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
  handleOpenSidebar,
  open,
  sidebar
}) => {
  const { sm: isPermanentSidebar, md: isNavSidebar } = useBreakpoints();

  const renderSwipableSidebar = (content: React.ReactNode) => (
    <SwipeableDrawer
      anchor="left"
      BackdropProps={ { sx: { display: { xs: 'block', sm: 'none' } } } }
      ModalProps={ {
        // Better open performance on mobile.
        keepMounted: true
      } }
      open={ open }
      onClose={ handleCloseSidebar }
      onOpen={ handleOpenSidebar }
      PaperProps={ { sx: sidebarStyles } }
      variant="temporary"
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
    </SwipeableDrawer>
  );

  const renderPermanentSidebar = (content: React.ReactNode) => (
    <Drawer
      variant="permanent"
      PaperProps={ {
        sx:{ 
          ...sidebarStyles,
          display: { xs: 'none', sm: 'block' },
          maxHeight: `calc(100vh - ${ HEADER_HEIGHT }px - ${ isNavSidebar ? 0 : BOTTOM_NAVIGATION_HEIGHT }px)`,
          top: HEADER_HEIGHT,
          left: isNavSidebar ? NAV_SIDEBAR_WIDTH : 0
        } 
      } }
      open
    >
      { content }
    </Drawer>
  );

  const renderSidebar = isPermanentSidebar ? renderPermanentSidebar : renderSwipableSidebar;
  
  return (
    <>
      { renderSidebar(sidebar) }

      <Box sx={ {
        flex: 1,
        marginLeft: {
          xs: 0,
          sm: FILTERS_SIDEBAR_WIDTH / 8
        }
      } }>
        { children }

        <Footer />
      </Box>
    </>
  );};

export default LeftSidebarLayout;