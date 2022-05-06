import {
  DiameterUnits,
  DimensionsUnits,
  GroundClearanceUnits,
  RangeUnits,
  SpeedUnits,
  WeightUnits,
  WheelId,
  WidthUnits
} from '../types';

export interface AvailableQueryParams {
  dark: boolean;
  diameter: DiameterUnits;
  dimensions: DimensionsUnits;
  features?: string[];
  groundClearance: GroundClearanceUnits;
  icons: boolean;
  lang: 'en' | 'es' | 'fr';
  limits: boolean;
  maxSpeed: SpeedUnits;
  picture: boolean;
  range: RangeUnits;
  title: boolean;
  wheelId?: WheelId;
  weight: WeightUnits;
  width: WidthUnits;
}

const parseValue = (key: string, value: string) => {
  switch (key) {
    case 'features':
      if (value) {
        return value.split(',');
      }
      return undefined;

    case 'diameter':
      return value === DiameterUnits.in ? value : DiameterUnits.cm;
      
    case 'maxSpeed':
      return value === SpeedUnits.mih ? value : SpeedUnits.kmh;

    case 'range':
      return value === RangeUnits.mi ? value : RangeUnits.km;

    case 'dimensions':
      return value === DimensionsUnits.in ? value : DimensionsUnits.mm;

    case 'weight':
      return value === WeightUnits.lb ? value : WeightUnits.kg;

    case 'width':
      return value === WidthUnits.in ? value : WidthUnits.cm;

    case 'dark':
    case 'icons':
    case 'limits':
    case 'picture':
    case 'title':
      return value !== 'false';

    case 'lang':
      if (value !== 'en' && value !== 'es' && value !== 'fr') {
        return 'en';
      }

      return value;
      
    default:
      return value;
  }
};

export const getQueryParams = (): AvailableQueryParams => {
  const location = global?.location ?? {};

  const defaultParams: AvailableQueryParams = {
    dark: false,
    diameter: DiameterUnits.in,
    dimensions: DimensionsUnits.mm,
    groundClearance: GroundClearanceUnits.mm,
    icons: true,
    lang: 'en',
    limits: true,
    maxSpeed: SpeedUnits.kmh,
    picture: true,
    range: RangeUnits.km,
    title: true,
    weight: WeightUnits.kg,
    width: WidthUnits.cm
  };

  return (location.search ?? '')
    .replace(/^\?/, '')
    .split('&')
    .reduce((result, curr) => {
      const [key, value] = curr.split('=');
    
      return {
        ...result,
        [key]: parseValue(key, value)
      };
    }, defaultParams);
};
