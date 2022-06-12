import { SSRConfig } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import nextI18NextConfig from '../next-i18next.config.js';
import { TranslationFile } from '../types';
import { WheelId } from '../types/wheel';

export interface StaticProps {
  params: {
    id?: string;
  };
  locales: string[];
  locale: string;
  defaultLocale: string;
}

interface Props extends SSRConfig {
  pictures?: Record<WheelId, string | string[]>;
}

export interface ReturnType {
  props: Props;
}

export const getTranslationsFromFiles = (files: TranslationFile[]) => {
  const getStaticProps = async ({ locale }: StaticProps): Promise<ReturnType> => {
    const translations = await serverSideTranslations(
      locale,
      [TranslationFile.common, TranslationFile.layout, ...files],
      nextI18NextConfig
    );
    const props: Props = { ...translations };

    return { props };
  };

  return getStaticProps;
};
