import { useMediaQuery, useTheme } from '@mui/material';
import React, { useEffect, useState } from 'react';

export const useBreakpoints = () => {
  const theme = useTheme();

  const sm = useMediaQuery(theme.breakpoints.up('sm'));
  const md = useMediaQuery(theme.breakpoints.up('md'));
  const lg = useMediaQuery(theme.breakpoints.up('lg'));

  return {
    sm,
    md,
    lg
  };
};

interface Sizes {
  screenWidth: number;
  screenHeight: number;
  ratiowh: number;
  ratiohw: number;
  rect?: {
    width: number;
    height: number;
    left: number;
    right: number;
    top: number;
    bottom: number;
  };
}

export const useResize = (element?: React.RefObject<HTMLDivElement>) => {
  const [sizes, setSizes] = useState<Sizes>({
    screenWidth: 0,
    screenHeight: 0,
    ratiowh: 0,
    ratiohw: 0,
    rect: undefined
  });

  const onResize = () => {
    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;
    const ratiowh = screenWidth / screenHeight;
    const ratiohw = screenHeight / screenWidth;
    let rect: Sizes['rect'];

    if (element?.current) {
      // DOM API does not allow for a shallow copy, so we have to manually set them
      const clientRect = element.current.getBoundingClientRect();
      rect = {
        width: clientRect.width,
        height: clientRect.height,
        left: clientRect.left,
        right: clientRect.right,
        top: clientRect.top,
        bottom: clientRect.bottom
      };
    }

    setSizes({
      screenWidth,
      screenHeight,
      ratiowh,
      ratiohw,
      rect
    });
  };

  useEffect(() => {
    window.addEventListener('resize', onResize, false);
    onResize();

    return () => {
      window.removeEventListener('resize', onResize, false);
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return sizes;
};
