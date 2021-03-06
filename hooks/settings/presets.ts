/* eslint-disable max-lines */
import { ChangeEvent, useEffect } from 'react';
import { TFunction } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { Props as SliderProps } from '../../components/Form/Slider';
import { wheelFeatureIcons } from '../../constants';
import { setCustomSpecWeight, setSpecWeightsPreset } from '../../store/actions';
import { getPricesConfig, getSpecWeights, getSpecWeightsActivePreset } from '../../store/selectors';
import { SpecWeights, SpecWeightsPreset } from '../../store/types';
import { LOCAL_STORAGE_KEY } from '../../types';
import { setItem } from '../../utils';
import { commonNs } from '../translations';

// eslint-disable-next-line max-lines-per-function
export const usePresets = (t: TFunction<'translation'>) => {
  const dispatch = useDispatch();
  const showPrices = useSelector(getPricesConfig);
  const activePreset = useSelector(getSpecWeightsActivePreset);
  const specWeights = useSelector(getSpecWeights);

  useEffect(() => {
    if (activePreset === SpecWeightsPreset.custom) {
      setItem(LOCAL_STORAGE_KEY.SPECWEIGHT_CUSTOMVALUES, JSON.stringify(specWeights));
    }
  }, [activePreset, specWeights]);

  const handleChangePreset = (preset: SpecWeightsPreset) => {
    dispatch(setSpecWeightsPreset(preset));
    setItem(LOCAL_STORAGE_KEY.SPECWEIGHT_PRESET, preset);
  };

  let timeout: NodeJS.Timeout;
  const handleChangeCustomValue = (event: ChangeEvent<HTMLInputElement>) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      const key = event.target.name as keyof SpecWeights;
      const value = Number(event.target.value);
  
      dispatch(setCustomSpecWeight({ key, value }));
    }, 300);
  };

  const commonOptions = {
    disabled: activePreset !== SpecWeightsPreset.custom,
    max: 20,
    step: 1
  };

  const specWeightsFields: SliderProps[] = [
    {
      ...commonOptions,
      icon: wheelFeatureIcons.maxSpeed,
      label: t('maxSpeed', commonNs),
      name: 'maxSpeed',
      onChange: handleChangeCustomValue,
      value: specWeights.maxSpeed
    },
    {
      ...commonOptions,
      icon: wheelFeatureIcons.range,
      label: t('range', commonNs),
      name: 'range',
      onChange: handleChangeCustomValue,
      value: specWeights.range
    },
    {
      ...commonOptions,
      icon: wheelFeatureIcons.weight,
      label: t('weight', commonNs),
      name: 'weight',
      onChange: handleChangeCustomValue,
      value: specWeights.weight
    },
    {
      ...commonOptions,
      icon: wheelFeatureIcons.ratedPower,
      label: t('ratedPower', commonNs),
      name: 'ratedPower',
      onChange: handleChangeCustomValue,
      value: specWeights.ratedPower
    },
    {
      ...commonOptions,
      icon: wheelFeatureIcons.stockCharger,
      label: t('stockCharger', commonNs),
      name: 'stockCharger',
      onChange: handleChangeCustomValue,
      value: specWeights.stockCharger
    },
    {
      ...commonOptions,
      icon: wheelFeatureIcons.maxCharger,
      label: t('maxCharger', commonNs),
      name: 'maxCharger',
      onChange: handleChangeCustomValue,
      value: specWeights.maxCharger
    },
    {
      ...commonOptions,
      icon: wheelFeatureIcons.chargePorts,
      label: t('chargePorts', commonNs),
      name: 'chargePorts',
      onChange: handleChangeCustomValue,
      value: specWeights.chargePorts
    },
    {
      ...commonOptions,
      icon: wheelFeatureIcons.usbPorts,
      label: t('usbPorts', commonNs),
      name: 'usbPorts',
      onChange: handleChangeCustomValue,
      value: specWeights.usbPorts
    },
    {
      ...commonOptions,
      icon: wheelFeatureIcons.maxGradibility,
      label: t('maxGradibility', commonNs),
      name: 'maxGradibility',
      onChange: handleChangeCustomValue,
      value: specWeights.maxGradibility
    },
    {
      ...commonOptions,
      icon: wheelFeatureIcons.suspension,
      label: t('suspension', commonNs),
      name: 'suspension',
      onChange: handleChangeCustomValue,
      value: specWeights.suspension
    },
    {
      ...commonOptions,
      icon: wheelFeatureIcons.trolleyHandle,
      label: t('trolleyHandle', commonNs),
      name: 'trolleyHandle',
      onChange: handleChangeCustomValue,
      value: specWeights.trolleyHandle
    },
    {
      ...commonOptions,
      icon: wheelFeatureIcons.antiSpin,
      label: t('antiSpin', commonNs),
      name: 'antiSpin',
      onChange: handleChangeCustomValue,
      value: specWeights.antiSpin
    },
    {
      ...commonOptions,
      icon: wheelFeatureIcons.pedals,
      label: t('pedals', commonNs),
      name: 'pedals',
      onChange: handleChangeCustomValue,
      value: specWeights.pedals
    },
    {
      ...commonOptions,
      icon: wheelFeatureIcons.pedalSize,
      label: t('pedalSize', commonNs),
      name: 'pedalSize',
      onChange: handleChangeCustomValue,
      value: specWeights.pedalSize
    },
    {
      ...commonOptions,
      icon: wheelFeatureIcons.kickstand,
      label: t('kickstand', commonNs),
      name: 'kickstand',
      onChange: handleChangeCustomValue,
      value: specWeights.kickstand
    },
    {
      ...commonOptions,
      icon: wheelFeatureIcons.headlight,
      label: t('headlight', commonNs),
      name: 'headlight',
      onChange: handleChangeCustomValue,
      value: specWeights.headlight
    },
    {
      ...commonOptions,
      icon: wheelFeatureIcons.tailLight,
      label: t('tailLight', commonNs),
      name: 'tailLight',
      onChange: handleChangeCustomValue,
      value: specWeights.tailLight
    },
    {
      ...commonOptions,
      icon: wheelFeatureIcons.leds,
      label: t('leds', commonNs),
      name: 'leds',
      onChange: handleChangeCustomValue,
      value: specWeights.leds
    },
    {
      ...commonOptions,
      icon: wheelFeatureIcons.sound,
      label: t('sound', commonNs),
      name: 'sound',
      onChange: handleChangeCustomValue,
      value: specWeights.sound
    },
    {
      ...commonOptions,
      icon: wheelFeatureIcons.display,
      label: t('display', commonNs),
      name: 'display',
      onChange: handleChangeCustomValue,
      value: specWeights.display
    }
  ];

  if (showPrices) {
    specWeightsFields.unshift({
      ...commonOptions,
      icon: wheelFeatureIcons.price,
      label: t('price', commonNs),
      name: 'price',
      onChange: handleChangeCustomValue,
      value: specWeights.price
    });    
  }

  return {
    activePreset,
    handleChangePreset,
    specWeightsFields
  };
};
