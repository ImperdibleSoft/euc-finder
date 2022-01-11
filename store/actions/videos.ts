import { Dispatch } from 'redux';
import eucFinderApi from '../../apis/eucfinder';
import { FilterVideosAction, PaginateVideosAction, ResetVideosFiltersAction, SetVideosAction } from '../types';

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

export const getVideos = () =>
  async (dispatch: Dispatch) => {
    const { influencers, videos } = await eucFinderApi.videos.getVideos();

    dispatch({
      type: 'SET_VIDEOS',
      payload: {
        influencers,
        videos
      }
    } as SetVideosAction);
  };