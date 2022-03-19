import { Box, Button, Icon, Popover, Typography } from '@mui/material';
import React, { useState } from 'react';
import getNavigation from '../../../../constants/bottomNavigation';
import { useLayoutTranslations } from '../../../../hooks';

const NavigationMenu: React.FC = () => {
  const { t } = useLayoutTranslations();
  const [anchorEl, setAnchorEl] = useState<Element | null>(null);
  const open = !!anchorEl;

  const navItems = getNavigation();

  const handleToggle = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  
  return (
    <>
      <Button
        sx={ {
          alignItems: 'center',
          display: 'flex',
          justifyContent: 'center',
          height: '100%',
          flex: 1,
          p: 1,
          ml: 1,
          minWidth: 46,
          '& > .MuiIcon-root': { fontSize: '30px' }
        } }
        onClick={ handleToggle }
      >
        <Icon>apps</Icon>
      </Button>
      <Popover
        anchorEl={ anchorEl }
        anchorOrigin={ {
          vertical: 'bottom',
          horizontal: 'right'
        } }
        transformOrigin={ {
          vertical: 'top',
          horizontal: 'right'
        } }
        id="navigationMenu"
        open={ open }
        onClose={ handleClose }
      >
        <Box sx={ {
          p: 2,
          width: { xs: '100%', sm: '400px' }
        } }>
          { navItems.map(item => (
            <Button
              key={ item.path }
              sx={ {
                flexDirection: 'column',
                m: 1,
                py: 2,
                width: { xs: 'calc(50% - 16px)', sm: 'calc(33% - 16px)' }
              } }
            >
              <Icon>{ item.icon }</Icon>
              <Typography variant="button" component="span">
                { t(item.label) }
              </Typography>
            </Button>
          ))
          }
        </Box>
      </Popover>
    </>
  );
};

export default NavigationMenu;
