import { AnyAction } from 'redux';
import { getInfluencersInitialState } from '../models';
import { InfluencersState } from '../types';

const reducer = (state = getInfluencersInitialState(), action: AnyAction): InfluencersState => {
  switch (action.type) {
    default:
      return state;
  }
};

export default reducer;
