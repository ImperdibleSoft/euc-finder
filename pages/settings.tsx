import { Button, Card, CardActions, CardContent, Grid, Typography } from '@mui/material';
import Head from 'next/head';
import React from 'react';
import Dropdown from '../components/Form/Dropdown';
import SimpleLayout from '../components/Layouts/SimpleLayout';
import { APP_NAME, KEYWORDS } from '../constants';
import { useSettings } from '../hooks';

const Settings: React.FC = () => {
  const fields = useSettings();
  
  const pageTitle = `Opciones - ${ APP_NAME }`;
  const keywords = KEYWORDS.join(', ');

  return (
    <>
      <Head>
        <title>{ pageTitle }</title>

        <meta name="keywords" content={ keywords } />

        <meta property="og:type" content="article" />
        <meta property="og:title" content={ pageTitle } />
      </Head>

      <SimpleLayout>
        <Typography variant="h4" component="h1" sx={ { mb: 3 } }>
          Opciones
        </Typography>

        <Grid container>
          <Grid item xs={ 12 } sm={ 6 } md={ 4 }>
            <Card>
              <CardContent>
                <Typography variant="h5" component="div" sx={ { mb: 3 } }>
                  Unidades de medida
                </Typography>

                { fields.map(field => (
                  <Dropdown
                    key={ field.name }
                    { ...field }
                    style={ {
                      marginBottom: 24,
                      ...field.style
                    } }
                  />
                )) }
              </CardContent>
              <CardActions sx={ { alignItems: 'flex-end', justifyContent: 'flex-end' } }>
                <Button variant="outlined" size="small" onClick={ () => { return; } }>
                  Guardar
                </Button>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
      </SimpleLayout>
    </>
  );
};

export default Settings;