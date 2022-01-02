import { AnyAction } from 'redux';
import { getConfigInitialState } from '../models';
import { ConfigState } from '../types';

const reducer = (state = getConfigInitialState(), action: AnyAction): ConfigState => {
  switch (action.type) {
    default:
      return state;
  }
};

export default reducer;
