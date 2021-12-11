import { Button, Card, CardActions, CardContent, Grid, Typography } from '@mui/material';
import Head from 'next/head';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import Dropdown from '../../components/Form/Dropdown';
import SimpleLayout from '../../components/Layouts/SimpleLayout';
import { APP_NAME, KEYWORDS } from '../../constants';
import { useSettings } from '../../hooks';
import { defaultMeasureUnits, resetMeasureUnits } from '../../store/actions';
import { LOCAL_STORAGE_KEY } from '../../types';
import { removeItem, setItem } from '../../utils';
import { getStaticProps } from '../../utils/serverTranslatedResources';

const Settings: React.FC = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const { languageField, measureUnitFields } = useSettings();

  const handleSave = () => {
    measureUnitFields.forEach(field => {
      const key = `preference_${ field.name }` as LOCAL_STORAGE_KEY;

      if (field.value) {
        setItem(key, field.value);
      } else {
        removeItem(key);
      }
    });
  };

  const handleDefault = () => {
    dispatch(defaultMeasureUnits());
  };

  const handleReset = () => {
    dispatch(resetMeasureUnits());
  };
  
  const pageTitle = `Opciones - ${ APP_NAME }`;

  return (
    <>
      <Head>
        <title>{ pageTitle }</title>

        <meta name="keywords" content={ KEYWORDS.join(', ') } />

        <meta property="og:type" content="website" />
        <meta property="og:title" content={ pageTitle } />
        <meta property="og:image" content={ require('/public/assets/ogImage.png').default?.src } />
        <meta property="og:image:alt" content={ t('appLogo-label', { appName: APP_NAME }) } />
      </Head>

      <SimpleLayout>
        <Typography variant="h4" component="h1" sx={ { mb: 3 } }>
          { t('settings-title') }
        </Typography>

        <Grid container spacing={ 2 }>
          <Grid item xs={ 12 } sm={ 6 } md={ 4 }>
            <Card>
              <CardContent>
                <Typography variant="h5" component="div" sx={ { mb: 3 } }>
                  { t('interface-title') }
                </Typography>

                <Dropdown { ...languageField }/>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={ 12 } sm={ 6 } md={ 4 }>
            <Card>
              <CardContent>
                <Typography variant="h5" component="div" sx={ { mb: 3 } }>
                  { t('measureUnits-title') }
                </Typography>

                { measureUnitFields.map(field => (
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
                <Button variant="outlined" size="small" onClick={ handleDefault } sx={ { mr: 'auto' } }>
                  { t('default-btn') }
                </Button>
                <Button variant="outlined" size="small" onClick={ handleReset }>
                  { t('cancel-btn') }
                </Button>
                <Button variant="outlined" size="small" onClick={ handleSave }>
                  { t('save-btn') }
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

export { getStaticProps };