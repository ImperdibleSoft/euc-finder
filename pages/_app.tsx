import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { ThemeProvider } from '@mui/material';
import type { AppProps } from 'next/app';
import { useRouter } from 'next/dist/client/router';
import React, { PropsWithChildren } from 'react';
import MainLayout from '../components/Layouts/MainLayout';
import { EUC_DETAILS } from '../constants/clientRoutes';
import { regions } from '../constants/regions';
import { ArenaContextProvider, useArenaContext, useContextReducer } from '../context';
import '../styles/dropdownOverride.css';
import '../styles/EucPicturesOverride.css';
import '../styles/globals.css';
import theme from '../styles/theme';
import { Wheel } from '../types';

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

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  const { state, dispatch } = useContextReducer();
  
  return (
    <ThemeProvider theme={ theme }>
      <ArenaContextProvider value={ { state, dispatch } }>
        <EucArenaApp>
          <Component { ...pageProps } />
        </EucArenaApp>
      </ArenaContextProvider>
    </ThemeProvider>
  );};

export default MyApp;
