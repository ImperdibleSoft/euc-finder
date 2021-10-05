import { Button, Container, Typography } from '@mui/material';
import React from 'react';

interface Props {
  handleOpenFilters: () => void
  handleResetFilters: () => void
}

const NoWheels: React.FC<Props> = ({ handleOpenFilters, handleResetFilters }) => (
  <Container sx={ { py: 4, textAlign: 'center' } }>
    <Typography variant="h3" component="p" sx={ { mb: 2 } }>
      Ooops!
    </Typography>

    <Typography variant="body1" component="p" sx={ { mb: 2 } }>
      No hay ruedas que coincidan con tus criterios de búsqueda.
    </Typography>

    <Typography variant="body1" component="p" sx={ { mb: 2 } }>
      Relaja o reinicia los filtros para encontrar alguna opción que se acerque a lo que estás buscando.
    </Typography>

    <Button
      onClick={ handleOpenFilters }
      sx={ { display: { sm: 'none' }, ml: 2, mt: 2 } }
      variant="contained"
    >
      Cambiar filtros
    </Button>

    <Button
      onClick={ handleResetFilters }
      sx={ { ml: { xs: 2, sm: 0 }, mt: { xs: 2, sm: 0 } } }
      variant="outlined"
    >
      Reiniciar filtros
    </Button>
  </Container>
);

export default NoWheels;