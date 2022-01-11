import { Dispatch } from 'redux';
import {
  AddWheelToComparisionAction,
  FilterWheelsAction,
  RemoveWheelToComparisionAction,
  ResetComparisionAction,
  ResetWheelsFiltersAction,
  SortWheelsAction
} from '../types';

export const sortWheels = (payload: SortWheelsAction['payload']) =>
  (dispatch: Dispatch) => {
    dispatch({
      type: 'SORT_WHEELS',
      payload
    } as SortWheelsAction);
  };

export const resetWheelFilters = () =>
  (dispatch: Dispatch) => {
    dispatch({ type: 'RESET_WHEEL_FILTERS' } as ResetWheelsFiltersAction);
  };

export const filterWheels = (payload: FilterWheelsAction['payload']) =>
  (dispatch: Dispatch) => {
    dispatch({
      type: 'FILTER_WHEELS',
      payload
    } as FilterWheelsAction);
  };

export const addWheelToComparision = (payload: AddWheelToComparisionAction['payload']) =>
  (dispatch: Dispatch) => {
    dispatch({
      type: 'ADD_COMPARE_WHEEL',
      payload
    } as AddWheelToComparisionAction);
  };

export const removeWheelToComparision = (payload: RemoveWheelToComparisionAction['payload']) =>
  (dispatch: Dispatch) => {
    dispatch({
      type: 'REMOVE_COMPARE_WHEEL',
      payload
    } as RemoveWheelToComparisionAction);
  };

export const resetWheelToComparision = () =>
  (dispatch: Dispatch) => {
    dispatch({ type: 'RESET_COMPARE' } as ResetComparisionAction);
  };