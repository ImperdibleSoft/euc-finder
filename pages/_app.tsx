import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { ThemeProvider } from '@mui/material';
import type { AppProps } from 'next/app';
import { useRouter } from 'next/dist/client/router';
import React, { PropsWithChildren, useEffect } from 'react';
import { DropdownItem } from '../components/Form/Dropdown';
import MainLayout from '../components/Layouts/MainLayout';
import { EUC_DETAILS } from '../constants/clientRoutes';
import { regions } from '../constants/regions';
import { ArenaContextProvider, useArenaContext } from '../context';
import { initialValue } from '../context/models';
import '../styles/globals.css';
import '../styles/dropdownOverride.css';
import theme from '../styles/theme';
import { Wheel } from '../types';
import { init } from '../utils/htmlRender';

const EucArenaApp: React.FC<PropsWithChildren<{}>> = ({ children }) => {
  const { brands, wheels } = useArenaContext();
  const router = useRouter();

  const handleSelectWheel = (event: React.SyntheticEvent<Element, Event>, value: Wheel | null) => {
    if (value?.id) {
      router.push(EUC_DETAILS.replace(':id', value.id));
    }
  };

  const handleSelectRegion = (event: React.SyntheticEvent<Element, Event>, value: DropdownItem | null) => {
    // eslint-disable-next-line no-console
    console.log('Region selected', value);
  };

  return (
    <MainLayout
      brands={ brands }
      handleSelectRegion={ handleSelectRegion }
      handleSelectWheel={ handleSelectWheel }
      regions={ regions }
      wheels={ wheels }
    >
      { children }
    </MainLayout>
  );
};

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  useEffect(() => {
    init();
  }, []);
  
  return (
    <ThemeProvider theme={ theme }>
      <ArenaContextProvider value={ initialValue }>
        <EucArenaApp>
          <Component { ...pageProps } />
        </EucArenaApp>
      </ArenaContextProvider>
    </ThemeProvider>
  );};

export default MyApp;
