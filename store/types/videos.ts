import { Influencer, Video, VideoFilters } from '../../types';

export interface VideosState {
  // Main data
  collection: Video[];

  // Misc
  filters: VideoFilters;
  sorting: unknown;
  pagination: {
    sponsoredOffset: number;
    newOffset: number;
    watchedOffset: number;
  }
}

export interface SetVideosAction {
  type: 'SET_VIDEOS';
  payload: {
    influencers: Influencer[];
    videos: Video[];
  }
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

export interface PaginateVideosAction {
  type: 'PAGINATE_VIDEOS';
  payload: {
    type: 'sponsored' | 'new' | 'watched';
    offset: number;
  }
}

export type VideosAction =
  | SetVideosAction
  | ResetVideosFiltersAction
  | FilterVideosAction
  | PaginateVideosAction;