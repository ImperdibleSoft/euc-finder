import Head from 'next/head';
import React from 'react';
import LandingPage from '../components/Screens/LandingPage';
import { APP_DESCRIPTION, APP_NAME, KEYWORDS } from '../constants';
import { useCommonTranslations } from '../hooks';
import { TranslationFile } from '../types';
import { getTranslationsFromFiles } from '../utils-server';

const Landing = () => {
  const { t }= useCommonTranslations();
  
  return (
    <>
      <Head>
        <title>{ APP_NAME }</title>
        <meta name="description" content={ APP_DESCRIPTION } />

        <meta name="keywords" content={ KEYWORDS.join(', ') } />

        <meta property="og:type" content="website" />
        <meta property="og:title" content={ APP_NAME } />
        <meta property="og:description" content={ APP_DESCRIPTION } />
        <meta property="og:image" content={ require('/public/assets/ogImage.png').default?.src } />
        <meta property="og:image:alt" content={ t('appLogo-label', { appName: APP_NAME }) } />
      </Head>
  
      <LandingPage />
    </>
  );
};

export default Landing;

export const getStaticProps = getTranslationsFromFiles([TranslationFile.landing], 'none');
