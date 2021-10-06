import { createTheme } from '@mui/material';

export const lightTheme = createTheme({
  palette: {
    mode: 'light',

    // primary: { main: '#aa1111' },
    // secondary: { main: '#11aaaa' }
    background: { default: '#ebedf0' }
  }
});

export const darkTheme = createTheme({
  palette: {
    mode: 'dark'

    // primary: { main: '#aa1111' },
    // secondary: { main: '#11aaaa' }
  }
});