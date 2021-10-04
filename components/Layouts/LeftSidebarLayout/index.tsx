import { Box, Drawer, Icon, IconButton, SwipeableDrawer, Theme, useMediaQuery, useTheme } from '@mui/material';
import { SxProps } from '@mui/system';
import React, { PropsWithChildren } from 'react';

const drawerWidth = 320;

const sidebarStyles: SxProps<Theme> = {
  alignItems: 'flex-start',
  display: { xs: 'block', sm: 'none' },
  justifyContent: 'flex-start',
  maxHeight: '100vh',
  maxWidth: 'calc(100vw - 48px)',
  overflow: 'hidden',
  overflowY: 'auto',
  width: drawerWidth,
  '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth }
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
  const theme = useTheme();
  const isPermanentSidebar = useMediaQuery(theme.breakpoints.up('sm'));

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
          maxHeight: 'calc(100vh - 64px)',
          top: 64
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
          sm: 40
        }
      } }>
        { children }
      </Box>
    </>
  );};

export default LeftSidebarLayout;