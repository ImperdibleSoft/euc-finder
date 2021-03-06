/* eslint-disable max-lines */
import { TFunction } from 'react-i18next';
import { commonNs } from '../hooks';
import {
  AntiSpin,
  Battery,
  Brand,
  Color,
  DiameterUnits,
  DimensionsUnits,
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
import { getBrandInfo } from './brands';
import { getTranslation } from './clientTranslatedResources';
import {
  getChargingTime,
  getConvertedDiameter,
  getConvertedDimensions,
  getConvertedGroundClearance,
  getConvertedRange,
  getConvertedSpeed,
  getConvertedWeight
} from './conversions';
import { getEstimatedMinRange, toDecimals } from './range';

// eslint-disable-next-line max-params
export const currency = (value: number, region: Region, decimals = 2, minDecimals = undefined): string => {
  if (value) {
    switch (region) {
      case 'us':
        return `US$ ${ toDecimals(value, decimals, minDecimals) }`;

      default:
        return `${ toDecimals(value, decimals, minDecimals) } €`;
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

    if (output.length) {
      return output;
    }
  }

  return '-';
};

export const chargePorts = (value: number): string => {
  if (value) {
    return `${ value }`;
  }

  return '-';
};

interface ChargingParams {
  battery: Battery;
  voltage: number;
  chargePorts: number;
  tension: number;
}
export const chargeInfo = (val: ChargingParams, t: TFunction<'translation'>): string => {
  if (val.tension) {
    if (val.battery && val.voltage) {
      let str = '';

      for (let x = 1; x <= val.chargePorts; x++) {
        const chargingTime = getChargingTime({
          tension: val.tension * x,
          voltage: val.voltage,
          wattsHour: val.battery.wattsHour
        });

        if (str !== '') {
          str += ', ';
        }

        str += `${ chargingTime }h (${ t('usingChargers', { ...commonNs, count: x, tension: `${ val.tension }A` }) })`;
      }

      return str;
    }

    return `${ val.tension }A`;
  }

  return '-';
};

export const maxCharger = (value: number): string => {
  if (value) {
    return `${ value }`;
  }

  return '-';
};

export const usbPorts = (value?: [number, number] | false, t?: TFunction<'translation'>): string => {
  if (value === undefined) {
    return '-';
  }

  if (value === false) {
    return boolean(false, t);
  }
  
  const [usbA, usbC] = value;
  let str = '';

  if (usbA) {
    str += `${ usbA }x USB-A`;
  }

  if (usbC) {
    if (usbA) {
      str += ', ';
    }

    str += `${ usbC }x USB-C`;
  }

  return str;
};

export const degrees = (value: number): string => {
  if (value) {
    return `${ value }°`;
  }

  return '-';
};

export const voltage = (value: number): string => {
  if (value) {
    return `${ toDecimals(value, 1) }v`;
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
      return t?.(value, commonNs) ?? getTranslation(value);

    default:
      return t?.('no', commonNs) ?? getTranslation('no');
  }
};

export const antiSpin = (value?: AntiSpin, t?: TFunction<'translation'>): string => {
  switch (value) {
    case AntiSpin.sensor:
    case AntiSpin.button:
    case AntiSpin.position:
      return t?.(value, commonNs) ?? getTranslation(value);

    default:
      return t?.('no', commonNs) ?? getTranslation('no');
  }
};

export const dimensions = (
  value?: [number, number, number],
  t?: TFunction<'translation'>,
  units?: DimensionsUnits
  // eslint-disable-next-line max-params
): string => {
  if (!value) {
    return '-';
  }

  const [height, width, deep] = value;

  if (!height && !width && !deep) {
    return '-';
  }

  const convertedVal = [
    getConvertedDimensions(height, units),
    getConvertedDimensions(width, units),
    getConvertedDimensions(deep, units)
  ];

  const transH = t?.('height-label', commonNs) ?? getTranslation('height-label');
  const transW = t?.('width-label', commonNs) ?? getTranslation('width-label');
  const transL = t?.('long-label', commonNs) ?? getTranslation('long-label');
  
  const [convertedH, convertedW, convertedD] = convertedVal;
  switch (units) {
    case DimensionsUnits.in:
      return `${ transH } ${ convertedH }'' x ${ transW } ${ convertedW }'' x ${ transL } ${ convertedD }''`;
      
    case DimensionsUnits.mm:
    default:
      return `${ transH } ${ convertedH }mm x ${ transW } ${ convertedW }mm x ${ transL } ${ convertedD }mm`;
  }
};

export const pedals = (value?: [PedalType, PedalSurface, boolean], t?: TFunction<'translation'>): string => {
  if (!value) {
    return t?.('no', commonNs) ?? getTranslation('no');
  }

  const [pedalType, pedalSurface, retentionPins] = value;
  let str = '';

  if (pedalType) {
    str += `${ t?.(pedalType, commonNs) }, `;
  }

  if (pedalSurface) {
    str += t?.(pedalSurface, commonNs)?.toLowerCase();
  }

  if (retentionPins) {
    if (pedalSurface) {
      str += `, `;
    }
    str += `${ t?.('with', commonNs).toLowerCase() } ${ t?.('retentionPins', commonNs)?.toLowerCase() }`;
  }

  return str || '-';
};

export const pedalSize = (
  value?: [number | undefined, number | undefined],
  t?: TFunction<'translation'>,
  units?: DimensionsUnits
  // eslint-disable-next-line max-params
): string => {
  if (!value) {
    return '-';
  }

  const [length, width] = value;

  if (!length || !width) {
    return '-';
  }

  const convertedVal = [
    getConvertedDimensions(length, units),
    getConvertedDimensions(width, units)
  ];

  const transL = t?.('long-label', commonNs) ?? getTranslation('long-label');
  const transW = t?.('width-label', commonNs) ?? getTranslation('width-label');
  
  const [convertedH, convertedW] = convertedVal;
  switch (units) {
    case DimensionsUnits.in:
      return `${ transL } ${ convertedH }'' x ${ transW } ${ convertedW }''`;
      
    case DimensionsUnits.mm:
    default:
      return `${ transL } ${ convertedH }mm x ${ transW } ${ convertedW }mm`;
  }
};

export const kickstand = (value?: Kickstand, t?: TFunction<'translation'>): string => {
  switch (value) {
    case Kickstand.dedicated:
    case Kickstand.shell:
      return t?.(value, commonNs) ?? getTranslation(value);

    default:
      return t?.('no', commonNs) ?? getTranslation('no');
  }
};

export const lumens = (value: Lumens, t?: TFunction<'translation'>): string => {
  if (value === true) {
    return t?.('yes', commonNs) ?? getTranslation('yes');
  }

  if (value === false) {
    return t?.('no', commonNs) ?? getTranslation('no');
  }

  if (value) {
    return `${ value } lm`;
  }

  return '-';
};

export const boolean = (value: boolean, t?: TFunction<'translation'>): string => {
  if (value === undefined) {
    return '-';
  }
  
  if (value) {
    return t?.('yes', commonNs) ?? getTranslation('yes');
  }

  return t?.('no', commonNs) ?? getTranslation('no');
};

export const soundChannels = (
  value?: SoundSystem,
  t?: TFunction<'translation'>
): string => {
  if (value) {
    return `${ value } ch`;
  }

  return t?.('no', commonNs) ?? getTranslation('no');
};

export const display = (value?: Display, t?: TFunction<'translation'>): string => {
  switch (value) {
    case Display.lcd:
    case Display.led:
      return t?.(value, commonNs) ?? getTranslation(value);

    default:
      return t?.('no', commonNs) ?? getTranslation('no');
  }
};

export const suspension = (
  value?: Suspension,
  t?: TFunction<'translation'>
): string => {
  switch (value) {
    case Suspension.custom:
    case Suspension.standard:
      return t?.(value, commonNs) ?? getTranslation(value);

    default:
      return t?.('no', commonNs) ?? getTranslation('no');
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
        case Color.blackAndRed:
        case Color.blackAndYellow:
        case Color.blackAndSilver:
          return t?.(value, commonNs) ?? getTranslation(value);

        default:
          return value;
      }
    }

    return value.map((c) => color(c, t)).join(', ');
  }

  return '-';
};

export const formatWheelName = ({ brandId, name }: Wheel, brands: Brand[]) => {
  const brand = getBrandInfo(brandId, brands);

  if (brand) {
    return `${ brand.name } ${ name }`;
  }

  return name;
};
