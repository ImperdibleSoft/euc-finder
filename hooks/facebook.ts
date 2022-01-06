import { useRouter } from 'next/router';
import { useEffect } from 'react';

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

const downloadFacebookSDK = (language: string, callback: Function) => {
  const facebookScript = document.createElement('script');

  facebookScript.id = 'fb-sdk';
  facebookScript.async = true;
  facebookScript.defer = true;
  facebookScript.crossOrigin = 'anonymous';
  facebookScript.nonce = nonce;
  // eslint-disable-next-line no-console
  console.log('useFacebookSDK: downloadFacebookSDK, script created', facebookScript);
  
  facebookScript.onload = () => {
    // eslint-disable-next-line no-console
    console.log('useFacebookSDK: downloadFacebookSDK, onload');
    callback();
  };

  const track = `&appId=${ APP_ID }`;
  facebookScript.src = `//connect.facebook.net/${ language }/sdk.js#xfbml=1&version=${ version }${ track }`;
  document.body.appendChild(facebookScript);
  // eslint-disable-next-line no-console
  console.log('useFacebookSDK: downloadFacebookSDK appended to body');

  return facebookScript;
};

const removeFacebookSDKScript = (script: HTMLScriptElement) => {
  // eslint-disable-next-line no-console
  console.log('useFacebookSDK: removeFacebookSDKScript');
  document.body.removeChild(script);
};

const initFacebookSDK = () => {
  // eslint-disable-next-line no-console
  console.log('useFacebookSDK: initFacebookSDK start');
  // @ts-ignore
  window.FB?.init?.({
    appId: APP_ID,
    xfbml: true,
    version,
    nonce
  });
  // eslint-disable-next-line no-console
  console.log('useFacebookSDK: initFacebookSDK complete');
};

export const useFacebookSDK = () => {
  const { locale } = useRouter();

  useEffect(() => {
    // eslint-disable-next-line no-console
    console.log('useFacebookSDK: mounted');
    const language = getLanguage(locale);
    // eslint-disable-next-line no-console
    console.log('useFacebookSDK: getLanguage', language);
    const script = downloadFacebookSDK(language, initFacebookSDK);
    // eslint-disable-next-line no-console
    console.log('useFacebookSDK: downloadFacebookSDK', script);
  
    return () => {
      // eslint-disable-next-line no-console
      console.log('useFacebookSDK: unmounting');
      removeFacebookSDKScript(script);
    };
  }, [locale]);
};