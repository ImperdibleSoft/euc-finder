import {
  DiameterUnits,
  GroundClearanceUnits,
  LOCAL_STORAGE_KEY,
  RangeUnits,
  Region,
  SpeedUnits,
  WeightUnits,
  WidthUnits
} from '../../types';
import { getItem } from '../../utils';
import { SettingsState } from '../types';

export const getMeasureUnitsDefaultValue = (): SettingsState['measureUnits'] => ({
  diameter: DiameterUnits.in,
  groundClearance: GroundClearanceUnits.mm,
  maxSpeed: SpeedUnits.kmh,
  range: RangeUnits.km,
  weight: WeightUnits.kg,
  width: WidthUnits.in
});
const measureUnitsDefaultValue = getMeasureUnitsDefaultValue();

export const getSettingsInitialState = (): SettingsState => ({
  disclaimer: getItem(LOCAL_STORAGE_KEY.RANGE_DISCLAIMER) === 'true',
  measureUnits: {
    diameter:
      getItem(LOCAL_STORAGE_KEY.PREFERENCE_DIAMETER) as DiameterUnits
      || measureUnitsDefaultValue.diameter,
    groundClearance:
      getItem(LOCAL_STORAGE_KEY.PREFERENCE_GROUND_CLEARANCE) as GroundClearanceUnits
      || measureUnitsDefaultValue.groundClearance,
    maxSpeed:
      getItem(LOCAL_STORAGE_KEY.PREFERENCE_MAX_SPEED) as SpeedUnits
      || measureUnitsDefaultValue.maxSpeed,
    range:
      getItem(LOCAL_STORAGE_KEY.PREFERENCE_RANGE) as RangeUnits
      || measureUnitsDefaultValue.range,
    weight:
      getItem(LOCAL_STORAGE_KEY.PREFERENCE_WEIGHT) as WeightUnits
      || measureUnitsDefaultValue.weight,
    width:
      getItem(LOCAL_STORAGE_KEY.PREFERENCE_WIDTH) as WidthUnits
      || measureUnitsDefaultValue.width
  },
  region: (getItem(LOCAL_STORAGE_KEY.REGION) || 'eu') as Region
});