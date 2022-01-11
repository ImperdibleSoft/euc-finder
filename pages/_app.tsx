import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { ThemeProvider } from '@mui/material';
import { appWithTranslation } from 'next-i18next';
import { AppProps } from 'next/app';
import Head from 'next/head';
import { useRouter } from 'next/router';
import Script from 'next/script';
import qs from 'query-string';
import React, { PropsWithChildren, useEffect, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Provider, useDispatch, useSelector } from 'react-redux';
import FacebookWrapper from '../components/Facebook/FacebookWrapper';
import MainLayout from '../components/Layouts/MainLayout';
import LoadingScreen from '../components/Screens/LoadingScreen';
import { APP_NAME, getRegions, MEASUREMENT_ID } from '../constants';
import { EUC_DETAILS } from '../constants/clientRoutes';
import { ModalsContextProvider } from '../context';
import { useAppData } from '../hooks';
import { configureStore } from '../store';
import { setRegion } from '../store/actions';
import { getBrands, getRegion, getWheels } from '../store/selectors';
import { darkTheme, lightTheme } from '../styles/theme';
import { LOCAL_STORAGE_KEY, Region, Wheel } from '../types';
import { cleanOldCaches, getItem, isDarkTheme, pageview, setItem } from '../utils';

const EucArenaApp: React.FC<PropsWithChildren<{}>> = ({ children }) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const router = useRouter();
  const brands = useSelector(getBrands);
  const region = useSelector(getRegion);
  const wheels = useSelector(getWheels);
  const loadingStates = useAppData();

  const handleSelectWheel = (event: React.SyntheticEvent<Element, Event>, value: Wheel | null) => {
    if (value?.id) {
      router.push(EUC_DETAILS.replace(':id', value.id));
    }
  };

  const handleSelectRegion = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const { value } = event.target;

    if (value) {
      dispatch(setRegion(value as Region));
      setItem(LOCAL_STORAGE_KEY.REGION, value);
    }
  };

  return (
    <MainLayout
      brands={ brands }
      handleSelectRegion={ handleSelectRegion }
      handleSelectWheel={ handleSelectWheel }
      regions={ getRegions(t) }
      selectedRegion={ region }
      wheels={ wheels }
    >
      { loadingStates.initialData === 'loading' && (
        <LoadingScreen />
      ) }
      
      { loadingStates.initialData === 'success' && children }
    </MainLayout>
  );
};

const showLRangeDisclaimer = getItem(LOCAL_STORAGE_KEY.INITIAL_DISCLAIMER) !== 'true';
const store = configureStore();

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  const { price, purchaseLinks, test } = qs.parse(global?.location?.search);
  const { events } = useRouter();
  const [dark, setDark] = useState(false);
  const [openDisclaimer, setOpenDisclaimer] = useState(showLRangeDisclaimer);

  const theme = useMemo(() => dark ? darkTheme : lightTheme, [dark]); 

  const handleOpenDisclaimer = () => {
    setOpenDisclaimer(true);
  };

  const handleCloseDisclaimer = () => {
    setItem(LOCAL_STORAGE_KEY.INITIAL_DISCLAIMER, 'true');
    setOpenDisclaimer(false);
  };

  useEffect(() => {
    const newDark = isDarkTheme();
    setDark(newDark);
    cleanOldCaches();
  }, []);

  useEffect(() => {
    if (price === 'false' || price === 'true') {
      setItem(LOCAL_STORAGE_KEY.ENABLE_PRICE, price);
    }
    
    if (purchaseLinks === 'false' || purchaseLinks === 'true') {
      setItem(LOCAL_STORAGE_KEY.ENABLE_PURCHASELINKS, purchaseLinks);
    }

    if (test === 'false' || test === 'true') {
      setItem(LOCAL_STORAGE_KEY.DISABLE_ANALYTICS, test);
    }
  }, [price, purchaseLinks, test]);

  useEffect(() => {
    const handleRouteChange = (url: string) => {
      pageview(url);
    };

    //When the component is mounted, subscribe to router changes
    //and log those page views
    events.on('routeChangeComplete', handleRouteChange);

    // If the component is unmounted, unsubscribe
    // from the event with the `off` method
    return () => {
      events.off('routeChangeComplete', handleRouteChange);
    };
  }, [events]);

  const initialDisclaimer = {
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
        <Provider store={ store }>
          <FacebookWrapper>
            <ModalsContextProvider value={ { initialDisclaimer } }>
              <EucArenaApp>
                <Component { ...pageProps }/>
              </EucArenaApp>
            </ModalsContextProvider>
          </FacebookWrapper>
        </Provider>
      </ThemeProvider>

      { /* eslint-disable max-len */ }
      <Script id="init-analytics" dangerouslySetInnerHTML={ {
        __html: `
        (function() {
          if (window.localStorage && window.localStorage.getItem) {
            var testValue=window.localStorage.getItem('test');var isTestUser=(testValue!==undefined && testValue!==null && testValue!=='');
            if (!isTestUser) {
              function initialize(){
                var init=document.createElement('script');init.innerHTML="window.dataLayer=window.dataLayer || [];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${ MEASUREMENT_ID }')";document.head.append(init);
              }
              var script=document.createElement('script');script.async=true;script.src='https://www.googletagmanager.com/gtag/js?id=${ MEASUREMENT_ID }';script.onload=initialize;document.head.append(script);
            }
          }
        })();
        ` 
      } } />
      { /* eslint-enable max-len */ }
    </>
  );
};

export default appWithTranslation(MyApp);