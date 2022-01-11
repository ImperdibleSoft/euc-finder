import { Container } from '@mui/material';
import React from 'react';
import { useTranslation } from 'react-i18next';

const LoadingScreen: React.FC = () => {
  const { t } = useTranslation();

  return (
    <Container sx={ {
      alignItems: 'center',
      display: 'flex',
      flex: 1,
      justifyContent: 'center'
    } }>
      { t('loading-msg') }
    </Container>
  );
};

export default LoadingScreen;