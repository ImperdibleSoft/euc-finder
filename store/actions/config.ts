import { Dispatch } from 'redux';
import eucFinderApi from '../../apis/eucfinder';
import { SetConfigInitialDataAction } from '../types';

export const getInitialData = () => async (dispatch: Dispatch) => {
  const {
    apps,
    brands,
    config,
    dealers,
    wheels
  } = await eucFinderApi.config.getInitialData();

  dispatch({
    type: 'SET_INITIALDATA',
    payload: {
      apps,
      brands,
      config,
      dealers,
      wheels
    }
  } as SetConfigInitialDataAction);
};