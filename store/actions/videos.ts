import { Dispatch } from 'redux';
import { FilterVideosAction, PaginateVideosAction, ResetVideosFiltersAction } from '../types';

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

export const paginateVideos = (offset: number) =>
  (dispatch: Dispatch) => {
    dispatch({
      type: 'PAGINATE_VIDEOS',
      payload: { offset }
    } as PaginateVideosAction);
  };