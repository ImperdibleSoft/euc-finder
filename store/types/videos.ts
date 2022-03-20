import { Video, VideoFilters } from '../../types';

export interface VideosState {
  // Main data
  collection: Video[];

  lastVisit: Date;

  // Misc
  filters: VideoFilters;
  sorting: unknown;
  pagination: {
    promotedOffset: number;
    unwatchedOffset: number;
    watchedOffset: number;
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
    type: 'promoted' | 'unwatched' | 'watched';
    offset: number;
  }
}

export interface SetLastVisitAction {
  type: 'SET_LASTVISIT';
  payload: {
    lastVisit: Date;
  }
}

export type VideosAction =
  | ResetVideosFiltersAction
  | FilterVideosAction
  | PaginateVideosAction
  | SetLastVisitAction;
