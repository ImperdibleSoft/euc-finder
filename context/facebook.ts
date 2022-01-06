import React, { useContext } from 'react';
import { FacebookContextType } from './types';

export const WAIT_UNTIL_FB_ERROR = 4000;

const FacebookContext = React.createContext<FacebookContextType>({
  generateReRenderHook: () =>() => ({
    pathname: '',
    sdkLoadingState: 'idle',
    shouldRender: true,
    theme: 'light'
  })
});

export const FacebookContextProvider = FacebookContext.Provider;

export const useFacebookContext = () => useContext(FacebookContext);