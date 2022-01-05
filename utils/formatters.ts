/* eslint-disable max-lines */
import { TFunction } from 'react-i18next';
import {
  AntiSpin,
  Battery,
  Brands,
  Color,
  DiameterUnits,
  Display,
  GroundClearance,
  GroundClearanceUnits,
  Kickstand,
  Lumens,
  PedalSurface,
  PedalType,
  RangeUnits,
  Region,
  SoundSystem,
  SpeedUnits,
  Suspension,
  TrolleyHandle,
  WeightUnits,
  Wheel
} from '../types';
import { getTranslation } from './clientTranslatedResources';
import {
  getConvertedDiameter,
  getConvertedGroundClearance,
  getConvertedRange,
  getConvertedSpeed,
  getConvertedWeight
} from './conversions';
import { getEstimatedMinRange, toDecimals } from './range';

export const currency = (value: number, region: Region): string => {
  if (value) {
    switch (region) {
      case 'us':
        return `US$ ${ toDecimals(value, 2) }`;

      default:
        return `${ toDecimals(value, 2) } €`;
    }
  }

  return '-';
};

export const diameter = (
  value: number,
  t?: TFunction<'translation'>,
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
  t?: TFunction<'translation'>,
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
  t?: TFunction<'translation'>,
  units?: RangeUnits
): string => {
  if (value) {
    const convertedMin = getConvertedRange(getEstimatedMinRange(value), units);
    const convertedMax = getConvertedRange(value, units);

    switch (units) {
      case RangeUnits.mi:
        return `${ convertedMin } mi - ${ convertedMax } mi`;

      case RangeUnits.km:
      default:
        return `${ convertedMin } km - ${ convertedMax } km`;
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

export const battery = (value: Battery): string => {
  if (value) {
    const { capacity, parallels, type, wattsHour } = value;
    const p = parallels && `${ parallels }p`;
    const mAh = capacity && `${ capacity } mAh`;
    const wh = wattsHour && `${ wattsHour } Wh`;

    let output = '';
    if (wh) {
      output += wh;
    }

    if (p || mAh || type) {
      output += ' (';

      if (p) {
        output += p;
      }
  
      if (mAh) {
        if (p) {
          output += ' x ';
        }
        output += mAh;
      }

      if (type) {
        if (p || mAh) {
          output += ', ';
        }
        output += type;
      }

      output += ')';
    }

    return output;
  }

  return '-';
};

export const batterySetup = (value: number[]): string => {
  if (value?.length === 2) {
    const [cells, mAh] = value;

    if (cells && mAh) {
      return `${ cells }p x ${ mAh } mAh`;
    }
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
  t?: TFunction<'translation'>,
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
  t?: TFunction<'translation'>,
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
  t?: TFunction<'translation'>
): string => {
  switch (value) {
    case TrolleyHandle.scorpion:
    case TrolleyHandle.telescopic:
      return t?.(value) ?? getTranslation(value);

    default:
      return t?.('no') ?? getTranslation('no');
  }
};

export const antiSpin = (value?: AntiSpin, t?: TFunction<'translation'>): string => {
  switch (value) {
    case AntiSpin.sensor:
    case AntiSpin.button:
    case AntiSpin.position:
      return t?.(value) ?? getTranslation(value);

    default:
      return t?.('no') ?? getTranslation('no');
  }
};

export const pedals = (value?: [PedalType, PedalSurface, boolean], t?: TFunction<'translation'>): string => {
  if (!value) {
    return t?.('no') ?? getTranslation('no');
  }

  const [pedalType, pedalSurface, retentionPins] = value;
  let str = '';

  if (pedalType) {
    str += `${ t?.(pedalType) }, `;
  }

  if (pedalSurface) {
    str += t?.(pedalSurface)?.toLowerCase();
  }

  if (retentionPins) {
    if (pedalSurface) {
      str += `, `;
    }
    str += `${ t?.('with').toLowerCase() } ${ t?.('retentionPins')?.toLowerCase() }`;
  }

  return str || '-';
};

export const kickstand = (value?: Kickstand, t?: TFunction<'translation'>): string => {
  switch (value) {
    case Kickstand.dedicated:
    case Kickstand.shell:
      return t?.(value) ?? getTranslation(value);

    default:
      return t?.('no') ?? getTranslation('no');
  }
};

export const lumens = (value: Lumens, t?: TFunction<'translation'>): string => {
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

export const boolean = (value: boolean, t?: TFunction<'translation'>): string => {
  if (value) {
    return t?.('yes') ?? getTranslation('yes');
  }

  return t?.('no') ?? getTranslation('no');
};

export const soundChannels = (
  value?: SoundSystem,
  t?: TFunction<'translation'>
): string => {
  if (value) {
    return `${ value } ch`;
  }

  return t?.('no') ?? getTranslation('no');
};

export const display = (value?: Display, t?: TFunction<'translation'>): string => {
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
  t?: TFunction<'translation'>
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
  t?: TFunction<'translation'>
): string => {
  if (value) {
    if (typeof value === 'string') {
      switch (value) {
        case Color.white:
        case Color.black:
        case Color.silver:
          return t?.(value) ?? getTranslation(value);

        default:
          return value;
      }
    }

    return value.map((c) => color(c, t)).join(', ');
  }

  return '-';
};

export const formatWheelName = ({ brandId, name }: Wheel, brands: Brands) =>
  `${ brands[brandId].name } ${ name }`;
