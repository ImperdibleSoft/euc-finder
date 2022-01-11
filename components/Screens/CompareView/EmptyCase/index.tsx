import { Container, Typography } from '@mui/material';
import React, { PropsWithChildren } from 'react';
import { useTranslation } from 'react-i18next';

const EmptyCase: React.FC<PropsWithChildren<{}>> = ({ children }) => {
  const { t } = useTranslation();

  return (
    <Container sx={ { py: 4, textAlign: 'center' } }>
      <Typography variant="h3" component="p" sx={ { mb: 2 } }>
        { t('emptyCase-title') }
      </Typography>

      <Typography variant="body1" component="p" sx={ { mb: 2 } }>
        { t('noWheelsToCompare-msg') }
      </Typography>

      <Typography variant="body1" component="p" sx={ { mb: 2 } }>
        { t('addWheelsToCompare-msg') }
      </Typography>

      { children }
    </Container>
  );
};

export default EmptyCase;