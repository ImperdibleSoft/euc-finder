/* eslint-disable max-lines */
import { useRouter } from 'next/dist/client/router';
import { ChangeEvent, useState } from 'react';
import { useTranslation, TFunction } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { DropdownItem, Props } from '../../components/Form/Dropdown';
import { Props as SliderProps } from '../../components/Form/Slider';
import { wheelFeatureIcons } from '../../constants';
import { setMeasureUnit } from '../../store/actions';
import { getMeasureUnits, getPricesConfig, getSpecWeights } from '../../store/selectors';
import { LOCAL_STORAGE_KEY } from '../../types';
import {
  DiameterUnits,
  GroundClearanceUnits,
  RangeUnits,
  SpeedUnits,
  WeightUnits,
  WidthUnits
} from '../../types/settings';
import { setItem } from '../../utils';

const getOptions = (t: TFunction<'translation'>) => {
  const diameterOptions: DropdownItem[] = [
    {
      label: t('centimeters'),
      value: DiameterUnits.cm
    },
    {
      label: t('inches'),
      value: DiameterUnits.in
    }
  ];

  const widthOptions: DropdownItem[] = [
    {
      label: t('centimeters'),
      value: WidthUnits.cm
    },
    {
      label: t('inches'),
      value: WidthUnits.in
    }
  ];

  const rangeOptions: DropdownItem[] = [
    {
      label: t('kilometers'),
      value: RangeUnits.km
    },
    {
      label: t('miles'),
      value: RangeUnits.mi
    }
  ];

  const speedOptions: DropdownItem[] = [
    {
      label: `${ t('kilometers') } ${ t('perHour') }`,
      value: SpeedUnits.kmh
    },
    {
      label: `${ t('miles') } ${ t('perHour') }`,
      value: SpeedUnits.mih
    }
  ];

  const weightOptions: DropdownItem[] = [
    {
      label: t('kilograms'),
      value: WeightUnits.kg
    },
    {
      label: t('pounds'),
      value: WeightUnits.lb
    }
  ];

  const groundClearanceOptions: DropdownItem[] = [
    {
      label: t('milimeters'),
      value: GroundClearanceUnits.mm
    },
    {
      label: t('inches'),
      value: GroundClearanceUnits.in
    }
  ];

  return {
    diameterOptions,
    widthOptions,
    rangeOptions,
    speedOptions,
    weightOptions,
    groundClearanceOptions
  };
};

// eslint-disable-next-line max-lines-per-function
export const useSettings = () => {
  const { t, i18n } = useTranslation();
  const router = useRouter();
  const dispatch = useDispatch();
  const [language, setLanguage] = useState(i18n.language);
  const measureUnits = useSelector(getMeasureUnits);
  const showPrices = useSelector(getPricesConfig);
  const specWeights = useSelector(getSpecWeights);

  const handleChangeLanguage = (event: ChangeEvent<HTMLSelectElement>) => {
    const { value } = event.target;
    setLanguage(value);
    setItem(LOCAL_STORAGE_KEY.LANGUAGE, value);

    router.push(router.pathname, router.asPath, { locale: value });
  };

  const languageField: Props = {
    label: t('language-label'),
    name: 'language',
    onChange: handleChangeLanguage,
    options: [
      {
        label: t('en-label'),
        value: 'en'
      },
      {
        label: t('es-label'),
        value: 'es'
      }
    ],
    value: language
  };

  const handleChangeDiameter = (event: ChangeEvent<HTMLSelectElement>) => {
    const { value } = event.target;
    dispatch({
      type: 'setMeasureUnit',
      payload: { diameter: value as DiameterUnits }
    });
  };

  const handleChangeWidth = (event: ChangeEvent<HTMLSelectElement>) => {
    const { value } = event.target;
    dispatch(setMeasureUnit({ key: 'width', value }));
  };

  const handleChangeRange = (event: ChangeEvent<HTMLSelectElement>) => {
    const { value } = event.target;
    dispatch(setMeasureUnit({ key: 'range', value }));
  };

  const handleChangeSpeed = (event: ChangeEvent<HTMLSelectElement>) => {
    const { value } = event.target;
    dispatch(setMeasureUnit({ key: 'maxSpeed', value }));
  };

  const handleChangeWeight = (event: ChangeEvent<HTMLSelectElement>) => {
    const { value } = event.target;
    dispatch(setMeasureUnit({ key: 'weight', value }));
  };

  const handleChangeGroundClearance = (event: ChangeEvent<HTMLSelectElement>) => {
    const { value } = event.target;
    dispatch(setMeasureUnit({ key: 'groundClearance', value }));
  };

  const {
    diameterOptions,
    groundClearanceOptions,
    rangeOptions,
    speedOptions,
    weightOptions,
    widthOptions
  } = getOptions(t);

  const measureUnitFields: Props[] = [
    {
      icon: wheelFeatureIcons.diameter,
      label: t('diameter'),
      name: 'diameter',
      onChange: handleChangeDiameter,
      options: diameterOptions,
      value: measureUnits.diameter
    },
    {
      icon: wheelFeatureIcons.width,
      label: t('width'),
      name: 'width',
      onChange: handleChangeWidth,
      options: widthOptions,
      value: measureUnits.width
    },
    {
      icon: wheelFeatureIcons.maxSpeed,
      label: t('maxSpeed'),
      name: 'maxSpeed',
      onChange: handleChangeSpeed,
      options: speedOptions,
      value: measureUnits.maxSpeed
    },
    {
      icon: wheelFeatureIcons.range,
      label: t('range'),
      name: 'range',
      onChange: handleChangeRange,
      options: rangeOptions,
      value: measureUnits.range
    },
    {
      icon: wheelFeatureIcons.weight,
      label: t('weight'),
      name: 'weight',
      onChange: handleChangeWeight,
      options: weightOptions,
      value: measureUnits.weight
    },
    {
      icon: wheelFeatureIcons.groundClearance,
      label: t('groundClearance'),
      name: 'groundClearance',
      onChange: handleChangeGroundClearance,
      options: groundClearanceOptions,
      style: { marginBottom: 0 },
      value: measureUnits.groundClearance
    }
  ];

  const commonOptions = {
    max: 20,
    step: 1
  };

  const specWeightsFields: SliderProps[] = [
    {
      ...commonOptions,
      label: t('maxSpeed'),
      name: 'maxSpeed',
      onChange: () => { return; },
      value: specWeights.maxSpeed
    },
    {
      ...commonOptions,
      label: t('range'),
      name: 'range',
      onChange: () => { return; },
      value: specWeights.range
    },
    {
      ...commonOptions,
      label: t('weight'),
      name: 'weight',
      onChange: () => { return; },
      value: specWeights.weight
    },
    {
      ...commonOptions,
      label: t('ratedPower'),
      name: 'ratedPower',
      onChange: () => { return; },
      value: specWeights.ratedPower
    },
    {
      ...commonOptions,
      label: t('maxGradibility'),
      name: 'maxGradibility',
      onChange: () => { return; },
      value: specWeights.maxGradibility
    },
    {
      ...commonOptions,
      label: t('suspension'),
      name: 'suspension',
      onChange: () => { return; },
      value: specWeights.suspension
    },
    {
      ...commonOptions,
      label: t('trolleyHandle'),
      name: 'trolleyHandle',
      onChange: () => { return; },
      value: specWeights.trolleyHandle
    },
    {
      ...commonOptions,
      label: t('antiSpin'),
      name: 'antiSpin',
      onChange: () => { return; },
      value: specWeights.antiSpin
    },
    {
      ...commonOptions,
      label: t('pedals'),
      name: 'pedals',
      onChange: () => { return; },
      value: specWeights.pedals
    },
    {
      ...commonOptions,
      label: t('kickstand'),
      name: 'kickstand',
      onChange: () => { return; },
      value: specWeights.kickstand
    },
    {
      ...commonOptions,
      label: t('headlight'),
      name: 'headlight',
      onChange: () => { return; },
      value: specWeights.headlight
    },
    {
      ...commonOptions,
      label: t('tailLight'),
      name: 'tailLight',
      onChange: () => { return; },
      value: specWeights.tailLight
    },
    {
      ...commonOptions,
      label: t('leds'),
      name: 'leds',
      onChange: () => { return; },
      value: specWeights.leds
    },
    {
      ...commonOptions,
      label: t('sound'),
      name: 'sound',
      onChange: () => { return; },
      value: specWeights.sound
    },
    {
      ...commonOptions,
      label: t('display'),
      name: 'display',
      onChange: () => { return; },
      value: specWeights.display
    }
  ];

  if (showPrices) {
    specWeightsFields.unshift({
      ...commonOptions,
      label: t('price'),
      name: 'price',
      onChange: () => { return; },
      value: specWeights.price
    });    
  }

  return { languageField, measureUnitFields, specWeightsFields };
};