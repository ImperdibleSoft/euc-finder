import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

interface StaticProps {
  locale: string
}

export async function getStaticProps({ locale }: StaticProps) {
  const translations = await serverSideTranslations(locale, ['common']);
  return { props: { ...translations } };
}