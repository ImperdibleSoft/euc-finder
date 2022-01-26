import {
  Badge,
  BottomNavigation as MuiBottomNavigation,
  BottomNavigationAction,
  Icon,
  Paper,
  SxProps,
  Theme
} from '@mui/material';
import { useRouter } from 'next/router';
import React, { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { getDesktopNavigation, getMobileNavigation } from '../../../../constants';
import { EUCS_PREFIX, VIDEOS } from '../../../../constants/clientRoutes';
import { useLayoutTranslations } from '../../../../hooks';
import { getNewVideosLength } from '../../../../store/selectors';
import { BOTTOM_NAVIGATION_HEIGHT, HEADER_HEIGHT, NAV_SIDEBAR_WIDTH } from '../../constants';

interface Props {
  isTablet: boolean;
}

const BottomNavigation: React.FC<Props> = ({ isTablet }) => {
  const { t } = useLayoutTranslations();
  const { pathname, push } = useRouter();
  const [firstPathSection] = pathname.replace(/^\//, '').split('/');
  const navigation = useMemo(() => {
    const getter = isTablet ? getDesktopNavigation : getMobileNavigation;
    return getter();
  }, [isTablet]);
  const newVideos = useSelector(getNewVideosLength());

  const currentPathFirstSection = firstPathSection === '' ? EUCS_PREFIX.replace(/^\//, '') : firstPathSection;

  const minWidth = 100 / navigation.length;
  const tabletStyles: SxProps<Theme> = {
    alignItems: 'flex-start',
    borderRadius: 0,
    bottom: isTablet ? undefined : 0,
    height: isTablet ? '100vh' : undefined,
    justifyContent: 'flex-start',
    maxHeight: `calc(100vh - ${ HEADER_HEIGHT }px)`,
    overflow: 'hidden',
    overflowY: 'auto',
    left: 0,
    position: 'fixed',
    right: isTablet ? undefined : 0,
    top: isTablet ? HEADER_HEIGHT : undefined,
    width: isTablet ? NAV_SIDEBAR_WIDTH : '100%',
    zIndex: 1200,
    '& > .MuiBottomNavigation-root': {
      flexDirection: isTablet ? 'column' : 'row',
      justifyContent: isTablet ? 'flex-start' : 'center',
      height: 'auto'
    }
  };

  const handleChange = (event: unknown, newValue: string) => {
    push(newValue);
  };

  return (
    <>
      { !isTablet && (
        <div
          className="BottomNavigation-spacer"
          style={ {
            display: 'block',
            height: BOTTOM_NAVIGATION_HEIGHT,
            minHeight: BOTTOM_NAVIGATION_HEIGHT,
            position: 'relative',
            width: '100%'
          } }
        />
      ) }

      <Paper sx={ tabletStyles } elevation={ 3 }>
        <MuiBottomNavigation
          onChange={ handleChange }
          showLabels
          value={ `/${ currentPathFirstSection }` }
        >
          { navigation.map(bottomNavItem => {
            const currentItemPath = bottomNavItem.path === '/' ? EUCS_PREFIX : bottomNavItem.path;
            const isSelected = () => `/${ currentPathFirstSection }` === currentItemPath;
            const badge = bottomNavItem.path === VIDEOS ? newVideos : undefined;

            return (
              <BottomNavigationAction
                key={ bottomNavItem.label }
                icon={ (
                  <Badge badgeContent={ badge } color="secondary">
                    <Icon color={ isSelected() ? 'secondary' : 'action' }>
                      { bottomNavItem.icon }
                    </Icon>
                  </Badge>
                ) }
                label={ t(bottomNavItem.label) }
                value={ bottomNavItem.path }
                sx={ {
                  my: isTablet ? 2 : 0,
                  minWidth: isTablet ? undefined : `${ minWidth }%`,
                  py: 1.5,
                  
                  color: ({ palette }: Theme) => isSelected() ? palette.secondary.main : undefined,
                  '&.Mui-selected': { color: ({ palette }: Theme) => palette.secondary.main },

                  '& .MuiBottomNavigationAction-label': {
                    color: 'inherit !important',
                    fontSize: isSelected() ? 14 : undefined
                  }
                } }
              />
            );
          }) }
        </MuiBottomNavigation>
      </Paper>

      { isTablet && (
        <div
          className="BottomNavigation-spacer"
          style={ {
            height: '100vh',
            minWidth: NAV_SIDEBAR_WIDTH,
            width: NAV_SIDEBAR_WIDTH
          } }
        />
      ) }
    </>
  );
};

export default BottomNavigation;
