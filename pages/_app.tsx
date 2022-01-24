import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { appWithTranslation } from 'next-i18next';
import { AppProps } from 'next/app';
import Head from 'next/head';
import { useRouter } from 'next/router';
import Script from 'next/script';
import qs from 'query-string';
import React, { useEffect } from 'react';
import { Provider } from 'react-redux';
import AppWithStore from '../components/Screens/_app/AppWithStore';
import { APP_NAME, APP_URL, MEASUREMENT_ID } from '../constants';
import { configureStore } from '../store';
import '../styles/globals.css';
import { LOCAL_STORAGE_KEY } from '../types';
import { cleanOldCaches, pageview, setItem } from '../utils';


const store = configureStore();

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  const { price, purchaseLinks, test } = qs.parse(global?.location?.search);
  const { asPath, events } = useRouter();

  useEffect(() => {
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

  return (
    <>
      <Head>
        <link rel="canonical" href={ `${ APP_URL }${ asPath }` } />
        <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />

        <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no" />
          
        <meta name="author" content="ImperdibleSoft (Rafael Pérez <rafael.perez@imperdiblesoft.com>)" />
        <meta property="og:site_name" content={ APP_NAME } />
      </Head>

      <Provider store={ store }>
        <AppWithStore>
          <Component { ...pageProps }/>
        </AppWithStore>
      </Provider>

      { /* eslint-disable max-len */ }
      <Script id="init-analytics" dangerouslySetInnerHTML={ {
        __html: `
        (function() {
          if (window.localStorage && window.localStorage.getItem) {
            var shouldTrackUser = ${ process.env.NODE_ENV === 'production' } && localStorage?.getItem('${ LOCAL_STORAGE_KEY.DISABLE_ANALYTICS }') !== 'true';
            console.log('Hardcoded should', shouldTrackUser);
            if (shouldTrackUser) {
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
