/* eslint-disable max-lines */
import { Alert, Box, Button, ButtonGroup, Card, CardContent, Snackbar, Typography } from '@mui/material';
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
import { useMeasureUnits } from '../../hooks/settings/measureUnits';
import { getBrands, getMeasureUnits, getTableViewSpecs, getWheels } from '../../store/selectors';
import {
  DiameterUnits,
  DimensionsUnits,
  GroundClearanceUnits,
  RangeUnits,
  SpeedUnits,
  TranslationFile,
  WeightUnits,
  WheelFeatureIcons,
  WheelId,
  WidthUnits
} from '../../types';
import { getTranslationsFromFiles } from '../../utils-server';


const commonStyles: React.CSSProperties = {
  display: 'flex',
  flex: 1,
  flexDirection: 'column',
  padding: 8
};

const titleStyle = {
  mb: 1,
  mt: 2
};

interface State {
  language: 'en' | 'es' | 'fr';
  
  // UI
  darkMode: string;
  icons: string;
  limits: string;
  title: string;
  picture: string;

  // Settings
  diameter: DiameterUnits;
  dimensions: DimensionsUnits;
  groundClearance: GroundClearanceUnits;
  maxSpeed: SpeedUnits;
  range: RangeUnits;
  weight: WeightUnits;
  width: WidthUnits;

  // Wheel
  wheelId: WheelId;
  features: string[];
}

const defaults: State = {
  language: 'en',

  // UI
  darkMode: 'false',
  icons: 'true',
  limits: 'false',
  title: 'true',
  picture: 'true',

  // Settings
  diameter: DiameterUnits.in,
  dimensions: DimensionsUnits.mm,
  groundClearance: GroundClearanceUnits.mm,
  maxSpeed: SpeedUnits.kmh,
  range: RangeUnits.km,
  weight: WeightUnits.kg,
  width: WidthUnits.in,

  // Wheel
  wheelId: WheelId.v12,
  features: ['diameter', 'maxSpeed', 'range', 'weight']
};

// eslint-disable-next-line max-lines-per-function
const EmbedGenerate = () => {
  const { t, i18n } = useEmbedTranslations();
  const ref = useRef<HTMLDivElement>(null);
  const { sm } = useBreakpoints();
  const { rect, screenWidth } = useResize(ref);
  const { canCopy, copied, handleCopy: copy } = useCopyToClipboard();
  const { measureUnitFields } = useMeasureUnits(t);
  const brands = useSelector(getBrands);
  const wheels = useSelector(getWheels);
  const availableFeatures = useSelector(getTableViewSpecs);
  const measureUnits = useSelector(getMeasureUnits);

  const [widgetOptions, setWidgetOptions] = useState<State>({
    ...defaults,
    language: i18n.language as State['language'],
    diameter: measureUnits.diameter,
    dimensions: measureUnits.dimensions,
    groundClearance: measureUnits.groundClearance,
    maxSpeed: measureUnits.maxSpeed,
    range: measureUnits.range,
    weight: measureUnits.weight,
    width: measureUnits.width
  });

  const getWidgetUrl = (params?: State) => {
    const appUrl = process.env.NODE_ENV === 'production' ? APP_URL : 'http://localhost:3000';
    const baseUrl = `${ appUrl }/${ params?.language ?? widgetOptions.language }${ EMBED }`;

    // UI
    const theme = `dark=${ params?.darkMode ?? widgetOptions.darkMode }`;
    const displayLimits = `limits=${ params?.limits ?? widgetOptions.limits }`;
    const displayTitle = `title=${ params?.title ?? widgetOptions.title }`;
    const displayPicture = `picture=${ params?.picture ?? widgetOptions.picture }`;
    const displayIcons = `icons=${ params?.icons ?? widgetOptions.icons }`;
    
    // Settings
    const displayDiameter = `diameter=${ params?.diameter ?? widgetOptions.diameter }`;
    const displayDimensions = `dimensions=${ params?.dimensions ?? widgetOptions.dimensions }`;
    const displayGroundClearance = `groundClearance=${ params?.groundClearance ?? widgetOptions.groundClearance }`;
    const displayMaxSpeed = `maxSpeed=${ params?.maxSpeed ?? widgetOptions.maxSpeed }`;
    const displayRange = `range=${ params?.range ?? widgetOptions.range }`;
    const displayWeight = `weight=${ params?.weight ?? widgetOptions.weight }`;
    const displayWidth = `width=${ params?.width ?? widgetOptions.width }`;

    // Wheel
    const wheel = `wheelId=${ params?.wheelId ?? widgetOptions.wheelId }`;
    const feats = `features=${ (params?.features ?? widgetOptions.features).join(',') }`;

    // eslint-disable-next-line max-len
    const uiElements = `${ theme }&${ displayLimits }&${ displayTitle }&${ displayPicture }&${ displayIcons }`;
    // eslint-disable-next-line max-len
    const settingsElements = `${ displayDiameter }&${ displayDimensions }&${ displayGroundClearance }&${ displayMaxSpeed }&${ displayRange }&${ displayWeight }&${ displayWidth }`;
    const wheelElements = `${ wheel }&${ feats }`;

    return `${ baseUrl }?${ uiElements }&${ settingsElements }&${ wheelElements }`;
  };
  const [frameUrl, setFrameUrl] = useState(getWidgetUrl());

  const getIframeCode = () =>`<iframe\n  frameborder="0"\n  height="700"\n  src="${ frameUrl }"\n  width="100%"\n/>`;

  const handleChangeProp = (key: keyof State) => (payload: unknown) => {
    let value;

    switch (key) {
      case 'language':
      case 'diameter':
      case 'dimensions':
      case 'groundClearance':
      case 'maxSpeed':
      case 'range':
      case 'weight':
      case 'width':
        value = (payload as React.ChangeEvent<HTMLSelectElement>).target.value;
        break;

      case 'darkMode':
      case 'icons':
      case 'limits':
      case 'title':
      case 'picture':
        value = (payload as React.ChangeEvent<HTMLInputElement>).target.checked.toString();
        break;

      case 'wheelId':
        value = payload as WheelId;
        break;

      case 'features':
        value = payload as string[];
        break;
    }

    setWidgetOptions({
      ...widgetOptions,
      [key]: value
    });
  };

  const featureOptions = useMemo(() => availableFeatures.map((feature): DropdownItem<string> => ({
    label: t(feature, commonNs),
    icon: wheelFeatureIcons[feature as unknown as keyof WheelFeatureIcons],
    value: feature
  })), [availableFeatures, t]);

  const handleUpdateWidget = () => {
    const widgetUrl = getWidgetUrl();
    setFrameUrl(widgetUrl);
  };

  const handleResetWidget = async () => {
    const options = {
      ...defaults,
      language: i18n.language as State['language'],
      diameter: measureUnits.diameter,
      dimensions: measureUnits.dimensions,
      groundClearance: measureUnits.groundClearance,
      maxSpeed: measureUnits.maxSpeed,
      range: measureUnits.range,
      weight: measureUnits.weight,
      width: measureUnits.width
    };
    setWidgetOptions(options);
    setFrameUrl(getWidgetUrl(options));
  };

  const handleCopy = () => {
    copy(getIframeCode());
  };

  const isMeasureUnitNeeded = (key: keyof State) => widgetOptions.features.includes(key);

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
          <Card style={ commonStyles } sx={ { flex: 1, mb: 2 } }>
            <CardContent>
              <Typography variant="h5" sx={ { mb: 2 } }>
                { t('customizeWidget-title') }
              </Typography>

              <Dropdown
                fullWidth={ false }
                label={ t('language-label', commonNs) }
                name="language"
                onChange={ handleChangeProp('language') }
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
                value={ widgetOptions.language }
              />

              <Typography variant="h6" sx={ titleStyle }>
                { t('wheel-title') }
              </Typography>

              <label style={ { display: 'inline-flex', flexDirection: 'column', marginBottom: 16 } }>
                <Typography variant="caption">
                  { t('wheelId-label') }
                </Typography>

                <WheelSelector
                  brands={ brands }
                  onChange={ handleChangeProp('wheelId') }
                  wheels={ wheels }
                />
              </label>

              <MultiSelect
                fullWidth={ false }
                label={ t('features-label') }
                name="features"
                onChange={ handleChangeProp('features') }
                options={ featureOptions }
                value={ widgetOptions.features }
              />

              <Typography variant="h6" sx={ titleStyle }>
                { t('ui-title') }
              </Typography>

              <Checkbox
                checked={ widgetOptions.darkMode !== 'false' }
                label={ t('darkMode-label') }
                name="darkMode"
                onChange={ handleChangeProp('darkMode') }
              />

              <Checkbox
                checked={ widgetOptions.limits !== 'false' }
                label={ t('limits-label') }
                name="limits"
                onChange={ handleChangeProp('limits') }
              />

              <Checkbox
                checked={ widgetOptions.title !== 'false' }
                label={ t('title-label') }
                name="title"
                onChange={ handleChangeProp('title') }
              />

              <Checkbox
                checked={ widgetOptions.picture !== 'false' }
                label={ t('picture-label') }
                name="picture"
                onChange={ handleChangeProp('picture') }
              />

              <Checkbox
                checked={ widgetOptions.icons !== 'false' }
                label={ t('icons-label') }
                name="icons"
                onChange={ handleChangeProp('icons') }
              />
              
              <Typography variant="h6" sx={ titleStyle }>
                { t('settings-title') }
              </Typography>
              
              { measureUnitFields.map(field => {
                const key = field.name as keyof State;

                if (!isMeasureUnitNeeded(key)) {
                  return null;
                }

                return (
                  <Dropdown
                    key={ key }
                    { ...field }
                    fullWidth={ !sm }
                    onChange={ handleChangeProp(key) }
                    value={ widgetOptions[key] as string }
                    style={ {
                      display: sm ? 'block' : undefined,
                      marginBottom: 16,
                      minWidth: sm ? 250 : undefined
                    } }

                  />
                );
              }) }

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
    
          <Box
            sx={ {
              maxWidth: { md: 320 },
              minWidth: 280,
              ml: { md: 2 },
              width: '100%'
            } }
          >
            <Card sx={ { mb: 2 } }>
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
                  <>
                    <ButtonGroup sx={ { justifyContent: 'flex-end', mb: 2, mt: 1, px: 2, width: '100%' } }>
                      <Button variant="contained" onClick={ handleCopy }>
                        { t('copy-btn', commonNs) }
                      </Button>
                    </ButtonGroup>

                    <Snackbar
                      anchorOrigin={ { horizontal: 'center', vertical: 'bottom' } }
                      open={ copied === 'success' }
                      autoHideDuration={ 6000 }
                    >
                      <Alert severity="success" sx={ { width: '100%' } }>
                        { t('copied-msg', commonNs) }
                      </Alert>
                    </Snackbar>

                    <Snackbar
                      anchorOrigin={ { horizontal: 'center', vertical: 'bottom' } }
                      open={ copied === 'error' }
                      autoHideDuration={ 6000 }
                    >
                      <Alert severity="error" sx={ { width: '100%' } }>
                        { t('copyError-msg', commonNs) }
                      </Alert>
                    </Snackbar>
                  </>
                ) }
              </CardContent>
            </Card>
            
            <Box
              sx={ {
                maxWidth: { sm: 320 },
                mx: 'auto',
                width: '100%'
              } }
            >
              <iframe
                frameBorder={ 0 }
                height={
                  screenWidth >= 900
                    ? Math.floor(rect?.height ?? 700) - 7 - 290
                    : 700
                }
                src={ frameUrl }
                width="100%"
              />
            </Box>
          </Box>
        </Box>
      </SimpleLayout>
    </>
  );
};

export default EmbedGenerate;

export const getStaticProps = getTranslationsFromFiles([TranslationFile.embed, TranslationFile.settings], 'none');
