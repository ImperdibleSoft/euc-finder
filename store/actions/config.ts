import { Dispatch } from 'redux';
import eucFinderApi from '../../apis/eucfinder';
import { SetConfigInitialDataAction, SetWheelsInitialData } from '../types';

export const getInitialData = () => async (dispatch: Dispatch) => {
  const {
    apps,
    brands,
    config,
    dealers,
    wheels
  } = await eucFinderApi.config.getInitialData();

  dispatch({
    type: 'SET_CONFIG_INITIALDATA',
    payload: config
  } as SetConfigInitialDataAction);

  dispatch({
    type: 'SET_WHEELS_INITIALDATA',
    payload: {
      apps,
      brands,
      dealers,
      wheels
    }
  } as SetWheelsInitialData);

};