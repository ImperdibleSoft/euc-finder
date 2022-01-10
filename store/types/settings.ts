import {
  DiameterUnits,
  GroundClearanceUnits,
  RangeUnits,
  Region,
  SpeedUnits,
  WeightUnits,
  WheelFeatures,
  WidthUnits
} from '../../types';

export interface MeasureUnits {
  diameter: DiameterUnits;
  groundClearance: GroundClearanceUnits;
  range: RangeUnits;
  maxSpeed: SpeedUnits;
  weight: WeightUnits;
  width: WidthUnits;
}

export type SpecWeights = Record<
  // eslint-disable-next-line max-len
  keyof Omit<Omit<Omit<Omit<Omit<Omit<WheelFeatures, 'peakPower'>, 'voltage'>, 'diameter'>, 'width'>, 'groundClearance'>, 'color'>,
  number
>;

export interface SettingsState {
  disclaimer: boolean;
  measureUnits: MeasureUnits;
  region: Region;
  specWeights: SpecWeights;
}

export interface DefaultMeasureUnitsAction {
  type: 'DEFAULT_MEASURE_UNITS'
}

export interface ResetMeasureUnitsAction {
  type: 'RESET_MEASURE_UNITS'
}

export interface SetMeasureUnitAction {
  type: 'SET_MEASURE_UNIT',
  payload: {
    key: keyof MeasureUnits;
    value: unknown;
  }
}

export interface SetRegionAction {
  type: 'SET_REGION',
  payload: {
    region: Region;
  }
}

export type SettingsAction =
  | DefaultMeasureUnitsAction
  | ResetMeasureUnitsAction
  | SetMeasureUnitAction
  | SetRegionAction;