import { Dispatch } from 'redux';
import eucFinderApi from '../../apis/eucfinder';
import { SetConfigAction } from '../types';

export const getConfig = () => async (dispatch: Dispatch) => {
  const { config } = await eucFinderApi.config.getConfig();

  dispatch({
    type: 'SET_CONFIG',
    payload: { config }
  } as SetConfigAction);
};