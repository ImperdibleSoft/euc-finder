import { LOCAL_STORAGE_KEY } from '../types';
import { getItem } from './localStorage';

const isDarkModeOS = () => global?.window?.matchMedia?.('(prefers-color-scheme: dark)').matches ?? false;

const getLocalStorageTheme = () => getItem(LOCAL_STORAGE_KEY.THEME) ?? 'light';

export const isDarkTheme = () => {
  if (isDarkModeOS() || getLocalStorageTheme() === 'dark') {
    return true;
  }

  return false;
};

