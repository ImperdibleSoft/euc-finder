/* eslint-disable max-lines */
import {
  AntiSpin,
  Brands,
  Color,
  DiameterUnits,
  Display,
  GroundClearance,
  GroundClearanceUnits,
  Kickstand,
  Lumens,
  RangeUnits,
  SoundSystem,
  SpeedUnits,
  Suspension,
  TrolleyHandle,
  WeightUnits,
  Wheel
} from '../types';
import {
  getConvertedDiameter,
  getConvertedGroundClearance,
  getConvertedRange,
  getConvertedSpeed,
  getConvertedWeight
} from './conversions';
import { getEstimatedRealRange, toDecimals } from './range';
import { getTranslation } from './clientTranslatedResources';
import { TFunction } from 'react-i18next';

export const currency = (value: number): string => {
  if (value) {
    return `${ toDecimals(value, 2) } €`;
  }

  return '-';
};

export const diameter = (
  value: number,
  t?: TFunction<string>,
  units?: DiameterUnits,
  decimals = 0
  // eslint-disable-next-line max-params
): string => {
  if (value) {
    const convertedVal = getConvertedDiameter(value, units, decimals);

    switch (units) {
      case DiameterUnits.cm:
        return `${ convertedVal } cm`;

      case DiameterUnits.in:
      default:
        return `${ convertedVal }''`;
    }
  }

  return '-';
};

export const speed = (
  value: number,
  t?: TFunction<string>,
  units?: SpeedUnits
): string => {
  if (value) {
    const convertedVal = getConvertedSpeed(value, units);

    switch (units) {
      case SpeedUnits.mih:
        return `${ convertedVal } mi/h`;

      case SpeedUnits.kmh:
      default:
        return `${ convertedVal } km/h`;
    }
  }

  return '-';
};

export const distance = (
  value: number,
  t?: TFunction<string>,
  units?: RangeUnits
): string => {
  if (value) {
    const convertedVal = getConvertedRange(getEstimatedRealRange(value), units);

    switch (units) {
      case RangeUnits.mi:
        return `${ convertedVal } mi`;

      case RangeUnits.km:
      default:
        return `${ convertedVal } km`;
    }
  }

  return '-';
};

export const power = (value: number): string => {
  if (value) {
    return `${ value } W`;
  }

  return '-';
};

export const energy = (value: number): string => {
  if (value) {
    return `${ value } Wh`;
  }

  return '-';
};

export const capacity = (value: number): string => {
  if (value) {
    return `${ value } mAh`;
  }

  return '-';
};

export const degrees = (value: number): string => {
  if (value) {
    return `${ value }°`;
  }

  return '-';
};

export const voltage = (value: number): string => {
  if (value) {
    return `${ toDecimals(value, 0) }v`;
  }

  return '-';
};

export const groundClearance = (
  value: GroundClearance,
  t?: TFunction<string>,
  units?: GroundClearanceUnits
): string => {
  if (value) {
    if (typeof value === 'number') {
      const convertedVal = getConvertedGroundClearance(value, units);

      switch (units) {
        case GroundClearanceUnits.in:
          return `${ convertedVal } in`;

        case GroundClearanceUnits.mm:
        default:
          return `${ convertedVal } mm`;
      }
    }

    if (value.length === 2) {
      const [min, max] = value;
      return `${ groundClearance(min, t, units) } - ${ groundClearance(max, t, units) }`;
    }

    return value
      .map((clearance) => groundClearance(clearance, t, units))
      .join(', ');
  }

  return '-';
};

export const weight = (
  value: number,
  t?: TFunction<string>,
  units?: WeightUnits
): string => {
  if (value) {
    const convertedVal = getConvertedWeight(value, units);

    switch (units) {
      case WeightUnits.lb:
        return `${ convertedVal } lb`;

      case WeightUnits.kg:
      default:
        return `${ convertedVal } kg`;
    }
  }

  return '-';
};

export const trolleyHandle = (
  value?: TrolleyHandle,
  t?: TFunction<string>
): string => {
  switch (value) {
    case TrolleyHandle.scorpion:
    case TrolleyHandle.telescopic:
      return t?.(value) ?? getTranslation(value);

    default:
      return t?.('no') ?? getTranslation('no');
  }
};

export const antiSpin = (value?: AntiSpin, t?: TFunction<string>): string => {
  switch (value) {
    case AntiSpin.sensor:
    case AntiSpin.button:
    case AntiSpin.position:
      return t?.(value) ?? getTranslation(value);

    default:
      return t?.('no') ?? getTranslation('no');
  }
};

export const kickstand = (value?: Kickstand, t?: TFunction<string>): string => {
  switch (value) {
    case Kickstand.dedicated:
    case Kickstand.shell:
      return t?.(value) ?? getTranslation(value);

    default:
      return t?.('no') ?? getTranslation('no');
  }
};

export const lumens = (value: Lumens, t?: TFunction<string>): string => {
  if (value === true) {
    return t?.('yes') ?? getTranslation('yes');
  }

  if (value === false) {
    return t?.('no') ?? getTranslation('no');
  }

  if (value) {
    return `${ value } lm`;
  }

  return '-';
};

export const boolean = (value: boolean, t?: TFunction<string>): string => {
  if (value) {
    return t?.('yes') ?? getTranslation('yes');
  }

  return t?.('no') ?? getTranslation('no');
};

export const soundChannels = (
  value?: SoundSystem,
  t?: TFunction<string>
): string => {
  if (value) {
    return `${ value } ch`;
  }

  return t?.('no') ?? getTranslation('no');
};

export const display = (value?: Display, t?: TFunction<string>): string => {
  switch (value) {
    case Display.lcd:
    case Display.led:
      return t?.(value) ?? getTranslation(value);

    default:
      return t?.('no') ?? getTranslation('no');
  }
};

export const suspension = (
  value?: Suspension,
  t?: TFunction<string>
): string => {
  switch (value) {
    case Suspension.custom:
    case Suspension.standard:
      return t?.(value) ?? getTranslation(value);

    default:
      return t?.('no') ?? getTranslation('no');
  }
};

export const color = (
  value?: Color | Color[],
  t?: TFunction<string>
): string => {
  if (value) {
    if (typeof value === 'string') {
      switch (value) {
        case Color.white:
        case Color.black:
          return t?.(value) ?? getTranslation(value);

        default:
          return value;
      }
    }

    return value.map((c) => color(c)).join(', ');
  }

  return '-';
};

export const formatWheelName = ({ brandId, name }: Wheel, brands: Brands) =>
  `${ brands[brandId].name } ${ name }`;
