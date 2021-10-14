import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';

const en = require('../public/locales/en/common.json');
const es = require('../public/locales/es/common.json');

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    // debug: process.env.NODE_ENV === 'development',
    fallbackLng: ['en'],
    resources: {
      en,
      es
    }
  });

export default i18n;