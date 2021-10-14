import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import nextI18NextConfig from '../next-i18next.config.js';

interface StaticProps {
  locale: string
}

export async function getStaticProps({ locale }: StaticProps) {
  const translations = await serverSideTranslations(locale, ['common'], nextI18NextConfig);
  return { props: { ...translations } };
}

