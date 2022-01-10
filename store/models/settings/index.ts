import {
  DiameterUnits,
  GroundClearanceUnits,
  LOCAL_STORAGE_KEY,
  RangeUnits,
  Region,
  SpeedUnits,
  WeightUnits,
  WidthUnits
} from '../../../types';
import { getItem } from '../../../utils';
import { MeasureUnits, SettingsState, SpecWeightsPreset } from '../../types';
import { getGenericSpecWheights } from './specWeights';

export const getMeasureUnitsDefaultValue = (): MeasureUnits => ({
  diameter: DiameterUnits.in,
  groundClearance: GroundClearanceUnits.mm,
  maxSpeed: SpeedUnits.kmh,
  range: RangeUnits.km,
  weight: WeightUnits.kg,
  width: WidthUnits.in
});
const measureUnitsDefaultValue = getMeasureUnitsDefaultValue();

export const getSettingsInitialState = (): SettingsState => ({
  disclaimer: getItem(LOCAL_STORAGE_KEY.INITIAL_DISCLAIMER) === 'true',
  measureUnits: {
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
    weight:
      getItem(LOCAL_STORAGE_KEY.MEASUREUNIT_WEIGHT) as WeightUnits
      || measureUnitsDefaultValue.weight,
    width:
      getItem(LOCAL_STORAGE_KEY.MEASUREUNIT_WIDTH) as WidthUnits
      || measureUnitsDefaultValue.width
  },
  region: (getItem(LOCAL_STORAGE_KEY.REGION) || 'eu') as Region,
  specWeights: {
    preset: SpecWeightsPreset.generic,
    customValues: getGenericSpecWheights()
  }
});