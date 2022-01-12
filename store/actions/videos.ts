import { Dispatch } from 'redux';
import { FilterVideosAction, PaginateVideosAction, ResetVideosFiltersAction, SetLastVisitAction } from '../types';

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

export const paginateVideos = (type: PaginateVideosAction['payload']['type'], offset: number) =>
  (dispatch: Dispatch) => {
    dispatch({
      type: 'PAGINATE_VIDEOS',
      payload: { type, offset }
    } as PaginateVideosAction);
  };
  
export const setLastVisit = (payload: SetLastVisitAction['payload']) =>
  (dispatch: Dispatch) => {
    dispatch({
      type: 'SET_LASTVISIT',
      payload
    } as SetLastVisitAction);
  };