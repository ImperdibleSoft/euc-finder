import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import nextI18NextConfig from '../next-i18next.config.js';

export interface StaticProps {
  params: {
    id?: string;
  };
  locales: string[];
  locale: string;
  defaultLocale: string;
}

export async function getStaticProps({ locale }: StaticProps) {
  const translations = await serverSideTranslations(locale, ['common'], nextI18NextConfig);
  return { props: { ...translations } };
}

