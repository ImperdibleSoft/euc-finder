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
        }
      };

    case 'RESET_VIDEO_FILTERS':
      return {
        ...state,
        filters: { ...getVideosInitialState().filters }
      };
    
    default:
      return state;
  }
};

export default reducer;
