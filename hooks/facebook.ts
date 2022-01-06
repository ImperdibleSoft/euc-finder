import { useRouter } from 'next/router';
import { useEffect } from 'react';

const APP_ID = '125008404402';
const version = 'v12.0';
const autoLogAppEvents = false;
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

export const useFacebookSDK = () => {
  const { locale } = useRouter();

  useEffect(() => {
    const facebookScript = document.createElement('script');
  
    facebookScript.id = 'fb-sdk';
    facebookScript.async = true;
    facebookScript.defer = true;
    facebookScript.crossOrigin = 'anonymous';
    facebookScript.nonce = nonce;

    const language = getLanguage(locale);
  
    const track = `&appId=${ APP_ID }&autoLogAppEvents=${ autoLogAppEvents }`;
    facebookScript.src = `//connect.facebook.net/${ language }/sdk.js#xfbml=1&version=${ version }${ track }`;
    document.body.appendChild(facebookScript);
  
    const startScript = document.createElement('script');
    const code = `window.fbAsyncInit = function() {
      FB.init({
        appId: '${ APP_ID }',
        autoLogAppEvents: ${ autoLogAppEvents },
        xfbml: true,
        version: '${ version }',
        nonce: '${ nonce }'
      });
    };`;
    startScript.appendChild(document.createTextNode(code));
    document.body.appendChild(startScript);
  
    // @ts-ignore
    if (window.FB) {
      // @ts-ignore
      window.fbAsyncInit();
    }
  
    return () => {
      document.body.removeChild(facebookScript);
      document.body.removeChild(startScript);
    };
  }, [locale]);
};