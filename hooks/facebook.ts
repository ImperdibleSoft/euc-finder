import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { useResize } from '.';
import { FB_APP_ID } from '../constants';
import { useFacebookContext, WAIT_UNTIL_FB_ERROR } from '../context';
import { LoadingState } from '../types';

const version = 'v12.0';
const nonce = 'chhRkzsL';

const getLanguage = (locale?: string) => {
  switch (locale) {
    case 'es':
      return 'es_ES';

    case 'en':
    default:
      return 'en_GB';
  }
};

const downloadFacebookSDK = (
  language: string,
  setLoadingState: (newState: LoadingState) => void,
  callback?: Function
) => {
  setLoadingState('loading');

  const facebookScript = document.createElement('script');

  facebookScript.id = 'fb-sdk';
  facebookScript.async = true;
  facebookScript.defer = true;
  facebookScript.crossOrigin = 'anonymous';
  facebookScript.nonce = nonce;

  facebookScript.onabort = () => {
    setLoadingState('error');
  };

  facebookScript.onerror = () => {
    setLoadingState('error');
  };
  
  facebookScript.onload = () => {
    callback?.();
  };

  const track = `&appId=${ FB_APP_ID }`;
  facebookScript.src = `//connect.facebook.net/${ language }/sdk.js#xfbml=1&version=${ version }${ track }`;
  document.body.appendChild(facebookScript);

  return facebookScript;
};

const initFacebookSDK = () => {
  // @ts-ignore
  window.FB?.init?.({
    appId: FB_APP_ID,
    xfbml: true,
    version,
    nonce
  });
};

const removeFacebookSDKScript = (script: HTMLScriptElement) => {
  document.body.removeChild(script);
};

export const parseFacebookElements = (querySelector?: string) => {
  // @ts-ignore
  window.FB?.XFBML?.parse?.(querySelector);
};

export const useFacebookSDK = () => {
  const [loadingState, setLoadingState] = useState<LoadingState>('idle');
  const { locale } = useRouter();

  useEffect(() => {
    const language = getLanguage(locale);
    const script = downloadFacebookSDK(
      language,
      setLoadingState,
      () => {
        initFacebookSDK();
        setLoadingState('success');
      }
    );
  
    return () => {
      removeFacebookSDKScript(script);
    };
  }, [locale]);

  return { loadingState };
};

const getLoadingState = (sdk: LoadingState, contentLoadingState: LoadingState): LoadingState => {
  if (sdk === 'error' || contentLoadingState === 'error') {
    return 'error';
  }

  if (sdk === 'loading' || contentLoadingState === 'loading') {
    return 'loading';
  }

  if (sdk === 'success' && contentLoadingState === 'success') {
    return 'success';
  }

  return 'idle';
};

export const useLoadFacebookContent = (parentRef: React.RefObject<HTMLDivElement>) => {
  const [contentLoadingState, setContentLoadingState] = useState<LoadingState>('idle');
  const { rect } = useResize(parentRef);
  
  const { generateReRenderHook } = useFacebookContext();
  const useReRender = generateReRenderHook();
  const { pathname, sdkLoadingState, shouldRender, theme } = useReRender([rect]);
  
  useEffect(() => {
    if (shouldRender) {
      setContentLoadingState('loading');

      setTimeout(() => {
        const span = parentRef?.current?.querySelector('span');
        setContentLoadingState(!!span?.offsetHeight ? 'success' : 'error');
      }, WAIT_UNTIL_FB_ERROR);
    }
  }, [parentRef, shouldRender]);

  return {
    loadingState: getLoadingState(sdkLoadingState, contentLoadingState),
    pathname,
    rect,
    shouldRender,
    theme
  };
};
