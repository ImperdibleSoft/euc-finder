import { Typography } from '@mui/material';
import React from 'react';
import { useWheelsDetailsTranslations } from '../../../../hooks';

const EmptyCase: React.FC = () => {
  const { t } = useWheelsDetailsTranslations();
  
  return (
    <>
      <Typography variant="h5" component="h1" sx={ { mb: 3 } }>
        { t('noWheel-title') }
      </Typography>

      <Typography variant="body1" component="p">
        { t('noWheel-msg') }
      </Typography>
    </>
  );
};

export default EmptyCase;
