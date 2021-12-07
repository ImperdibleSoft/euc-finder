import { Video, VideoFilters } from '../../types';

export interface VideosState {
  // Main data
  collection: Video[];

  // Misc
  filters: VideoFilters;
  sorting: unknown;
}

export interface ResetVideosFiltersAction {
  type: 'RESET_VIDEO_FILTERS'
}

export interface FilterVideosAction {
  type: 'FILTER_VIDEOS';
  payload: {
    key: keyof VideoFilters;
    value: unknown
  }
}

export type VideosAction = ResetVideosFiltersAction | FilterVideosAction