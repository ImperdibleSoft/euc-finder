import React from 'react';
import LandingPage from '../components/Screens/LandingPage';
import { TranslationFile } from '../types';
import { getTranslationsFromFiles } from '../utils-server';

const Landing = () => (
  <LandingPage />
);

export default Landing;

export const getStaticProps = getTranslationsFromFiles([TranslationFile.landing], 'none');
