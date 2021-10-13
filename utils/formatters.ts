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

export const currency = (value: number): string => {
  if (value) {
    return `${ value.toLocaleString('en-EN', {
      maximumFractionDigits: 2,
      minimumFractionDigits: 2
    }) } €`;
  }

  return '-';
};

export const diameter = (value: number | number[], units?: DiameterUnits): string => {
  if (value) {
    if (typeof value === 'number') {
      switch (units) {
        case DiameterUnits.cm:
          return `${ getConvertedDiameter(value, units) } cm`;

        case DiameterUnits.in:
        default:
          return `${ getConvertedDiameter(value, units) }''`;
      }
    }

    const [size, diam] = value;
    if (diam) {
      return `${ diameter(size, units) } x ${ diameter(diam, units) }`;
    }

    return diameter(size, units);
  }

  return '-';
};

export const speed = (value: number, units?: SpeedUnits): string => {
  if (value) {
    switch (units) {
      case SpeedUnits.mih:
        return `${ getConvertedSpeed(value, units) } mi/h`;

      case SpeedUnits.kmh:
      default:
        return `${ getConvertedSpeed(value, units) } km/h`;
    }
  }

  return '-';
};

export const distance = (value: number, units?: RangeUnits, estimateRealRange = true): string => {
  if (value) {
    const parsedValue = estimateRealRange ? getEstimatedRealRange(value) : value;
    switch (units) {
      case RangeUnits.mi:
        return `${ getConvertedRange(parsedValue, units) } mi`;

      case RangeUnits.km:
      default:
        return `${ getConvertedRange(parsedValue, units) } km`;
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

export const groundClearance = (value: GroundClearance, units?: GroundClearanceUnits): string => {
  if (value) {
    if (typeof value === 'number') {
      switch (units) {
        case GroundClearanceUnits.in:
          return `${ getConvertedGroundClearance(value, units) } in`;
  
        case GroundClearanceUnits.mm:
        default:
          return `${ getConvertedGroundClearance(value, units) } mm`;
      }
    }

    if (value.length === 2) {
      const [min, max] = value;
      return `${ groundClearance(min, units) } - ${ groundClearance(max, units) }`;
    }

    return value.map(clearance => groundClearance(clearance, units)).join(', ');
  }

  return '-';
};

export const weight = (value: number, units?: WeightUnits): string => {
  if (value) {
    switch (units) {
      case WeightUnits.lb:
        return `${ getConvertedWeight(value, units) } lb`;

      case WeightUnits.kg:
      default:
        return `${ getConvertedWeight(value, units) } kg`;
    }
  }

  return '-';
};

export const trolleyHandle = (value?: TrolleyHandle): string => {
  switch (value) {
    case TrolleyHandle.scorpion:
      return 'Escorpión';

    case TrolleyHandle.telescopic:
      return 'Telescópico';

    default:
      return 'No';
  }
};

export const antiSpin = (value?: AntiSpin): string => {
  switch (value) {
    case AntiSpin.sensor:
      return 'Sensor';

    case AntiSpin.button:
      return 'Botón';

    case AntiSpin.position:
      return 'Posición del Trolley';

    default:
      return 'No';
  }
};

export const kickstand = (value?: Kickstand): string => {
  switch (value) {
    case Kickstand.dedicated:
      return 'Pata de cabra';

    case Kickstand.shell:
      return 'Carcasa';
      
    default:
      return 'No';
  }
};

export const lumens = (value: Lumens): string => {
  if (value === true) {
    return 'Si';
  }

  if (value === false) {
    return 'No';
  }

  if (value) {
    return `${ value } lm`;
  }

  return '-';
};

export const boolean = (value: boolean): string => {
  if (value) {
    return 'Si';
  }

  return 'No';
};

export const soundChannels = (value?: SoundSystem): string => {
  if (value) {
    return `${ value } ch`;
  }

  return 'No';
};

export const display = (value?: Display): string => {
  switch (value) {
    case Display.lcd:
      return 'LCD';

    case Display.led:
      return 'LED';

    default:
      return 'No';
  }
};

export const suspension = (value?: Suspension): string => {
  switch (value) {
    case Suspension.oil:
      return 'Aceite';

    case Suspension.air:
      return 'Aire';

    default:
      return 'No';
  }
};

export const color = (value?: Color | Color[]): string => {
  if (value) {
    if (typeof value === 'string') {
      switch (value) {
        case Color.white:
          return 'Blanco';

        case Color.black:
          return 'Negro';

        default:
          return value;
      }
    }

    return value.map(c => color(c)).join(', ');
  }

  return '-';
};

export const formatWheelName = ({ brandId, name }: Wheel, brands: Brands) => `${ brands[brandId].name } ${ name }`;