import { Box, Container, Divider, Link, Typography } from '@mui/material';
import React from 'react';
import { APP_NAME, APP_REPO, APP_VERSION, CURRENT_YEAR } from '../../constants';
import { useArenaContext } from '../../context';

const yearText = CURRENT_YEAR <= 2021 ? CURRENT_YEAR : `2020-${ CURRENT_YEAR }`;

const Footer: React.FC = () => {
  const { disclaimer } = useArenaContext();
  
  return (
    <>
      <Divider sx={ { mt: 5 } }  />

      <Container sx={ {
        pb: 3,
        pt: 5,
        textAlign: 'center'
      } }>
        <Box sx={ { mb: 4 } }>
          { APP_NAME } { yearText } — v{ APP_VERSION } { 'en ' }

          <Link href={ APP_REPO } target="_blank" rel="noreferrer">
            Github
          </Link>

          { ' — Creado por ' }
          <Link href="https://imperdiblesoft.com" target="_blank" rel="noreferrer">
            ImperdibleSoft
          </Link>
        </Box>

        <Box sx={ { mb: 4 } }>
          <Link sx={ { cursor: 'pointer' } } onClick={ disclaimer.handleOpen }>
            Información
          </Link>

          { ' sobre los modelos y autonomías mostradas.' }
        </Box>

        <Box>
          <Typography variant="subtitle2" component="p">
            Esta página no está relacionada ni depende de ninguna de las tiendas que puedan ser mostradas.
          </Typography>
          <Typography variant="subtitle2" component="p">
            Sin embargo, algunos de los enlaces mostrados pueden estar patrocinados por algunas de estas tiendas.
          </Typography>
        </Box>
      </Container>
    </>
  );};

export default Footer;