import { getVideosInitialState } from '../models';
import { SetInitialDataAction, VideosAction, VideosState } from '../types';

const reducer = (state = getVideosInitialState(), action: VideosAction | SetInitialDataAction): VideosState => {
  switch (action.type) {
    case 'SET_APP_DATA':
      return {
        ...state,
        collection: action.payload.videos
      };

    case 'FILTER_VIDEOS':
      return {
        ...state,
        filters: {
          ...state.filters,
          [action.payload.key]: action.payload.value
        },
        pagination: { ...getVideosInitialState().pagination }
      };

    case 'PAGINATE_VIDEOS':
      let key: keyof VideosState['pagination'];

      switch (action.payload.type) {
        case 'promoted':
          key = 'promotedOffset';
          break;

        case 'unwatched':
          key = 'unwatchedOffset';
          break;

        case 'watched':
        default:
          key = 'watchedOffset';
          break;
      }

      return {
        ...state,
        pagination: {
          ...state.pagination,
          [key]: action.payload.offset
        }
      };

    case 'RESET_VIDEO_FILTERS':
      return {
        ...state,
        filters: { ...getVideosInitialState().filters },
        pagination: { ...getVideosInitialState().pagination }
      };

    case 'SET_LASTVISIT':
      return {
        ...state,
        lastVisit: action.payload.lastVisit
      };
      
    default:
      return state;
  }
};

export default reducer;
