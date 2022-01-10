import { Breakpoint, SxProps, Theme } from '@mui/material';
import { useBreakpoints } from '../theme';

export const useHeadingStyles = (canCompareAllWheels: boolean, view: 'grid' | 'table') => {
  const { lg } = useBreakpoints();

  const displayCompareAllWheelsBtn = canCompareAllWheels;
  const displayViewToggleBtns = !!lg;
  
  const commonContainer: SxProps<Theme> = { pb: 2 };
  
  const containerMaxWidth: false | Breakpoint = view === 'grid' ? 'lg' : false;

  const buttonsContainer: SxProps<Theme> = {
    ...commonContainer,
    alignItems: 'center',
    display: { xs: displayCompareAllWheelsBtn ? '' : 'flex', sm: 'flex' },
    flexDirection: 'row',
    justifyContent: {
      xs: displayCompareAllWheelsBtn ? 'normal' : 'flex-end',
      sm: 'flex-end'
    }
  };

  const filtersGroup: SxProps<Theme> = {
    display: {
      xs: displayCompareAllWheelsBtn ? 'flex' : 'inline-flex',
      sm: 'none'
    },
    flex: 1,
    mr: 1,
    pb: {
      xs: displayCompareAllWheelsBtn ? 2 : 0,
      sm: 0
    }
  };

  const comparatorGroup: SxProps<Theme> = {
    display: { xs: displayCompareAllWheelsBtn ? 'flex' : 'inline-flex' },
    justifyContent: { xs: 'flex-end' },
    mr: displayViewToggleBtns ? 1 : 0,
    pb: {
      xs: displayCompareAllWheelsBtn ? 2 : 0,
      sm: 0
    }
  };

  const compareAllWheels: SxProps<Theme> = { 
    textOverflow: { xs: 'ellipsis', sm: undefined },
    whiteSpace: { xs: 'nowrap', sm: undefined },
    overflow: { xs: 'hidden', sm: undefined }
  };

  const viewTogglesGroup: SxProps<Theme> = { display: { xs: 'none', lg: 'flex' } };

  return {
    containerMaxWidth,
    commonContainer,
    buttonsContainer,
    filtersGroup,
    comparatorGroup,
    compareAllWheels,
    viewTogglesGroup
  };
};