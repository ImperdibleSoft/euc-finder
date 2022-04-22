import { LOCAL_STORAGE_KEY } from '../../../types';
import { getItem } from '../../../utils';

export const getUserInitialState = () => ({ weight: Number(getItem(LOCAL_STORAGE_KEY.USER_WEIGHT)) || 80 });
