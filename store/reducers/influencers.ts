import { getInfluencersInitialState } from '../models';
import { InfluencerActions, InfluencersState } from '../types';

const reducer = (state = getInfluencersInitialState(), action: InfluencerActions): InfluencersState => {
  switch (action.type) {
    case 'SET_VIDEOS':
      return {
        ...state,
        collection: action.payload.influencers
      };

    default:
      return state;
  }
};

export default reducer;
