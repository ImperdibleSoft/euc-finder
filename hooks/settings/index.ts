import { ChangeEvent, useState } from 'react';
import { DropdownItem, Props } from '../../components/Form/Dropdown';
import { wheelFeatureIcons, wheelFeatureNames } from '../../constants';
import {
  DiameterUnits,
  GroundClearanceUnits,
  RangeUnits,
  SpeedUnits,
  WeightUnits,
  WidthUnits
} from '../../types/settings';


const diameterOptions: DropdownItem[] = [
  {
    label: 'Centímetros',
    value: DiameterUnits.cm
  },
  {
    label: 'Pulgadas',
    value: DiameterUnits.in
  }
];

const widthOptions: DropdownItem[] = [
  {
    label: 'Centímetros',
    value: WidthUnits.cm
  },
  {
    label: 'Pulgadas',
    value: WidthUnits.in
  }
];

const rangeOptions: DropdownItem[] = [
  {
    label: 'Kilómetros',
    value: RangeUnits.km
  },
  {
    label: 'Millas',
    value: RangeUnits.mi
  }
];

const speedOptions: DropdownItem[] = [
  {
    label: 'Kilómetros por hora',
    value: SpeedUnits.kmh
  },
  {
    label: 'Millas por hora',
    value: SpeedUnits.mih
  }
];

const weightOptions: DropdownItem[] = [
  {
    label: 'Kilogramos',
    value: WeightUnits.kg
  },
  {
    label: 'Libras',
    value: WeightUnits.lb
  }
];

const groundClearanceOptions: DropdownItem[] = [
  {
    label: 'Milímetros',
    value: GroundClearanceUnits.mm
  },
  {
    label: 'Pulgadas',
    value: GroundClearanceUnits.in
  }
];

export const useSettings = () => {
  const [diameter, setDiameter] = useState(DiameterUnits.in);
  const [width, setWidth] = useState(WidthUnits.in);
  const [range, setRange] = useState(RangeUnits.km);
  const [speed, setSpeed] = useState(SpeedUnits.kmh);
  const [weight, setWeight] = useState(WeightUnits.kg);
  const [groundClearance, setGroundClearance] = useState(GroundClearanceUnits.mm);

  const handleChangeDiameter = (event: ChangeEvent<HTMLSelectElement>) => {
    const { value } = event.target;
    setDiameter(value as DiameterUnits);
  };

  const handleChangeWidth = (event: ChangeEvent<HTMLSelectElement>) => {
    const { value } = event.target;
    setWidth(value as WidthUnits);
  };

  const handleChangeRange = (event: ChangeEvent<HTMLSelectElement>) => {
    const { value } = event.target;
    setRange(value as RangeUnits);
  };

  const handleChangeSpeed = (event: ChangeEvent<HTMLSelectElement>) => {
    const { value } = event.target;
    setSpeed(value as SpeedUnits);
  };

  const handleChangeWeight = (event: ChangeEvent<HTMLSelectElement>) => {
    const { value } = event.target;
    setWeight(value as WeightUnits);
  };

  const handleChangeGroundClearance = (event: ChangeEvent<HTMLSelectElement>) => {
    const { value } = event.target;
    setGroundClearance(value as GroundClearanceUnits);
  };

  const fields: Props[] = [
    {
      icon: wheelFeatureIcons.diameter,
      label: wheelFeatureNames.diameter,
      name: 'diameter',
      onChange: handleChangeDiameter,
      options: diameterOptions,
      value: diameter
    },
    {
      icon: wheelFeatureIcons.width,
      label: wheelFeatureNames.width,
      name: 'width',
      onChange: handleChangeWidth,
      options: widthOptions,
      value: width
    },
    {
      icon: wheelFeatureIcons.maxSpeed,
      label: wheelFeatureNames.maxSpeed,
      name: 'speed',
      onChange: handleChangeSpeed,
      options: speedOptions,
      value: speed
    },
    {
      icon: wheelFeatureIcons.range,
      label: wheelFeatureNames.range,
      name: 'range',
      onChange: handleChangeRange,
      options: rangeOptions,
      value: range
    },
    {
      icon: wheelFeatureIcons.weight,
      label: wheelFeatureNames.weight,
      name: 'weight',
      onChange: handleChangeWeight,
      options: weightOptions,
      value: weight
    },
    {
      icon: wheelFeatureIcons.groundClearance,
      label: wheelFeatureNames.groundClearance,
      name: 'groundClearance',
      onChange: handleChangeGroundClearance,
      options: groundClearanceOptions,
      style: { marginBottom: 0 },
      value: groundClearance
    }
  ];

  return fields;
};