import { ClickAwayListener, Grow, List, ListItem, ListItemIcon, ListItemText, Paper, Popper } from '@mui/material';
import React, { useRef, useState } from 'react';
import { EUC_COMPARATOR, VIDEOS } from '../../../../constants/clientRoutes';
import getNavigation from '../../../../constants/navigation';
import { NavigationRoute } from '../../../../types';
import { NavigationProps, renderIconWithBadge } from './utils';

interface ItemGroups {
  mainItems: NavigationRoute[];
  moreItems: NavigationRoute[];
}

const defaultGroups: ItemGroups = {
  mainItems: [],
  moreItems: []
};

const { mainItems, moreItems } = getNavigation().reduce((groups, item) => {
  if (item.secondary) {
    groups.moreItems.push(item);
  } else {
    groups.mainItems.push(item);
  }

  return groups;
}, defaultGroups);

const TabletNavigationMenu = ({
  comparedWheels,
  handleNavigate,
  newVideos,
  pathname,
  t
}: NavigationProps): JSX.Element => {
  const [open, setOpen] = useState(false);
  const anchorRef = useRef<HTMLDivElement>(null);

  const handleCloseMenu = () => {
    setOpen(false);
  };

  const handleToggleMenu = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClickMenuItem = (item: NavigationRoute) => {
    if (item?.path) {
      handleNavigate(item.path); 
    }
    handleCloseMenu();
  };

  return (
    <>
      <List
        sx={ {
          alignItems: 'center',
          display: 'flex',
          flexDirection: 'row'
        } }
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
              <ListItemIcon sx={ { minWidth: 0, mr: item.small ? 0 : 1 } }>
                { renderIconWithBadge(item.icon, badge) }
              </ListItemIcon>

              { !item.small && (
                <ListItemText>
                  { t(item.label) }
                </ListItemText>
              ) }
            </ListItem>
          );
        }) }

        <ListItem button onClick={ handleToggleMenu } ref={ anchorRef }>
          <ListItemIcon sx={ { minWidth: 0 } }>
            { renderIconWithBadge('more_vert') }
          </ListItemIcon>
        </ListItem>

        <Popper
          open={ open }
          anchorEl={ anchorRef.current }
          role={ undefined }
          placement="bottom-end"
          transition
          disablePortal
        >
          { ({ TransitionProps }) => (
            <Grow { ...TransitionProps }>
              <Paper>
                <ClickAwayListener onClickAway={ handleCloseMenu }>
                  <List>
                    { moreItems.map(item => (
                      <ListItem
                        key={ item.path }
                        onClick={ () => handleClickMenuItem(item) }
                        selected={ pathname === item.path }
                        sx={ { cursor: 'pointer' } }
                      >
                        { item.icon && (
                          <ListItemIcon sx={ { minWidth: 0, mr: 1 } }>
                            { renderIconWithBadge(item.icon, undefined, true) }
                          </ListItemIcon>
                        ) }

                        <ListItemText>
                          { t(item.label) }
                        </ListItemText>
                      </ListItem>
                    )) }
                  </List>
                </ClickAwayListener>
              </Paper>
            </Grow>
          ) }
        </Popper>
      </List>
    </>
  );
};

export default TabletNavigationMenu;
