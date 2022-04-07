import { ThemeProvider } from '@mui/material';
import { useRouter } from 'next/router';
import React, { PropsWithChildren, useEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ROOT } from '../../../../constants/clientRoutes';
import { ModalsContextProvider } from '../../../../context';
import { setTheme } from '../../../../store/actions';
import { getStartupApp, getTheme } from '../../../../store/selectors';
import { darkTheme, lightTheme } from '../../../../styles/theme';
import { LOCAL_STORAGE_KEY } from '../../../../types';
import { getItem, getUserSelectedTheme, isDarkTheme, setItem } from '../../../../utils';
import FacebookWrapper from '../../WheelDetails/Facebook/FacebookWrapper';
import EucArenaApp from '../EucArenaApp';

const showLRangeDisclaimer = getItem(LOCAL_STORAGE_KEY.INITIAL_DISCLAIMER) !== 'true';

const AppWithStore: React.FC<PropsWithChildren<{}>> = ({ children }) => {
  const dispatch = useDispatch();
  const router = useRouter();
  const [openDisclaimer, setOpenDisclaimer] = useState(showLRangeDisclaimer);
  const startupApp = useSelector(getStartupApp);
  const themeName = useSelector(getTheme);
  const themeColorPalette = useMemo(() => {
    return isDarkTheme(themeName)
      ? darkTheme
      : lightTheme;
  }, [themeName]);

  useEffect(() => {
    const theme = getUserSelectedTheme();
    dispatch(setTheme({ theme }));

    if (router.pathname === ROOT && startupApp && startupApp !== ROOT) {
      router.replace(startupApp);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleOpenDisclaimer = () => {
    setOpenDisclaimer(true);
  };

  const handleCloseDisclaimer = () => {
    setItem(LOCAL_STORAGE_KEY.INITIAL_DISCLAIMER, 'true');
    setOpenDisclaimer(false);
  };

  const initialDisclaimer = {
    open: openDisclaimer,
    handleOpen: handleOpenDisclaimer,
    handleClose: handleCloseDisclaimer
  };

  return (
    <ThemeProvider theme={ themeColorPalette }>
      <FacebookWrapper>
        <ModalsContextProvider value={ { initialDisclaimer } }>
          <EucArenaApp>
            { children }
          </EucArenaApp>
        </ModalsContextProvider>
      </FacebookWrapper>
    </ThemeProvider>
  );
};

export default AppWithStore;

