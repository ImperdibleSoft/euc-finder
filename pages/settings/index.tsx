/* eslint-disable max-lines */
import { Button, Card, CardActions, CardContent, Grid, Typography } from '@mui/material';
import Head from 'next/head';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import Dropdown from '../../components/Form/Dropdown';
import Text from '../../components/Form/Text';
import SimpleLayout from '../../components/Layouts/SimpleLayout';
import { APP_NAME, KEYWORDS } from '../../constants';
import { useSettings, useSettingsTranslations } from '../../hooks';
import { defaultMeasureUnits, resetMeasureUnits } from '../../store/actions';
import { LOCAL_STORAGE_KEY, TranslationFile } from '../../types';
import { removeItem, setItem } from '../../utils';
import { getTranslationsFromFiles } from '../../utils-server';

// eslint-disable-next-line max-lines-per-function
const Settings: React.FC = () => {
  const { t } = useSettingsTranslations();
  const dispatch = useDispatch();
  const [render, setRender] = useState(false);
  const {
    systemFields,
    interfaceFields,
    measureUnitFields
  } = useSettings();

  useEffect(() => {
    setRender(true);
  }, []);

  const handleSaveMeasureUnits = () => {
    measureUnitFields.forEach(field => {
      const key = `eucFinder_${ field.name }MeasureUnit` as LOCAL_STORAGE_KEY;

      if (field.value) {
        setItem(key, field.value);
      } else {
        removeItem(key);
      }
    });
  };

  const handleDefaultMeasureUnits = () => {
    dispatch(defaultMeasureUnits());
  };

  const handleResetMeasureUnits = () => {
    dispatch(resetMeasureUnits());
  };
  
  const pageTitle = `${ t('settings-title') } - ${ APP_NAME }`;

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

        { render && (
          <Grid container spacing={ 2 }>
            <Grid item xs={ 12 } sm={ 6 } md={ 8 }>
              <Grid container spacing={ 2 }>
                <Grid item xs={ 12 } md={ 6 }>
                  <Card>
                    <CardContent>
                      <Typography variant="h5" component="div" sx={ { mb: 3 } }>
                        { t('system-title') }
                      </Typography>

                      { systemFields.map(field => {
                        // eslint-disable-next-line 
                        if ('options' in field) {
                          return <Dropdown key={ field.name } { ...field } />;
                        }

                        return <Text key={ field.name } { ...field } />;
                      }) }
                    </CardContent>
                  </Card>
                </Grid>

                <Grid item xs={ 12 } md={ 6 }>
                  <Card>
                    <CardContent>
                      <Typography variant="h5" component="div" sx={ { mb: 3 } }>
                        { t('interface-title') }
                      </Typography>

                      { interfaceFields.map(field => (
                        <Dropdown
                          key={ field.name }
                          { ...field }
                        />
                      )) }
                    </CardContent>
                  </Card>
                </Grid>
              </Grid>
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
                  <Button variant="outlined" size="small" onClick={ handleDefaultMeasureUnits } sx={ { mr: 'auto' } }>
                    { t('default-btn') }
                  </Button>
                  <Button variant="outlined" size="small" onClick={ handleResetMeasureUnits }>
                    { t('cancel-btn') }
                  </Button>
                  <Button variant="outlined" size="small" onClick={ handleSaveMeasureUnits }>
                    { t('save-btn') }
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          </Grid>
        ) }
      </SimpleLayout>
    </>
  );
};

export default Settings;

export const getStaticProps = getTranslationsFromFiles([TranslationFile.settings], 'none');
