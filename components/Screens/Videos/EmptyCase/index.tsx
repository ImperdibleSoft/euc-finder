import { Button, Container, Typography } from '@mui/material';
import React from 'react';
import { useVideosTranslations } from '../../../../hooks';

interface Props {
  handleOpenFilters: () => void
  handleResetFilters: () => void
}

const EmptyCase: React.FC<Props> = ({ handleOpenFilters, handleResetFilters }) => {
  const { t } = useVideosTranslations();

  return (
    <Container sx={ { py: 4, textAlign: 'center' } }>
      <Typography variant="h3" component="p" sx={ { mb: 2 } }>
        { t('noVideos-title') }
      </Typography>

      <Typography variant="body1" component="p" sx={ { mb: 2 } }>
        { t('noVideos-msg') }
      </Typography>

      <Typography variant="body1" component="p" sx={ { mb: 2 } }>
        { t('changeVideoFilters-msg') }
      </Typography>

      <Button
        onClick={ handleOpenFilters }
        sx={ { display: { sm: 'none' }, ml: 2, mt: 2 } }
        variant="contained"
      >
        { t('changeFilters-btn') }
      </Button>

      <Button
        onClick={ handleResetFilters }
        sx={ { ml: { xs: 2, sm: 0 }, mt: { xs: 2, sm: 0 } } }
        variant="outlined"
      >
        { t('resetFilters-btn') }
      </Button>
    </Container>
  );
};

export default EmptyCase;
