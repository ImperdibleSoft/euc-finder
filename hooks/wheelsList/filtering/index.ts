/* eslint-disable max-lines */
import React from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import CheckboxGroup from '../../../components/Form/CheckboxGroup';
import Dropdown from '../../../components/Form/Dropdown';
import Text from '../../../components/Form/Text';
import { wheelFeatureIcons } from '../../../constants';
import { filterWheels, resetWheelFilters } from '../../../store/actions';
import { getPricesConfig, getWheelFilters } from '../../../store/selectors';
import {
  AntiSpin,
  BrandId,
  Category,
  Color,
  Display,
  FilterField,
  Kickstand,
  SoundSystem,
  Suspension,
  TrolleyHandle,
  WheelFilters
} from '../../../types';
import { getDropdownOptions } from './constants';

// eslint-disable-next-line max-lines-per-function
const useFilters = () => {
  const dispatch = useDispatch();
  const filters = useSelector(getWheelFilters);

  const handleFilterBy = (key: keyof WheelFilters, value: unknown) => {
    dispatch(filterWheels({ key, value }));
  };
  
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const name = event.target.name as keyof WheelFilters;
    const { value } = event.target;
    handleFilterBy(name as keyof WheelFilters, value);
  };

  const handleChangeBrandId = (event: React.ChangeEvent<HTMLInputElement>) => {
    const name = event.target.name as BrandId;
    const value = event.target.checked;

    let enabledBrands = [...filters.brandId];
    if (!value) {
      enabledBrands = [...filters.brandId].filter(b => b !== name);
    } else if (value && !enabledBrands.includes(name)) {
      enabledBrands.push(name);
    }

    handleFilterBy('brandId', enabledBrands);
  };

  const handleChangeCategory = (event: React.ChangeEvent<HTMLInputElement>) => {
    const category = event.target.name as Category;
    const value = event.target.checked;

    let enabledCategories = [...filters.categories];
    if (!value) {
      enabledCategories = [...filters.categories].filter(b => b !== category);
    } else if (value && !enabledCategories.includes(category)) {
      enabledCategories.push(category);
    }

    handleFilterBy('categories', enabledCategories);
  };

  const handleChangeAntispin = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const name = event.target.name as keyof WheelFilters;
    const rawValue = event.target.value;

    let value: undefined | boolean | AntiSpin;
    if (rawValue === AntiSpin.button || rawValue === AntiSpin.position || rawValue === AntiSpin.sensor) {
      value = rawValue;
    } else if (rawValue === 'true') {
      value = true;
    }

    handleFilterBy(name as keyof WheelFilters, value);
  };

  const handleChangeColor = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const name = event.target.name as keyof WheelFilters;
    const rawValue = event.target.value;

    let value: undefined | Color;
    if (rawValue === Color.black || rawValue === Color.white) {
      value = rawValue;
    }

    handleFilterBy(name as keyof WheelFilters, value);
  };

  const handleChangeDisplay = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const name = event.target.name as keyof WheelFilters;
    const rawValue = event.target.value;

    let value: undefined | boolean | Display;
    if (rawValue === Display.lcd || rawValue === Display.led) {
      value = rawValue;
    } else if (rawValue === 'true' || rawValue === 'false') {
      value = rawValue === 'true';
    }

    handleFilterBy(name as keyof WheelFilters, value);
  };

  const handleChangeKickstand = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const name = event.target.name as keyof WheelFilters;
    const rawValue = event.target.value;

    let value: undefined | true | Kickstand;
    if (rawValue === Kickstand.dedicated || rawValue === Kickstand.shell) {
      value = rawValue;
    } else if (rawValue === 'true') {
      value = true;
    }

    handleFilterBy(name as keyof WheelFilters, value);
  };

  const handleChangeLeds = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const name = event.target.name as keyof WheelFilters;
    const rawValue = event.target.value;

    let value: undefined | boolean;
    if (rawValue === 'true' || rawValue === 'false') {
      value = rawValue === 'true';
    }

    handleFilterBy(name as keyof WheelFilters, value);
  };

  const handleChangeSound = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const name = event.target.name as keyof WheelFilters;
    const rawValue = event.target.value;

    let value: undefined | true | SoundSystem;
    if (
      rawValue === SoundSystem.fivePointOne
      || rawValue === SoundSystem.forPointO
      || rawValue === SoundSystem.twoPointO
      || rawValue === SoundSystem.twoPointOne
    ) {
      value = rawValue;
    } else if (rawValue === 'true') {
      value = true;
    }

    handleFilterBy(name as keyof WheelFilters, value);
  };

  const handleChangeSuspension = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const name = event.target.name as keyof WheelFilters;
    const rawValue = event.target.value;

    let value: undefined | boolean | Suspension;
    if (rawValue === Suspension.standard || rawValue === Suspension.custom) {
      value = rawValue;
    } else if (rawValue === 'true' || rawValue === 'false') {
      value = rawValue === 'true';
    }

    handleFilterBy(name as keyof WheelFilters, value);
  };

  const handleChangeTrolley = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const name = event.target.name as keyof WheelFilters;
    const rawValue = event.target.value;

    let value: undefined | true | TrolleyHandle;
    if (rawValue === TrolleyHandle.scorpion || rawValue === TrolleyHandle.telescopic) {
      value = rawValue;
    } else if (rawValue === 'true') {
      value = true;
    }

    handleFilterBy(name as keyof WheelFilters, value);
  };

  const handleResetFilters = () => {
    dispatch(resetWheelFilters());
  };

  return {
    filters,
    handleChange,
    handleChangeAntispin,
    handleChangeBrandId,
    handleChangeCategory,
    handleChangeColor,
    handleChangeDisplay,
    handleChangeKickstand,
    handleChangeLeds,
    handleChangeSound,
    handleChangeSuspension,
    handleChangeTrolley,
    handleResetFilters
  };
};

// eslint-disable-next-line max-lines-per-function
export const useFilterFields = () => {
  const { t } = useTranslation();
  const showPrice = useSelector(getPricesConfig);

  const {
    antiSpinOptions,
    brandIdOptions,
    categoryOptions,
    colorOptions,
    displayOptions,
    kickstandOptions,
    ledOptions,
    soundSystemOptions,
    suspensionOptions,
    trolleyHandleOptions
  } = getDropdownOptions(t);

  const {
    handleChange,
    handleChangeAntispin,
    handleChangeBrandId,
    handleChangeCategory,
    handleChangeColor,
    handleChangeDisplay,
    handleChangeKickstand,
    handleChangeLeds,
    handleChangeSound,
    handleChangeSuspension,
    handleChangeTrolley,
    handleResetFilters,
    filters
  } = useFilters();


  const fields: FilterField[] = [
    {
      Field: CheckboxGroup,
      icon: wheelFeatureIcons.category,
      label: t('categories-label'),
      name: 'category',
      options: categoryOptions.map(option => ({
        ...option,
        onChange: handleChangeCategory,
        checked: filters.categories.includes(option.name as Category)
      })),
      space: true
    },
    
    {
      Field: CheckboxGroup,
      icon: wheelFeatureIcons.brandId,
      label: t('brandId'),
      name: 'brandId',
      options: brandIdOptions.map(option => ({
        ...option,
        onChange: handleChangeBrandId,
        checked: filters.brandId.includes(option.name as BrandId)
      })),
      space: true
    },

    {
      Field: Text,
      icon: wheelFeatureIcons.maxSpeed,
      label: t('minimum', { property: t('maxSpeed') }),
      name: 'minMaxSpeed',
      onChange: handleChange,
      type: 'number',
      value: filters.minMaxSpeed?.toString() ?? ''
    },
    {
      Field: Text,
      icon: wheelFeatureIcons.maxSpeed,
      label: t('maximum', { property: t('maxSpeed') }),
      name: 'maxMaxSpeed',
      onChange: handleChange,
      type: 'number',
      value: filters.maxMaxSpeed?.toString() ?? '',
      space: true
    },

    {
      Field: Text,
      icon: wheelFeatureIcons.range,
      label: t('minimum', { property: t('range') }),
      name: 'minRange',
      onChange: handleChange,
      type: 'number',
      value: filters.minRange?.toString() ?? ''
    },
    {
      Field: Text,
      icon: wheelFeatureIcons.weight,
      label: t('maximum', { property: t('weight') }),
      name: 'maxWeight',
      onChange: handleChange,
      type: 'number',
      value: filters.maxWeight?.toString() ?? '',
      space: true
    },

    {
      Field: Text,
      icon: wheelFeatureIcons.diameter,
      label: t('minimum', { property: t('diameter') }),
      name: 'minDiameter',
      onChange: handleChange ,
      type: 'number',
      value: filters.minDiameter?.toString() ?? ''
    },
    {
      Field: Text,
      icon: wheelFeatureIcons.diameter,
      label: t('maximum', { property: t('diameter') }),
      name:'maxDiameter',
      onChange: handleChange,
      type:'number',
      value: filters.maxDiameter?.toString() ?? ''
    },
    {
      Field: Text,
      icon: wheelFeatureIcons.width,
      label: t('minimum', { property: t('width') }),
      name: 'minWidth',
      onChange: handleChange ,
      type: 'number',
      value: filters.minWidth?.toString() ?? ''
    },
    {
      Field: Text,
      icon: wheelFeatureIcons.width,
      label: t('maximum', { property: t('width') }),
      name:'maxWidth',
      onChange: handleChange,
      type:'number',
      value: filters.maxWidth?.toString() ?? '',
      space: true
    },

    {
      Field: Text,
      icon: wheelFeatureIcons.groundClearance,
      label: t('minimum', { property: t('groundClearance') }),
      name: 'minGroundClearance',
      onChange: handleChange,
      type: 'number',
      value: filters.minGroundClearance?.toString() ?? ''
    },
    {
      Field: Text,
      icon: wheelFeatureIcons.groundClearance,
      label: t('maximum', { property: t('groundClearance') }),
      name: 'maxGroundClearance',
      onChange: handleChange,
      type: 'number',
      value: filters.maxGroundClearance?.toString() ?? '',
      space: true
    },
    
    {
      Field: Text,
      icon: wheelFeatureIcons.ratedPower,
      label: t('minimum', { property: t('ratedPower') }),
      name: 'minPower',
      onChange: handleChange,
      type:'number',
      value: filters.minPower?.toString() ?? ''
    },
    {
      Field: Text,
      icon: wheelFeatureIcons.voltage,
      label: t('minimum', { property: t('voltage') }),
      name: 'minVoltage',
      onChange: handleChange,
      type:'number',
      value: filters.minVoltage?.toString() ?? ''
    },
    {
      Field: Dropdown,
      icon: wheelFeatureIcons.suspension,
      label: t('suspension'),
      name:'suspension',
      onChange: handleChangeSuspension,
      options: suspensionOptions,
      value: filters.suspension?.toString() ?? '',
      space: true
    },

    {
      Field: Text,
      icon: 'earbuds_battery',
      label: t('minimum', { property: t('parallels') }),
      name: 'minBatteryParallels',
      onChange: handleChange,
      type:'number',
      value: filters.minBatteryParallels?.toString() ?? ''
    },
    {
      Field: Text,
      icon: 'earbuds_battery',
      label: t('maximum', { property: t('parallels') }),
      name: 'maxBatteryParallels',
      onChange: handleChange,
      type:'number',
      value: filters.maxBatteryParallels?.toString() ?? ''
    },
    {
      Field: Text,
      icon: 'battery_charging_full',
      label: t('minimum', { property: t('battery') }),
      name: 'minBatteryOutput',
      onChange: handleChange,
      type:'number',
      value: filters.minBatteryOutput?.toString() ?? ''
    },
    {
      Field: Text,
      icon: wheelFeatureIcons.battery,
      label: t('batteryType'),
      name: 'batteryType',
      onChange: handleChange,
      type:'text',
      value: filters.batteryType ?? '',
      space: true
    },
    
    {
      Field: Dropdown,
      icon: wheelFeatureIcons.trolleyHandle,
      label: t('trolleyHandle'),
      name:'trolleyHandle',
      onChange: handleChangeTrolley,
      options: trolleyHandleOptions,
      value: filters.trolleyHandle?.toString() ?? ''
    },
    {
      Field: Dropdown,
      icon: wheelFeatureIcons.antiSpin,
      label: t('antiSpin'),
      name:'antiSpin',
      onChange: handleChangeAntispin,
      options: antiSpinOptions,
      value: filters.antiSpin?.toString() ?? ''
    },
    {
      Field: Dropdown,
      icon: wheelFeatureIcons.kickstand,
      label: t('kickstand'),
      name:'kickstand',
      onChange: handleChangeKickstand,
      options: kickstandOptions,
      value: filters.kickstand?.toString() ?? ''
    },
    {
      Field: Dropdown,
      icon: wheelFeatureIcons.leds,
      label: t('leds'),
      name: 'leds',
      onChange: handleChangeLeds,
      options: ledOptions,
      value: filters.leds?.toString() ?? ''
    },
    {
      Field: Dropdown,
      icon: wheelFeatureIcons.sound,
      label: t('sound'),
      name: 'sound',
      onChange: handleChangeSound,
      options: soundSystemOptions,
      value: filters.sound?.toString() ?? ''
    },
    {
      Field: Dropdown,
      icon: wheelFeatureIcons.display,
      label: t('display'),
      name: 'display',
      onChange: handleChangeDisplay,
      options: displayOptions,
      value: filters.display?.toString() ?? ''
    },
    {
      Field: Dropdown,
      icon: wheelFeatureIcons.color,
      label: t('color'),
      name:'color',
      onChange: handleChangeColor,
      options: colorOptions,
      value: filters.color?.toString() ?? ''
    }
  ];

  if (showPrice) {
    fields.unshift(
      {
        Field: Text,
        icon: wheelFeatureIcons.price,
        label: t('minimum', { property: t('price') }),
        name: 'minPrice',
        onChange: handleChange,
        type: 'number',
        value: filters.minPrice?.toString() ?? ''
      },
      {
        Field: Text,
        icon: wheelFeatureIcons.price,
        label: t('maximum', { property: t('price') }),
        name: 'maxPrice',
        onChange: handleChange,
        type: 'number',
        value: filters.maxPrice?.toString() ?? '',
        space: true
      }
    );
  }

  return {
    fields,
    filters,
    handleResetFilters
  };
};