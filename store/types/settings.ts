import {
  AvailableTheme,
  DiameterUnits,
  GroundClearanceUnits,
  RangeUnits,
  Region,
  DimensionsUnits,
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
  dimensions: DimensionsUnits;
  weight: WeightUnits;
  width: WidthUnits;
}

export enum SpecWeightsPreset {
  generic = 'generic',
  comfy = 'comfy',
  safe = 'safe',
  performant = 'performant',
  custom = 'custom'
}

export type SpecWeights = Record<
  // eslint-disable-next-line max-len
  keyof Omit<Omit<Omit<Omit<Omit<Omit<WheelFeatures, 'peakPower'>, 'voltage'>, 'diameter'>, 'width'>, 'groundClearance'>, 'color'>,
  number
>;


interface UserState {
  weight: number;
}

export interface SettingsState {
  disclaimer: boolean;
  measureUnits: MeasureUnits;
  region: Region;
  specWeights: {
    preset?: SpecWeightsPreset;
    customValues: SpecWeights
  };
  startupApp?: string;
  theme: AvailableTheme;
  user: UserState;
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

export interface SetStartupAppAction {
  type: 'SET_STARTUP_APP';
  payload: {
    startupApp?: string;
  }
}

export interface SetSpecWeightsPresetAction {
  type: 'SET_SPECWEIGHTS_PRESET',
  payload: {
    preset: SpecWeightsPreset
  };
}

export interface SetCustomSpecWeightAction {
  type: 'SET_CUSTOM_SPECWEIGHT',
  payload: {
    key: keyof SpecWeights,
    value: number,
  }
}

export interface SetThemeAction {
  type: 'SET_THEME',
  payload: {
    theme: SettingsState['theme'],
  }
}

export interface SetUserWeightAction {
  type: 'SET_WEIGHT',
  payload: {
    weight: number,
  }
}

export type SettingsAction =
  | DefaultMeasureUnitsAction
  | ResetMeasureUnitsAction
  | SetMeasureUnitAction
  | SetRegionAction
  | SetStartupAppAction
  | SetSpecWeightsPresetAction
  | SetCustomSpecWeightAction
  | SetThemeAction
  | SetUserWeightAction;
