import { Dispatch } from 'redux';
import eucFinderApi from '../../apis/eucfinder';
import { SetInitialDataAction } from '../types';

export * from './config';
export * from './settings';
export * from './videos';
export * from './wheels';

export const getInitialData = () => async (dispatch: Dispatch) => {
  const payload = await eucFinderApi.data.getInitialData();

  // @ts-ignore
  dispatch({
    type: 'SET_APP_DATA',
    payload
  } as SetInitialDataAction);
};