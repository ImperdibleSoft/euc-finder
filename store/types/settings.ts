import {
  DiameterUnits,
  GroundClearanceUnits,
  RangeUnits,
  Region,
  SpeedUnits,
  WeightUnits,
  WidthUnits
} from '../../types';

export interface SettingsState {
  disclaimer: boolean;
  measureUnits: {
    diameter: DiameterUnits;
    groundClearance: GroundClearanceUnits;
    range: RangeUnits;
    maxSpeed: SpeedUnits;
    weight: WeightUnits;
    width: WidthUnits;
  };
  region: Region;
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
    key: keyof SettingsState['measureUnits'];
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