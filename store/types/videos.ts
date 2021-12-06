import { Video, VideoFilters } from '../../types';

export interface VideosState {
  // Main data
  collection: Video[];

  // Misc
  filters: VideoFilters;
  sorting: unknown;
}