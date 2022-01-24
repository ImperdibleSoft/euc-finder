import React, { PropsWithChildren, useEffect, useState } from 'react';
import { FacebookContextProvider } from '../../../context';
import { FacebookData, FacebookTheme } from '../../../context/types';
import { parseFacebookElements, useCurrentPath, useFacebookSDK } from '../../../hooks';
import { isDarkTheme } from '../../../utils';

const FacebookWrapper: React.FC<PropsWithChildren<{}>> = ({ children }) => {
  const [darkTheme, setDarkTheme] = useState(false);
  const pathname = useCurrentPath();
  const { loadingState } = useFacebookSDK();

  useEffect(() => {
    setDarkTheme(isDarkTheme());
  }, []);

  const generateReRenderHook = () => {
    let falseTimeout: NodeJS.Timeout;
    let trueTimeout: NodeJS.Timeout;

    const useReRender = (deps: unknown[]): FacebookData => {
      const [shouldRender, setShouldRender] = useState(true);

      useEffect(() => {
        clearTimeout(falseTimeout);
        falseTimeout = setTimeout(() => {
          setShouldRender(false);
        }, 200);
        // eslint-disable-next-line react-hooks/exhaustive-deps
      }, [...deps, darkTheme, loadingState, pathname]);
  
      useEffect(() => {
        clearTimeout(trueTimeout);
        trueTimeout = setTimeout(() => {
          if (!shouldRender) {
            setShouldRender(true);
          } else {
            parseFacebookElements();
          }
        }, 200);
      }, [shouldRender]);

      return {
        pathname,
        sdkLoadingState: loadingState,
        shouldRender: shouldRender && !!pathname && loadingState === 'success',
        theme: (darkTheme ? 'dark' : 'light') as FacebookTheme
      };
    };

    return useReRender;
  };

  return (
    <FacebookContextProvider value={ { generateReRenderHook } }>
      { children }
    </FacebookContextProvider>
  );
};

export default FacebookWrapper;
