import { Badge, Box, Button, Fab, Icon, Popover, Theme, Typography, useTheme } from '@mui/material';
import Image from 'next/image';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { EUC_FINDER, EUC_FINDER_DETAILS } from '../../../../constants/clientRoutes';
import getNavigation from '../../../../constants/navigation';
import { useLayoutTranslations } from '../../../../hooks';
import { getNewVideosLength } from '../../../../store/selectors';
import { isDesktop } from '../../../../utils';
import { HEADER_HEIGHT } from '../../constants';

const navItems = getNavigation();

const isSameRoute = (pathname: string, path: string) => {
  if (path === EUC_FINDER) {
    return pathname === path || pathname === EUC_FINDER_DETAILS.replace(':id', '[id]');
  }
  
  return pathname.startsWith(path);
};

const renderCustomIcon = (icon: string, dark = true, badge = 0) => {
  switch (icon) {
    case 'instagram':
      return (
        <Box component="span" sx={ {
          height: 24,
          '& img': { filter: dark ? 'grayscale(1) invert(1)' : undefined }
        } }>
          <Image
            alt="presentation"
            height="24"
            src="/logos/instagram-icon.png"          
            width="24"
          />
        </Box>
      );

    case 'smart_display':
      return (
        <Badge badgeContent={ badge } color="secondary">
          <Icon>
            { icon }
          </Icon>
        </Badge>
      );

    default:
      return <Icon>{ icon }</Icon>;
  }
};

const NavigationMenu: React.FC = () => {
  const { t } = useLayoutTranslations();
  const router = useRouter();
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';
  const newVideos = useSelector(getNewVideosLength());
  const [anchorEl, setAnchorEl] = useState<Element | null>(null);
  const open = !!anchorEl;

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
      <Fab
        color="secondary"
        size="large"
        variant="circular"
        sx={ {
          position: 'fixed',
          bottom: 16,
          right: 16 + ((open && isDesktop()) ? 17 : 0),
          '& > .MuiIcon-root': { fontSize: '30px' }
        } }
        onClick={ handleToggle }
      >
        <Icon>apps</Icon>
      </Fab>

      <Popover
        anchorEl={ anchorEl }
        anchorOrigin={ {
          vertical: 'top',
          horizontal: 'right'
        } }
        transformOrigin={ {
          vertical: 'bottom',
          horizontal: 'right'
        } }
        id="navigationMenu"
        open={ open }
        onClose={ handleClose }
        sx={ { maxHeight: `calc(100vh - ${ HEADER_HEIGHT }px)` } }
        PaperProps={ { sx: { mt: -2 } } }
      >
        <Box sx={ {
          textAlign: 'right',
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
              { renderCustomIcon(item.icon, isDark, newVideos) }

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
