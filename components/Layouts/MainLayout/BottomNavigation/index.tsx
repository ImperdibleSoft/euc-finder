import { BottomNavigationAction, BottomNavigation as MuiBottomNavigation, Icon, Paper } from '@mui/material';
import { useRouter } from 'next/router';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { BOTTOM_SHEET } from '../../../../constants';

const BottomNavigation: React.FC = () => {
  const { t } = useTranslation();
  const { pathname, push } = useRouter();
  const [firstPath] = pathname.replace(/^\//, '').split('/');

  const handleChange = (event: unknown, newValue: string) => {
    push(newValue);
  };

  return (
    <Paper sx={ { position: 'fixed', bottom: 0, left: 0, right: 0 } } elevation={ 3 }>
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
              sx={ { '&.Mui-selected': { color: ({ palette }) =>palette.secondary.main } } }
            />
          );
        }) }
      </MuiBottomNavigation>
    </Paper>
  );
};

export default BottomNavigation;