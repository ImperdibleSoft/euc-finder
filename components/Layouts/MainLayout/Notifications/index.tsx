import { Icon, SpeedDial, SpeedDialAction } from '@mui/material';
import React from 'react';
import { useTranslation } from 'react-i18next';

const Notifications: React.FC = () => {
  const { t } = useTranslation();
  const navigateToTelegram = () => {
    window.open('https://t.me/joinchat/dGqzjV3hD_dhOGFh');
  };
  
  return (
    <SpeedDial
      ariaLabel={ t('stayUpdated-msg') }
      FabProps={ { sx: { backgroundColor: ({ palette }) => palette.secondary.main } } }
      icon={ <Icon >notifications</Icon> }
      sx={ {
        position: 'fixed',
        bottom: 16,
        right: 16
      } }
    >
      <SpeedDialAction
        key="telegram"
        icon={ <Icon>telegram</Icon> }
        onClick={ navigateToTelegram }
        tooltipOpen
        tooltipTitle={ t('subscribeToTelegram-msg') }
      />
    </SpeedDial>
  );
};

export default Notifications;
