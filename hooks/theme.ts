import { useMediaQuery, useTheme } from '@mui/material';

export const useBreakpoints = () => {
  const theme = useTheme();

  const sm = useMediaQuery(theme.breakpoints.up('sm'));
  const md = useMediaQuery(theme.breakpoints.up('md'));

  return {
    sm,
    md
  };
};