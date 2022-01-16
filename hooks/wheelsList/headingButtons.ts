import { Breakpoint, SxProps, Theme } from '@mui/material';
import { useBreakpoints, useResize } from '../theme';

export const useHeadingStyles = (canCompareAllWheels: boolean, view: 'grid' | 'table') => {
  const { lg } = useBreakpoints();
  const { screenWidth } = useResize();

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

  const shouldDisplayHorizontal = screenWidth >= 400;
  const comparatorGroupOrientation: 'horizontal' | 'vertical' = shouldDisplayHorizontal
    ? 'horizontal'
    : 'vertical';

  const comparatorGroup: SxProps<Theme> = {
    display: displayCompareAllWheelsBtn ? 'flex' : 'inline-flex',
    justifyContent: 'flex-end',
    mr: displayViewToggleBtns ? 1 : 0,
    pb: {
      xs: displayCompareAllWheelsBtn ? 2 : 0,
      sm: 0
    },
    '& > button': {
      display: {
        xs: displayCompareAllWheelsBtn ? 'inline-block' : undefined,
        sm: undefined
      },
      maxWidth: {
        xs: displayCompareAllWheelsBtn && shouldDisplayHorizontal ? '60%' : undefined,
        sm: 'initial'
      },
      overflow: {
        xs: displayCompareAllWheelsBtn ? 'hidden' : undefined,
        sm: undefined
      },
      textOverflow: {
        xs: displayCompareAllWheelsBtn ? 'ellipsis' : undefined,
        sm: undefined
      },
      whiteSpace: {
        xs: displayCompareAllWheelsBtn ? 'nowrap' : undefined,
        sm: undefined
      }
    }
  };

  const compareAllWheels: SxProps<Theme> = {};

  const viewTogglesGroup: SxProps<Theme> = { display: { xs: 'none', lg: 'flex' } };

  return {
    containerMaxWidth,
    commonContainer,
    buttonsContainer,
    filtersGroup,
    comparatorGroup,
    comparatorGroupOrientation,
    compareAllWheels,
    viewTogglesGroup
  };
};