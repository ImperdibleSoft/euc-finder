import { ChangeEvent } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { Props as SliderProps } from '../../components/Form/Slider';
import { setCustomSpecWeight, setSpecWeightsPreset } from '../../store/actions';
import { getPricesConfig, getSpecWeights, getSpecWeightsActivePreset } from '../../store/selectors';
import { SpecWeights, SpecWeightsPreset } from '../../store/types';

// eslint-disable-next-line max-lines-per-function
export const usePresets = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const showPrices = useSelector(getPricesConfig);
  const activePreset = useSelector(getSpecWeightsActivePreset);
  const specWeights = useSelector(getSpecWeights);

  const handleChangePreset = (preset: SpecWeightsPreset) => {
    dispatch(setSpecWeightsPreset(preset));
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
      label: t('maxSpeed'),
      name: 'maxSpeed',
      onChange: handleChangeCustomValue,
      value: specWeights.maxSpeed
    },
    {
      ...commonOptions,
      label: t('range'),
      name: 'range',
      onChange: handleChangeCustomValue,
      value: specWeights.range
    },
    {
      ...commonOptions,
      label: t('weight'),
      name: 'weight',
      onChange: handleChangeCustomValue,
      value: specWeights.weight
    },
    {
      ...commonOptions,
      label: t('ratedPower'),
      name: 'ratedPower',
      onChange: handleChangeCustomValue,
      value: specWeights.ratedPower
    },
    {
      ...commonOptions,
      label: t('maxGradibility'),
      name: 'maxGradibility',
      onChange: handleChangeCustomValue,
      value: specWeights.maxGradibility
    },
    {
      ...commonOptions,
      label: t('suspension'),
      name: 'suspension',
      onChange: handleChangeCustomValue,
      value: specWeights.suspension
    },
    {
      ...commonOptions,
      label: t('trolleyHandle'),
      name: 'trolleyHandle',
      onChange: handleChangeCustomValue,
      value: specWeights.trolleyHandle
    },
    {
      ...commonOptions,
      label: t('antiSpin'),
      name: 'antiSpin',
      onChange: handleChangeCustomValue,
      value: specWeights.antiSpin
    },
    {
      ...commonOptions,
      label: t('pedals'),
      name: 'pedals',
      onChange: handleChangeCustomValue,
      value: specWeights.pedals
    },
    {
      ...commonOptions,
      label: t('kickstand'),
      name: 'kickstand',
      onChange: handleChangeCustomValue,
      value: specWeights.kickstand
    },
    {
      ...commonOptions,
      label: t('headlight'),
      name: 'headlight',
      onChange: handleChangeCustomValue,
      value: specWeights.headlight
    },
    {
      ...commonOptions,
      label: t('tailLight'),
      name: 'tailLight',
      onChange: handleChangeCustomValue,
      value: specWeights.tailLight
    },
    {
      ...commonOptions,
      label: t('leds'),
      name: 'leds',
      onChange: handleChangeCustomValue,
      value: specWeights.leds
    },
    {
      ...commonOptions,
      label: t('sound'),
      name: 'sound',
      onChange: handleChangeCustomValue,
      value: specWeights.sound
    },
    {
      ...commonOptions,
      label: t('display'),
      name: 'display',
      onChange: handleChangeCustomValue,
      value: specWeights.display
    }
  ];

  if (showPrices) {
    specWeightsFields.unshift({
      ...commonOptions,
      label: t('price'),
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