import { ThemeProvider } from '@mui/material';
import React, { PropsWithChildren, useEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ModalsContextProvider } from '../../../../context';
import { setTheme } from '../../../../store/actions';
import { getTheme } from '../../../../store/selectors';
import { darkTheme, lightTheme } from '../../../../styles/theme';
import { LOCAL_STORAGE_KEY } from '../../../../types';
import { getItem, isDarkTheme, setItem } from '../../../../utils';
import FacebookWrapper from '../../../Facebook/FacebookWrapper';
import EucArenaApp from '../EucArenaApp';

const showLRangeDisclaimer = getItem(LOCAL_STORAGE_KEY.INITIAL_DISCLAIMER) !== 'true';

const AppWithStore: React.FC<PropsWithChildren<{}>> = ({ children }) => {
  const dispatch = useDispatch();
  const [openDisclaimer, setOpenDisclaimer] = useState(showLRangeDisclaimer);
  const selectedTheme = useSelector(getTheme);
  const theme = useMemo(() => selectedTheme === 'dark' ? darkTheme : lightTheme, [selectedTheme]); 

  useEffect(() => {
    const newDark = isDarkTheme();
    dispatch(setTheme({ theme: newDark ? 'dark' : 'light' }));
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
    <ThemeProvider theme={ theme }>
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

