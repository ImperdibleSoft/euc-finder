import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { ThemeProvider } from '@mui/material';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { useRouter } from 'next/dist/client/router';
import React, { PropsWithChildren, useEffect, useMemo, useState } from 'react';
import MainLayout from '../components/Layouts/MainLayout';
import { APP_NAME, regions } from '../constants';
import { EUC_DETAILS } from '../constants/clientRoutes';
import { ArenaContextProvider, useArenaContext, useContextReducer } from '../context';
import '../styles/dropdownOverride.css';
import '../styles/EucPicturesOverride.css';
import '../styles/globals.css';
import { darkTheme, lightTheme } from '../styles/theme';
import { LOCAL_STORAGE_KEY, Wheel } from '../types';
import { getItem, isDarkTheme, setItem } from '../utils';

const EucArenaApp: React.FC<PropsWithChildren<{}>> = ({ children }) => {
  const { brands, region, wheels, dispatch } = useArenaContext();
  const router = useRouter();

  const handleSelectWheel = (event: React.SyntheticEvent<Element, Event>, value: Wheel | null) => {
    if (value?.id) {
      router.push(EUC_DETAILS.replace(':id', value.id));
    }
  };

  const handleSelectRegion = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const { value } = event.target;

    if (value) {
      dispatch({
        type: 'setRegion',
        payload: { value }
      });
    }
  };

  return (
    <MainLayout
      brands={ brands }
      handleSelectRegion={ handleSelectRegion }
      handleSelectWheel={ handleSelectWheel }
      regions={ regions }
      selectedRegion={ region }
      wheels={ wheels }
    >
      { children }
    </MainLayout>
  );
};

const showLRangeDisclaimer = getItem(LOCAL_STORAGE_KEY.RANGE_DISCLAIMER) !== 'true';

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  const [dark, setDark] = useState(false);
  const [openDisclaimer, setOpenDisclaimer] = useState(showLRangeDisclaimer); 
  const { state, dispatch } = useContextReducer();

  const theme = useMemo(() => dark ? darkTheme : lightTheme, [dark]); 

  const handleOpenDisclaimer = () => {
    setOpenDisclaimer(true);
  };

  const handleCloseDisclaimer = () => {
    setItem(LOCAL_STORAGE_KEY.RANGE_DISCLAIMER, 'true');
    setOpenDisclaimer(false);
  };

  useEffect(() => {
    const newDark = isDarkTheme();
    setDark(newDark);
  }, []);

  const disclaimer = {
    open: openDisclaimer,
    handleOpen: handleOpenDisclaimer,
    handleClose: handleCloseDisclaimer
  };
  
  return (
    <>
      <Head>
        <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />

        <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no" />
          
        <meta name="author" content="ImperdibleSoft (Rafael Pérez <rafael.perez@imperdiblesoft.com>)" />
        <meta property="og:site_name" content={ APP_NAME } />
      </Head>

      <ThemeProvider theme={ theme }>
        <ArenaContextProvider value={ { state, dispatch, disclaimer } }>
          <EucArenaApp>
            <Component { ...pageProps }/>
          </EucArenaApp>
        </ArenaContextProvider>
      </ThemeProvider>
    </>
  );};

export default MyApp;
