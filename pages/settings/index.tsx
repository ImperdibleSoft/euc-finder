/* eslint-disable max-lines */
import { Box, Button, ButtonGroup, Card, CardActions, CardContent, Divider, Grid, Typography } from '@mui/material';
import Head from 'next/head';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import Dropdown from '../../components/Form/Dropdown';
import Slider from '../../components/Form/Slider';
import SimpleLayout from '../../components/Layouts/SimpleLayout';
import { APP_NAME, KEYWORDS } from '../../constants';
import { useSettings, useSettingsTranslations } from '../../hooks';
import { defaultMeasureUnits, resetMeasureUnits } from '../../store/actions';
import { SpecWeightsPreset } from '../../store/types';
import { LOCAL_STORAGE_KEY, TranslationFile } from '../../types';
import { removeItem, setItem } from '../../utils';
import { getTranslationsFromFiles } from '../../utils-server';

// eslint-disable-next-line max-lines-per-function
const Settings: React.FC = () => {
  const { t } = useSettingsTranslations();
  const dispatch = useDispatch();
  const [render, setRender] = useState(false);
  const {
    interfaceFields,
    measureUnitFields,
    activePreset,
    handleChangePreset,
    specWeightsFields
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
            <Grid item xs={ 12 } sm={ 6 } md={ 4 }>
              <Card sx={ { mb: 2 } }>
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

            <Grid item xs={ 12 } sm={ 6 } md={ 8 }>
              <Card>
                <CardContent>
                  <Typography variant="h5" component="div" gutterBottom>
                    { t('compare-title') }
                  </Typography>

                  <Typography variant="body1" component="p" gutterBottom>
                    { t('settingsSpecWeights-msg') }
                  </Typography>
                  <Divider />
                  
                  <Typography variant="body1" component="p" sx={ { my: 2 } }>
                    { t('settingsSpecWeightsPresets-msg') }
                  </Typography>

                  <Box sx={ {
                    alignItems: 'center',
                    textAlign: 'center',
                    justifyContent: 'center',
                    maxWidth: '100%',
                    mt: 2,
                    overflow: 'hidden',
                    overflowX: 'auto',
                    pb: 2,
                    pr: '1px'
                  } }
                  >
                    <ButtonGroup variant="outlined" disableElevation>
                      { Object.values(SpecWeightsPreset).map(preset => (
                        <Button
                          key={ `${ preset }-preset` }
                          variant={ activePreset === preset ? 'contained' : undefined }
                          onClick={ () => handleChangePreset(preset) }
                        >
                          { t(`${ preset }Preset-label`) }
                        </Button>
                      )) }
                    </ButtonGroup>
                  </Box>
                  <Divider />

                  <Typography variant="body1" component="p" sx={ { my: 2 } }>
                    { t('settingsSpecWeightsCustom-msg') }
                  </Typography>
                
                  <Grid container spacing={ { xs: 0, md: 6 } }>
                    <Grid item xs={ 12 } md={ 6 }>
                      { specWeightsFields.slice(0, 8).map(field => (
                        <Slider
                          key={ field.name }
                          { ...field }
                          style={ {
                            marginBottom: 24,
                            ...field.style
                          } }
                        />
                      )) }
                    </Grid>

                    <Grid item xs={ 12 } md={ 6 }>
                      { specWeightsFields.slice(8).map(field => (
                        <Slider
                          key={ field.name }
                          { ...field }
                          style={ {
                            marginBottom: 24,
                            ...field.style
                          } }
                        />
                      )) }
                    </Grid>
                  </Grid>
                </CardContent>
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
