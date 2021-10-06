const isDarkModeOS = () => window?.matchMedia?.('(prefers-color-scheme: dark)').matches ?? false;

const getLocalStorageTheme = () => window?.localStorage?.getItem('theme') ?? 'light';

export const isDarkTheme = () => {
  if (isDarkModeOS() || getLocalStorageTheme() === 'dark') {
    return true;
  }

  return false;
};

