import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { LoadingState } from '../types';

const APP_ID = '125008404402';
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

  const track = `&appId=${ APP_ID }`;
  facebookScript.src = `//connect.facebook.net/${ language }/sdk.js#xfbml=1&version=${ version }${ track }`;
  document.body.appendChild(facebookScript);

  return facebookScript;
};

const initFacebookSDK = () => {
  // @ts-ignore
  window.FB?.init?.({
    appId: APP_ID,
    xfbml: true,
    version,
    nonce
  });
};

const removeFacebookSDKScript = (script: HTMLScriptElement) => {
  document.body.removeChild(script);
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