import { Container, Typography } from '@mui/material';
import React from 'react';
import { useTranslation } from 'react-i18next';

const EmptyCase: React.FC = () => {
  const { t } = useTranslation();

  return (
    <Container sx={ { py: 4, textAlign: 'center' } }>
      <Typography variant="h3" component="p" sx={ { mb: 2 } }>
        { t('emptyCase-title') }
      </Typography>

      <Typography variant="body1" component="p" sx={ { mb: 2 } }>
        { t('noInfluencers-msg') }
      </Typography>
      
    </Container>
  );
};

export default EmptyCase;