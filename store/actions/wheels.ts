import { Dispatch } from 'redux';
import { FilterWheelsAction, ResetWheelsFiltersAction, SortWheelsAction } from '../types';

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