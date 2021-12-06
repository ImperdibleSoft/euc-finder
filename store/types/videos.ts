import { Video } from '../../types';

export interface VideosState {
  // Main data
  collection: Video[];

  // Misc
  filters: unknown;
  sorting: unknown;
}