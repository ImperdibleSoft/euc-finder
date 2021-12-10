import { Dispatch } from 'redux';
import { Region } from '../../types';
import { DefaultMeasureUnitsAction, ResetMeasureUnitsAction, SetMeasureUnitAction, SetRegionAction } from '../types';

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