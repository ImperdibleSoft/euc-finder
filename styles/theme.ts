import { createTheme } from '@mui/material';

export const lightTheme = createTheme({
  palette: {
    mode: 'light',

    primary: { main: '#2b2d42' },
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
});