/* eslint-disable max-lines */
import { ChangeEvent } from 'react';
import { TFunction } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { DropdownItem, Props } from '../../components/Form/Dropdown';
import { wheelFeatureIcons } from '../../constants';
import { setMeasureUnit } from '../../store/actions';
import { getMeasureUnits } from '../../store/selectors';
import {
  DiameterUnits,
  GroundClearanceUnits,
  RangeUnits,
  DimensionsUnits,
  SpeedUnits,
  WeightUnits,
  WidthUnits
} from '../../types';

const getOptions = (t: TFunction<'translation'>) => {
  const diameterOptions: DropdownItem[] = [
    {
      label: t('centimeters-label'),
      value: DiameterUnits.cm
    },
    {
      label: t('inches-label'),
      value: DiameterUnits.in
    }
  ];

  const widthOptions: DropdownItem[] = [
    {
      label: t('centimeters-label'),
      value: WidthUnits.cm
    },
    {
      label: t('inches-label'),
      value: WidthUnits.in
    }
  ];

  const rangeOptions: DropdownItem[] = [
    {
      label: t('kilometers-label'),
      value: RangeUnits.km
    },
    {
      label: t('miles-label'),
      value: RangeUnits.mi
    }
  ];

  const dimensionsOptions: DropdownItem[] = [
    {
      label: t('milimeters-label'),
      value: DimensionsUnits.mm
    },
    {
      label: t('inches-label'),
      value: DimensionsUnits.in
    }
  ];

  const speedOptions: DropdownItem[] = [
    {
      label: `${ t('kilometers-label') } ${ t('perHour-label') }`,
      value: SpeedUnits.kmh
    },
    {
      label: `${ t('miles-label') } ${ t('perHour-label') }`,
      value: SpeedUnits.mih
    }
  ];

  const weightOptions: DropdownItem[] = [
    {
      label: t('kilograms-label'),
      value: WeightUnits.kg
    },
    {
      label: t('pounds-label'),
      value: WeightUnits.lb
    }
  ];

  const groundClearanceOptions: DropdownItem[] = [
    {
      label: t('milimeters-label'),
      value: GroundClearanceUnits.mm
    },
    {
      label: t('inches-label'),
      value: GroundClearanceUnits.in
    }
  ];

  return {
    diameterOptions,
    widthOptions,
    rangeOptions,
    dimensionsOptions,
    speedOptions,
    weightOptions,
    groundClearanceOptions
  };
};

export const useMeasureUnits = (t: TFunction<'translation'>, commonT: TFunction<'translation'>) => {
  const dispatch = useDispatch();
  const measureUnits = useSelector(getMeasureUnits);

  const handleChangeDiameter = (event: ChangeEvent<HTMLSelectElement>) => {
    const { value } = event.target;
    dispatch(setMeasureUnit({ key: 'diameter', value }));
  };

  const handleChangeWidth = (event: ChangeEvent<HTMLSelectElement>) => {
    const { value } = event.target;
    dispatch(setMeasureUnit({ key: 'width', value }));
  };

  const handleChangeRange = (event: ChangeEvent<HTMLSelectElement>) => {
    const { value } = event.target;
    dispatch(setMeasureUnit({ key: 'range', value }));
  };

  const handleChangeDimensions = (event: ChangeEvent<HTMLSelectElement>) => {
    const { value } = event.target;
    dispatch(setMeasureUnit({ key: 'dimensions', value }));
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
    dimensionsOptions,
    speedOptions,
    weightOptions,
    widthOptions
  } = getOptions(t);

  const measureUnitFields: Props[] = [
    {
      icon: wheelFeatureIcons.diameter,
      label: commonT('diameter'),
      name: 'diameter',
      onChange: handleChangeDiameter,
      options: diameterOptions,
      value: measureUnits.diameter
    },
    {
      icon: wheelFeatureIcons.width,
      label: commonT('width'),
      name: 'width',
      onChange: handleChangeWidth,
      options: widthOptions,
      value: measureUnits.width
    },
    {
      icon: wheelFeatureIcons.maxSpeed,
      label: commonT('maxSpeed'),
      name: 'maxSpeed',
      onChange: handleChangeSpeed,
      options: speedOptions,
      value: measureUnits.maxSpeed
    },
    {
      icon: wheelFeatureIcons.range,
      label: commonT('range'),
      name: 'range',
      onChange: handleChangeRange,
      options: rangeOptions,
      value: measureUnits.range
    },
    {
      icon: wheelFeatureIcons.dimensions,
      label: commonT('dimensions'),
      name: 'dimensions',
      onChange: handleChangeDimensions,
      options: dimensionsOptions,
      value: measureUnits.dimensions
    },
    {
      icon: wheelFeatureIcons.weight,
      label: commonT('weight'),
      name: 'weight',
      onChange: handleChangeWeight,
      options: weightOptions,
      value: measureUnits.weight
    },
    {
      icon: wheelFeatureIcons.groundClearance,
      label: commonT('groundClearance'),
      name: 'groundClearance',
      onChange: handleChangeGroundClearance,
      options: groundClearanceOptions,
      style: { marginBottom: 0 },
      value: measureUnits.groundClearance
    }
  ];

  return { measureUnitFields };
};
