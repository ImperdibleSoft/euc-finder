import { Container, Divider, Link, Typography } from '@mui/material';
import React from 'react';
import { APP_NAME, APP_REPO, APP_VERSION, CURRENT_YEAR } from '../../constants';

const Footer: React.FC = () => (
  <>
    <Divider sx={ { mt: 5 } }  />

    <Container sx={ {
      pb: 3,
      pt: 5,
      textAlign: 'center'
    } }>
      <div style={ { marginBottom: 24 } }>
        { APP_NAME } 2020-{ CURRENT_YEAR } — v{ APP_VERSION } { 'en ' }

        <Link href={ APP_REPO } target="_blank" rel="noreferrer">
            Github
        </Link>
      </div>

      <Typography variant="subtitle2" component="p">
        Disclaimer 1
      </Typography>
      <Typography variant="subtitle2" component="p">
        Disclaimer 2
      </Typography>
    </Container>
  </>
);

export default Footer;