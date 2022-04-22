import { Dispatch } from 'redux';
import { Region } from '../../types';
import {
  DefaultMeasureUnitsAction,
  ResetMeasureUnitsAction,
  SetCustomSpecWeightAction,
  SetMeasureUnitAction,
  SetRegionAction,
  SetSpecWeightsPresetAction,
  SetStartupAppAction,
  SetThemeAction,
  SetUserWeightAction,
  SpecWeightsPreset
} from '../types';

export const defaultMeasureUnits = () => (dispatch: Dispatch) => {
  dispatch({ type: 'DEFAULT_MEASURE_UNITS' } as DefaultMeasureUnitsAction);
};

export const resetMeasureUnits = () => (dispatch: Dispatch) => {
  dispatch({ type: 'RESET_MEASURE_UNITS' } as ResetMeasureUnitsAction);
};

export const setMeasureUnit = (payload: SetMeasureUnitAction['payload']) => (dispatch: Dispatch) => {
  dispatch({
    type: 'SET_MEASURE_UNIT',
    payload
  } as SetMeasureUnitAction);
};

export const setRegion = (region: Region) => (dispatch: Dispatch) => {
  dispatch({
    type: 'SET_REGION',
    payload: { region }
  } as SetRegionAction);
};

export const setAppOnStartup = (startupApp?: string) => (dispatch: Dispatch) => {
  dispatch({
    type: 'SET_STARTUP_APP',
    payload: { startupApp }
  } as SetStartupAppAction);
};

export const setSpecWeightsPreset = (preset: SpecWeightsPreset) => (dispatch: Dispatch) => {
  dispatch({
    type: 'SET_SPECWEIGHTS_PRESET',
    payload: { preset }
  } as SetSpecWeightsPresetAction);
};

export const setCustomSpecWeight = (payload: SetCustomSpecWeightAction['payload']) => (dispatch: Dispatch) => {
  dispatch({
    type: 'SET_CUSTOM_SPECWEIGHT',
    payload
  } as SetCustomSpecWeightAction);
};

export const setTheme = (payload: SetThemeAction['payload']) =>
  (dispatch: Dispatch) => {
    dispatch({
      type: 'SET_THEME',
      payload
    } as SetThemeAction);
  };

export const setUserWeight = (payload: SetUserWeightAction['payload']) =>
  (dispatch: Dispatch) => {
    dispatch({
      type: 'SET_WEIGHT',
      payload
    } as SetUserWeightAction);
  };
