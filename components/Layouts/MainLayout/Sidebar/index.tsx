import { BottomNavigationAction, Box, Icon } from '@mui/material';
import { useRouter } from 'next/router';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { BOTTOM_SHEET } from '../../../../constants';
import { HEADER_HEIGHT } from '../../constants';

const drawerWidth = 120;

const styles = {
  height: '100vh',
  maxHeight: `calc(100vh - ${ HEADER_HEIGHT }px)`
};

const Sidebar: React.FC = () => {
  const { t } = useTranslation();
  const { pathname } = useRouter();
  const [firstPath] = pathname.replace(/^\//, '').split('/');

  return (
    <>
      <div
        style={ {
          ...styles,
          display: 'block',
          width: drawerWidth
        } }
      />
      
      <Box
        sx={ {
          ...styles,
          alignItems: 'flex-start',
          justifyContent: 'flex-start',
          overflow: 'hidden',
          overflowY: 'auto',
          position: 'fixed',
          top: 64,
          width: drawerWidth,
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth }
        } }
      >
        { BOTTOM_SHEET.map(({ icon, label, path }) => {
          const isSelected = () => `/${ firstPath }` === path;

          return (
            <BottomNavigationAction
              key={ label }
              icon={ <Icon color={ isSelected() ? 'secondary' : 'action' }>{ icon }</Icon> }
              label={ t(label) }
              value={ path }
              sx={ { '&.Mui-selected': { color: ({ palette }) =>palette.secondary.main } } }
            />
          );
        }) }
      </Box>
    </>
  );
};

export default Sidebar;