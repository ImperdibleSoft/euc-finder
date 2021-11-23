import { BottomNavigationAction, BottomNavigation as MuiBottomNavigation, Icon, Paper, Theme } from '@mui/material';
import { SxProps } from '@mui/system';
import { useRouter } from 'next/router';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { BOTTOM_SHEET } from '../../../../constants';
import { BOTTOM_NAVIGATION_HEIGHT, HEADER_HEIGHT, NAV_SIDEBAR_WIDTH } from '../../constants';

interface Props {
  isTablet: boolean;
}

const BottomNavigation: React.FC<Props> = ({ isTablet }) => {
  const { t } = useTranslation();
  const { pathname, push } = useRouter();
  const [firstPath] = pathname.replace(/^\//, '').split('/');

  
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
      justifyContent: isTablet ? 'flex-start' : 'center'
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
          value={ `/${ firstPath }` }
        >
          { BOTTOM_SHEET.map(({ icon, label, path }) => {
            const isSelected = () => `/${ firstPath }` === path;

            return (
              <BottomNavigationAction
                key={ label }
                icon={ <Icon color={ isSelected() ? 'secondary' : 'action' }>{ icon }</Icon> }
                label={ t(label) }
                value={ path }
                sx={ {
                  my: isTablet ? 2 : 0,
                  '&.Mui-selected': { color: ({ palette }) =>palette.secondary.main } 
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