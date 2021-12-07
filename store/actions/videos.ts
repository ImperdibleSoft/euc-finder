import { Dispatch } from 'redux';
import { FilterVideosAction, ResetVideosFiltersAction } from '../types';

export const resetVideoFilters = () =>
  (dispatch: Dispatch) => {
    dispatch({ type: 'RESET_VIDEO_FILTERS' } as ResetVideosFiltersAction);
  };

export const filterVideos = (payload: FilterVideosAction['payload']) =>
  (dispatch: Dispatch) => {
    dispatch({
      type: 'FILTER_VIDEOS',
      payload
    } as FilterVideosAction);
  };