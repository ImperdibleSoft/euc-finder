import { AvailableTheme, LOCAL_STORAGE_KEY } from '../types';
import { getItem } from './localStorage';

const isDarkModeOS = () =>
  global?.window?.matchMedia?.('(prefers-color-scheme: dark)').matches ?? false;

const getLocalStorageTheme = () =>
  getItem(LOCAL_STORAGE_KEY.THEME);

export const getUserSelectedTheme = () => {
  const hardcodedTheme = getLocalStorageTheme();

  switch (hardcodedTheme) {
    case 'dark':
      return AvailableTheme.dark;

    case 'light':
      return AvailableTheme.light;

    case 'auto':
    default:
      return AvailableTheme.auto;
  }
};

export const isDarkTheme = (theme?: AvailableTheme) => {
  const hardcodedTheme = theme ?? getUserSelectedTheme();

  switch (hardcodedTheme) {
    case AvailableTheme.dark:
      return true;

    case AvailableTheme.light:
      return false;

    case AvailableTheme.auto:
    default:
      return isDarkModeOS();
  }
};
