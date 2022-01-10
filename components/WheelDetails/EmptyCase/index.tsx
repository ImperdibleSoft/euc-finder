import { Typography } from '@mui/material';
import React from 'react';
import { useTranslation } from 'react-i18next';

const EmptyCase: React.FC = () => {
  const { t } = useTranslation();
  
  return (
    <>
      <Typography variant="h5" component="h1" sx={ { mb: 3 } }>
        { t('emptyCase-title') }
      </Typography>

      <Typography variant="body1" component="p">
        { t('noWheel-msg') }
      </Typography>
    </>
  );
};

export default EmptyCase;