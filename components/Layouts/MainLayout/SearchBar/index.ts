import { alpha, InputBase, styled } from '@mui/material';

export const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white , 0.15),
  '&:hover': { backgroundColor: alpha(theme.palette.common.white, 0.25) },
  height: 40,
  width: 'calc(50% - 4px)',
  [theme.breakpoints.up('sm')]: {
    maxWidth: 'none',
    minWidth: 200,
    width: 'auto'
  },
  '& > div': {
    marginBottom: '0px !important',
    maxWidth: '100%',
    minWidth: '0px !important'
  },
  '& > div > label': { display: 'none' },
  '& .MuiFormControl-root': { padding: '4px 0px 4px 16px' },
  '& .MuiInputAdornment-root': { color: theme.palette.common.white },
  '& .MuiSelect-select': { color: theme.palette.common.white },
  '& .MuiInput-root': { marginTop: 0 },
  '& .MuiInput-underline::before': { display: 'none' },
  '& .MuiInput-underline::after': { display: 'none' },
  '& .MuiSelect-nativeInput': { height: '100%' }
}));

export const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
}));

export const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${ theme.spacing(4) })`,
    width: '100%',
    [theme.breakpoints.up('sm')]: { width: '20ch' }
  }
}));