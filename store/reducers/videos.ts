import { AnyAction } from 'redux';
import { getVideosInitialState } from '../models';
import { VideosState } from '../types';

const reducer = (state = getVideosInitialState(), action: AnyAction): VideosState => {
  switch (action.type) {
    default:
      return state;
  }
};

export default reducer;
