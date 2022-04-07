import { Box, Drawer, Icon, IconButton, SwipeableDrawer, SxProps, Theme } from '@mui/material';
import React, { PropsWithChildren, useEffect, useState } from 'react';
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

const LayoutWithSidebar: React.FC<PropsWithChildren<Props>> = ({
  children,
  handleCloseSidebar,
  handleOpenSidebar,
  open,
  sidebar
}) => {
  const { sm: isPermanentSidebar } = useBreakpoints();
  const [permanentSidebarStyle, setPermanentSidebarStyle] = useState({ paddingRight: 0, overflowY: '' });

  const renderSwipableSidebar = (content: React.ReactNode) => (
    <SwipeableDrawer
      id="LeftSidebarLayout-swipeableSidebar"
      anchor="right"
      BackdropProps={ { sx: { display: { xs: 'block', sm: 'none' } } } }
      open={ open }
      onClose={ handleCloseSidebar }
      onOpen={ handleOpenSidebar }
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
    </SwipeableDrawer>
  );

  const renderPermanentSidebar = (content: React.ReactNode) => (
    <Drawer
      id="LeftSidebarLayout-permanentSidebar"
      variant="permanent"
      PaperProps={ {
        elevation: 4,
        sx:{ 
          ...sidebarStyles,
          display: { xs: 'none', sm: 'block' },
          left: 'initial',
          maxHeight: `calc(100vh - ${ HEADER_HEIGHT }px)`,
          right: 0,
          top: HEADER_HEIGHT,
          width: FILTERS_SIDEBAR_WIDTH + ((permanentSidebarStyle.overflowY && permanentSidebarStyle.paddingRight)
            ? permanentSidebarStyle.paddingRight
            : 0),
          zIndex: 1050
        } 
      } }
      sx={ {
        backgroundColor: 'red',
        display: 'flex',
        height: `calc(100% + ${ 8 * 3 }px)`,
        my: -3,
        position: 'relative',
        width: FILTERS_SIDEBAR_WIDTH
      } }
      open
    >
      { content }
    </Drawer>
  );

  const renderSidebar = isPermanentSidebar ? renderPermanentSidebar : renderSwipableSidebar;

  const handleChangeBodyStyles: MutationCallback = (mutations) => {
    const mutation = mutations.pop();

    if (mutation) {
      const style = (mutation.target as HTMLElement).style;
  
      const newValue = {
        paddingRight: parseInt(style.paddingRight, 10),
        overflowY: style.overflowY
      };

      setPermanentSidebarStyle(newValue);
    }
  };

  useEffect(() => {
    const observer = new MutationObserver(handleChangeBodyStyles);

    observer.observe(global.document.body, { attributes: true, attributeFilter: ['style'] });

    return () => {
      observer.disconnect();
    };
  }, []);
  
  return (
    <Box
      id="LeftSidebarLayout"
      sx={ { display: 'flex', height: '100%', maxWidth: '100%' } }
    >
      <Box
        id="LeftSidebarLayout-content"
        sx={ {
          display: 'flex',
          flex: 1,
          flexDirection: 'column',
          height: '100%',
          maxWidth: isPermanentSidebar ? `calc(100% - ${ FILTERS_SIDEBAR_WIDTH }px)` : '100%'
        } }
      >
        <Box sx={ { flex: 1 } }>
          { children }
        </Box>

        <Footer />
      </Box>

      { renderSidebar(sidebar) }
    </Box>
  );
};

export default LayoutWithSidebar;
