import { getVideosInitialState } from '../models';
import { VideosAction, VideosState } from '../types';

const reducer = (state = getVideosInitialState(), action: VideosAction): VideosState => {
  switch (action.type) {
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
        case 'sponsored':
          key = 'sponsoredOffset';
          break;

        case 'new':
          key = 'newOffset';
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
    
    default:
      return state;
  }
};

export default reducer;
