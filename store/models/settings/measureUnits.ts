import {
  DiameterUnits,
  GroundClearanceUnits,
  LOCAL_STORAGE_KEY,
  RangeUnits,
  SizeUnits,
  SpeedUnits,
  WeightUnits,
  WidthUnits
} from '../../../types';
import { getItem } from '../../../utils';
import { MeasureUnits } from '../../types';

export const getMeasureUnitsDefaultValue = (): MeasureUnits => ({
  diameter: DiameterUnits.in,
  groundClearance: GroundClearanceUnits.mm,
  maxSpeed: SpeedUnits.kmh,
  range: RangeUnits.km,
  size: SizeUnits.mm,
  weight: WeightUnits.kg,
  width: WidthUnits.in
});

export const measureUnitsDefaultValue = getMeasureUnitsDefaultValue();

export const getInitialMeasureUnits = (): MeasureUnits => ({
  diameter:
    getItem(LOCAL_STORAGE_KEY.MEASUREUNIT_DIAMETER) as DiameterUnits
    || measureUnitsDefaultValue.diameter,
  groundClearance:
    getItem(LOCAL_STORAGE_KEY.MEASUREUNIT_GROUNDCLEARANCE) as GroundClearanceUnits
    || measureUnitsDefaultValue.groundClearance,
  maxSpeed:
    getItem(LOCAL_STORAGE_KEY.MEASUREUNIT_MAXSPEED) as SpeedUnits
    || measureUnitsDefaultValue.maxSpeed,
  range:
    getItem(LOCAL_STORAGE_KEY.MEASUREUNIT_RANGE) as RangeUnits
    || measureUnitsDefaultValue.range,
  size:
    getItem(LOCAL_STORAGE_KEY.MEASUREUNIT_SIZE) as SizeUnits
    || measureUnitsDefaultValue.size,
  weight:
    getItem(LOCAL_STORAGE_KEY.MEASUREUNIT_WEIGHT) as WeightUnits
    || measureUnitsDefaultValue.weight,
  width:
    getItem(LOCAL_STORAGE_KEY.MEASUREUNIT_WIDTH) as WidthUnits
    || measureUnitsDefaultValue.width
});
