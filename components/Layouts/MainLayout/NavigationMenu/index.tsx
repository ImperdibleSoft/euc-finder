import { Box, Button, Icon, Popover, Theme, Typography } from '@mui/material';
import Image from 'next/image';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { EUC_FINDER, EUC_FINDER_DETAILS } from '../../../../constants/clientRoutes';
import getNavigation from '../../../../constants/navigation';
import { useLayoutTranslations } from '../../../../hooks';

const isSameRoute = (pathname: string, path: string) => {
  if (path === EUC_FINDER) {
    return pathname === path || pathname === EUC_FINDER_DETAILS.replace(':id', '[id]');
  }
  
  return pathname.startsWith(path);
};

const renderCustomIcon = (icon: string, dark = true) => {
  switch (icon) {
    case 'instagram':
      return (
        <Box component="span" sx={ { '& img': { filter: dark ? 'grayscale(1) invert(1)' : undefined } } }>
          <Image
            alt="presentation"
            height="24"
            src="/logos/instagram-icon.png"          
            width="24"
          />
        </Box>
      );

    default:
      return <Icon>{ icon }</Icon>;
  }
};

const NavigationMenu: React.FC = () => {
  const { t } = useLayoutTranslations();
  const router = useRouter();
  const [anchorEl, setAnchorEl] = useState<Element | null>(null);
  const open = !!anchorEl;

  const navItems = getNavigation();

  const handleToggle = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const onClick = (path: string) => {
    handleClose();

    if (path.startsWith('/')) {
      router.push(path);
    } else {
      window.open(path);
    }
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
        sx={ { maxHeight: { xs: '350px', sm: 'none' } } }
      >
        <Box sx={ {
          p: 2,
          width: { xs: '100%', sm: '500px' }
        } }>
          { navItems.map(item => (
            <Button
              key={ item.path }
              className={ router.pathname === item.path ? 'active' : undefined }
              onClick={ () => { onClick(item.path); } }
              sx={ {
                color: ({ palette }: Theme) =>
                  palette[isSameRoute(router.pathname, item.path) ? 'secondary' : 'primary'].main,
                flexDirection: 'column',
                m: 1,
                py: 2,
                width: { xs: 'calc(50% - 16px)', sm: 'calc(25% - 16px)' }
              } }
            >
              { renderCustomIcon(item.icon) }

              <Typography variant="button" component="span" sx={ { mt: 1 } }>
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
