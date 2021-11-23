import { Icon, SpeedDial, SpeedDialAction } from '@mui/material';
import React from 'react';
import { useTranslation } from 'react-i18next';

interface Props {
  isTablet: boolean;
}

const Notifications: React.FC<Props> = ({ isTablet }) => {
  const { t } = useTranslation();

  const navigateToGroup = () => {
    window.open('https://t.me/EUCFinder');
  };
  
  return (
    <SpeedDial
      ariaLabel={ t('stayUpdated-msg') }
      FabProps={ { sx: { backgroundColor: ({ palette }) => palette.secondary.main } } }
      icon={ <Icon >notifications</Icon> }
      sx={ {
        position: 'fixed',
        bottom: 16 + (isTablet ? 0 : 56),
        right: 16
      } }
    >
      <SpeedDialAction
        icon={ <Icon>telegram</Icon> }
        onClick={ navigateToGroup }
        tooltipOpen
        tooltipTitle={ t('joinToTelegram-msg') }
      />
    </SpeedDial>
  );
};

export default Notifications;
