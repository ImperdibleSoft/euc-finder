/* eslint-disable max-lines */
import { ChangeEvent } from 'react';
import { useTranslation, TFunction } from 'react-i18next';
import { DropdownItem, Props } from '../../components/Form/Dropdown';
import { wheelFeatureIcons } from '../../constants';
import { useArenaContext } from '../../context';
import {
  DiameterUnits,
  GroundClearanceUnits,
  RangeUnits,
  SpeedUnits,
  WeightUnits,
  WidthUnits
} from '../../types/settings';

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

export const useSettings = () => {
  const { t } = useTranslation();
  const { measureUnits, dispatch }= useArenaContext();

  const handleChangeDiameter = (event: ChangeEvent<HTMLSelectElement>) => {
    const { value } = event.target;
    dispatch({
      type: 'setMeasureUnit',
      payload: { diameter: value as DiameterUnits }
    });
  };

  const handleChangeWidth = (event: ChangeEvent<HTMLSelectElement>) => {
    const { value } = event.target;
    dispatch({
      type: 'setMeasureUnit',
      payload: { width: value as WidthUnits }
    });
  };

  const handleChangeRange = (event: ChangeEvent<HTMLSelectElement>) => {
    const { value } = event.target;
    dispatch({
      type: 'setMeasureUnit',
      payload: { range: value as RangeUnits }
    });
  };

  const handleChangeSpeed = (event: ChangeEvent<HTMLSelectElement>) => {
    const { value } = event.target;
    dispatch({
      type: 'setMeasureUnit',
      payload: { maxSpeed: value as SpeedUnits }
    });
  };

  const handleChangeWeight = (event: ChangeEvent<HTMLSelectElement>) => {
    const { value } = event.target;
    dispatch({
      type: 'setMeasureUnit',
      payload: { weight: value as WeightUnits }
    });
  };

  const handleChangeGroundClearance = (event: ChangeEvent<HTMLSelectElement>) => {
    const { value } = event.target;
    dispatch({
      type: 'setMeasureUnit',
      payload: { groundClearance: value as GroundClearanceUnits }
    });
  };

  const {
    diameterOptions,
    groundClearanceOptions,
    rangeOptions,
    speedOptions,
    weightOptions,
    widthOptions
  } = getOptions(t);

  const fields: Props[] = [
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

  return fields;
};