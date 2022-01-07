import { LOCAL_STORAGE_KEY } from '../types';
import { getItem } from './localStorage';

const isDarkModeOS = () =>
  global?.window?.matchMedia?.('(prefers-color-scheme: dark)').matches ?? false;

const getLocalStorageTheme = () =>
  getItem(LOCAL_STORAGE_KEY.THEME);

export const isDarkTheme = () => {
  const hardcodedTheme = getLocalStorageTheme();

  if (hardcodedTheme === 'light' || hardcodedTheme === 'dark') {
    return hardcodedTheme === 'dark';
  }

  return isDarkModeOS();
};

