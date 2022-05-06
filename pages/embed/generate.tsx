/* eslint-disable max-lines */
import { Box, Button, ButtonGroup, Card, CardContent, Typography } from '@mui/material';
import React, { useMemo, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import Checkbox from '../../components/Form/Checkbox';
import Dropdown, { DropdownItem } from '../../components/Form/Dropdown';
import MultiSelect from '../../components/Form/MultiSelect';
import Textarea from '../../components/Form/Textarea';
import SimpleLayout from '../../components/Layouts/SimpleLayout';
import WheelSelector from '../../components/WheelSelector';
import { APP_URL, wheelFeatureIcons } from '../../constants';
import { EMBED } from '../../constants/clientRoutes';
import { commonNs, useBreakpoints, useEmbedTranslations, useResize } from '../../hooks';
import { useCopyToClipboard } from '../../hooks/copyToClipboard';
import { getBrands, getTableViewSpecs, getWheels } from '../../store/selectors';
import { TranslationFile, WheelFeatureIcons, WheelId } from '../../types';
import { getTranslationsFromFiles } from '../../utils-server';

const commonStyles: React.CSSProperties = {
  display: 'flex',
  flex: 1,
  flexDirection: 'column',
  padding: 8
};

const defaults = {
  language: 'en',
  darkMode: 'false',
  icons: 'true',
  limits: 'false',
  wheelId: WheelId.v12,
  title: 'true',
  picture: 'true',
  features: ['diameter', 'maxSpeed', 'range', 'weight']
};

// eslint-disable-next-line max-lines-per-function
const EmbedGenerate = () => {
  const { t, i18n } = useEmbedTranslations();
  const ref = useRef<HTMLDivElement>(null);
  const { sm } = useBreakpoints();
  const { rect, screenWidth } = useResize(ref);
  const { canCopy, copied, handleCopy: copy } = useCopyToClipboard();
  const brands = useSelector(getBrands);
  const wheels = useSelector(getWheels);
  const availableFeatures = useSelector(getTableViewSpecs);

  const [language, setLanguage] = useState(i18n.language);
  const [darkMode, setDarkMode] = useState(defaults.darkMode);
  const [limits, setLimits] = useState(defaults.limits);
  const [wheelId, setWheelId] = useState(defaults.wheelId);
  const [title, setTitle] = useState(defaults.title);
  const [picture, setPicture] = useState(defaults.picture);
  const [icons, setIcons] = useState(defaults.icons);
  const [features, setFeatures] = useState(defaults.features);

  const getWidgetUrl = (params?: typeof defaults) => {
    const appUrl = process.env.NODE_ENV === 'production' ? APP_URL : 'http://localhost:3000';
    const baseUrl = `${ appUrl }/${ params?.language ?? language }${ EMBED }`;
    const theme = `dark=${ params?.darkMode ?? darkMode }`;
    const displayLimits = `limits=${ params?.limits ?? limits }`;
    const wheel = `wheelId=${ params?.wheelId ?? wheelId }`;
    const displayTitle = `title=${ params?.title ?? title }`;
    const displayPicture = `picture=${ params?.picture ?? picture }`;
    const displayIcons = `icons=${ params?.icons ?? icons }`;
    const feats = `features=${ (params?.features ?? features).join(',') }`;

    // eslint-disable-next-line max-len
    return `${ baseUrl }?${ theme }&${ displayLimits }&${ wheel }&${ displayTitle }&${ displayPicture }&${ displayIcons }&${ feats }`;
  };
  const [frameUrl, setFrameUrl] = useState(getWidgetUrl());

  const getIframeCode = () =>`<iframe\n  frameborder="0"\n  height="700"\n  src="${ frameUrl }"\n  width="100%"\n/>`;

  const handleChangeLanguage = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const { value } = event.target;
    setLanguage(value);
  };

  const handleChangeDarkMode = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.checked;
    setDarkMode(value.toString());
  };

  const handleChangeLimits = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.checked;
    setLimits(value.toString());
  };

  const handleChangeWheel = (value: WheelId) => {
    setWheelId(value);
  };

  const handleChangeTitle = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.checked;
    setTitle(value.toString());
  };

  const handleChangePicture = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.checked;
    setPicture(value.toString());
  };

  const handleChangeIcons = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.checked;
    setIcons(value.toString());
  };

  const featureOptions = useMemo(() => availableFeatures.map((feature): DropdownItem<string> => ({
    label: t(feature, commonNs),
    icon: wheelFeatureIcons[feature as unknown as keyof WheelFeatureIcons],
    value: feature
  })), [availableFeatures, t]);
  const handleChangeFeatures = (value: string[]) => {
    setFeatures(value);
  };

  const handleUpdateWidget = () => {
    const widgetUrl = getWidgetUrl();
    setFrameUrl(widgetUrl);
  };

  const handleResetWidget = async () => {
    setLanguage(i18n.language);
    setDarkMode(defaults.darkMode);
    setLimits(defaults.limits);
    setWheelId(defaults.wheelId);
    setTitle(defaults.title);
    setPicture(defaults.picture);
    setIcons(defaults.icons);
    setFeatures(defaults.features);
    setFrameUrl(getWidgetUrl({ ...defaults, language: i18n.language }));
  };

  const handleCopy = () => {
    copy(getIframeCode());
  };

  return (
    <>
      <SimpleLayout>
        <Box
          id="EmbedGenerate-wrapper"
          ref={ ref }
          sx={ {
            display: 'flex',
            flexDirection: {
              xs: 'column',
              md: 'row'
            },
            height: '100%',
            justifyContent: 'center'
          } }
        >
          <Box sx={ { flex: 1 } }>
            <Card style={ commonStyles } sx={ { mb: 2 } }>
              <CardContent>
                <Typography variant="h5" sx={ { mb: 2 } }>
                  { t('customizeWidget-title') }
                </Typography>

                <Dropdown
                  fullWidth={ false }
                  label={ t('language-label', commonNs) }
                  name="language"
                  onChange={ handleChangeLanguage }
                  options={ [
                    {
                      label: t('en-label', commonNs),
                      value: 'en'
                    },
                    {
                      label: t('es-label', commonNs),
                      value: 'es'
                    },
                    {
                      label: t('fr-label', commonNs),
                      value: 'fr'
                    }
                  ] }
                  value={ language }
                />

                <Checkbox
                  checked={ darkMode !== 'false' }
                  label={ t('darkMode-label') }
                  name="darkMode"
                  onChange={ handleChangeDarkMode }
                />

                <Checkbox
                  checked={ limits !== 'false' }
                  label={ t('limits-label') }
                  name="limits"
                  onChange={ handleChangeLimits }
                />

                <label style={ { display: 'inline-flex', flexDirection: 'column' } }>
                  <Typography variant="caption">
                    { t('wheelId-label') }
                  </Typography>

                  <WheelSelector
                    brands={ brands }
                    onChange={ handleChangeWheel }
                    wheels={ wheels }
                  />
                </label>

                <Checkbox
                  checked={ title !== 'false' }
                  label={ t('title-label') }
                  name="title"
                  onChange={ handleChangeTitle }
                />

                <Checkbox
                  checked={ picture !== 'false' }
                  label={ t('picture-label') }
                  name="picture"
                  onChange={ handleChangePicture }
                />

                <Checkbox
                  checked={ icons !== 'false' }
                  label={ t('icons-label') }
                  name="icons"
                  onChange={ handleChangeIcons }
                />

                <MultiSelect
                  fullWidth={ false }
                  label={ t('features-label') }
                  name="features"
                  onChange={ handleChangeFeatures }
                  options={ featureOptions }
                  value={ features }
                />

                <ButtonGroup
                  orientation={ sm ? 'horizontal' : 'vertical' }
                  sx={ { justifyContent: 'flex-end', mt: 2, width: '100%' } }
                >
                  <Button variant="contained" onClick={ handleUpdateWidget }>
                    { t('updateWidget-btn') }
                  </Button>
                  <Button onClick={ handleResetWidget }>
                    { t('reset-btn') }
                  </Button>
                </ButtonGroup>
              </CardContent>
            </Card>

            <Card>
              <CardContent sx={ { p: 0, '&:last-child': { pb: 0 } } }>
                <Typography variant="h5" sx={ { my: 2, px: 2 } }>
                  { t('widgetCode-title') }
                </Typography>

                <Textarea
                  disabled
                  minRows={ 7 }
                  style={ { height: '100%', width: '100%' } }
                  value={ getIframeCode() }
                />

                { canCopy && (
                  <ButtonGroup sx={ { justifyContent: 'flex-end', mb: 2, mt: 1, px: 2, width: '100%' } }>
                    <Button variant="contained" onClick={ handleCopy }>
                      { t('copy-btn', commonNs) }
                    </Button>
                  </ButtonGroup>
                ) }
              </CardContent>
            </Card>
          </Box>
    
          <Box
            sx={ {
              maxWidth: 320,
              minWidth: 280,
              ml: { md: 2 },
              mt: { xs: 2, md: 0 },
              mx: 'auto',
              width: '100%'
            } }
          >
            <iframe
              frameBorder={ 0 }
              // height={ 700 }
              height={
                screenWidth >= 900
                  ? Math.floor(rect?.height ?? 700) - 7
                  : 700
              }
              src={ frameUrl }
              width="100%"
            />
          </Box>
        </Box>
      </SimpleLayout>
    </>
  );
};

export default EmbedGenerate;

export const getStaticProps = getTranslationsFromFiles([TranslationFile.embed], 'none');
