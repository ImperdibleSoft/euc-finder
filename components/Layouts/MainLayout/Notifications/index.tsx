import { Fab, Icon } from '@mui/material';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { BOTTOM_NAVIGATION_HEIGHT } from '../../constants';

interface Props {
  isTablet: boolean;
}

const Notifications: React.FC<Props> = ({ isTablet }) => {
  const { t } = useTranslation();

  const navigateToGroup = () => {
    window.open('https://t.me/EUCFinder');
  };

  return (
    <Fab
      variant={ isTablet ? 'extended' : 'circular' }
      size="large"
      color="secondary"
      aria-label="add"
      sx={ {
        position: 'fixed',
        bottom: 16 + (isTablet ? 0 : BOTTOM_NAVIGATION_HEIGHT),
        right: 16
      } }
      onClick={ navigateToGroup }
    >
      <Icon sx={ { mr: isTablet ? 1 : 0 } }>telegram</Icon>

      { isTablet && t('joinToTelegram-msg') }
    </Fab>
  );
};

export default Notifications;
