import {
  Box,
  Button,
  Icon,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  SwipeableDrawer,
  Theme,
  Toolbar
} from '@mui/material';
import React, { useState } from 'react';
import { EUC_COMPARATOR, VIDEOS } from '../../../../constants/clientRoutes';
import getNavigation from '../../../../constants/navigation';
import { BRAND_COLOR } from '../../../../styles/theme';
import Logotype from '../../../Logotype';
import { NavigationProps, renderIconWithBadge } from './utils';

const mainItems = getNavigation();

const MobileNavigationMenu = ({
  comparedWheels,
  handleNavigate,
  newVideos,
  pathname,
  t
}: NavigationProps): JSX.Element => {
  const [open, setOpen] = useState(false);

  const handleCloseSidebar = () => {
    setOpen(false);
  };

  const handleOpenSidebar = () => {
    setOpen(true);
  };
  
  return (
    <>
      <Button
        onClick={ handleOpenSidebar }
        sx={ {
          color: ({ palette }: Theme) => palette.getContrastText(BRAND_COLOR),
          p: 1,
          minWidth: '48px'
        } }
      >
        <Icon>menu</Icon>
      </Button>

      <SwipeableDrawer
        anchor="left"
        onClose={ handleCloseSidebar }
        onOpen={ handleOpenSidebar }
        open={ open }
        PaperProps={ { sx: { minWidth: 240 } } }
      >
        <Toolbar sx={ { backgroundColor: BRAND_COLOR, height: 64 } }>
          <Logotype />
        </Toolbar>
          
        <Box
          onClick={ handleCloseSidebar }
          sx={ {
            alignItems: 'flex-start',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center'
          } }
        >
          <List
            sx={ { width: '100%' } }
          >
            { mainItems.map(item => {
              let badge: number | undefined = undefined;
              switch (item.path) {
                case EUC_COMPARATOR:
                  badge = comparedWheels;
                  break;
  
                case VIDEOS:
                  badge = newVideos;
                  break;
  
                default:
              }
  
              return (
                <ListItem
                  key={ item.path }
                  button
                  onClick={ () => handleNavigate(item.path) }
                  selected={ pathname === item.path }
                >
                  <ListItemIcon sx={ { minWidth: 0, mr: 2 } }>
                    { renderIconWithBadge(item.icon, badge, true) }
                  </ListItemIcon>

                  <ListItemText>
                    { t(item.label) }
                  </ListItemText>
                </ListItem>
              );
            }) }
          </List>
        </Box>
      </SwipeableDrawer>
    </>
  );
};

export default MobileNavigationMenu;
