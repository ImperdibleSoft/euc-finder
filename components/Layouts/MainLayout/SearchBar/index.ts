import { InputBase } from '@mui/material';
import { styled, alpha } from '@mui/system';

export const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white , 0.15),
  '&:hover': { backgroundColor: alpha(theme.palette.common.white, 0.25) },
  height: 40,
  width: 'calc(50% - 8px)',
  [theme.breakpoints.up('sm')]: {
    maxWidth: 'none',
    minWidth: 200,
    width: 'auto'
  }
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