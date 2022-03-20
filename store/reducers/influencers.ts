import { sortBy } from '../../utils';
import { getInfluencersInitialState } from '../models';
import { InfluencersState, SetInitialDataAction } from '../types';

const reducer = (state = getInfluencersInitialState(), action: SetInitialDataAction): InfluencersState => {
  switch (action.type) {
    case 'SET_APP_DATA':
      return {
        ...state,
        collection: [...action.payload.influencers].sort(sortBy('name', 'asc'))
      };

    default:
      return state;
  }
};

export default reducer;
