import { createTheme, Theme } from '@mui/material';

export const BRAND_COLOR = '#2b2d42';

export const lightTheme = createTheme({
  palette: {
    mode: 'light',

    primary: { main: BRAND_COLOR },
    secondary: { main: '#ef233c' },
    background: { default: '#edf2f4' }
  }
});

export const darkTheme = createTheme({
  palette: {
    mode: 'dark',

    primary: { main: '#edf2f4' },
    secondary: { main: '#ef233c' }
  }
} as Theme);
