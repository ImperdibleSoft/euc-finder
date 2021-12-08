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
      return {
        ...state,
        pagination: { offset: action.payload.offset }
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
