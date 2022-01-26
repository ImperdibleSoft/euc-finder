import { SSRConfig } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import nextI18NextConfig from '../next-i18next.config.js';
import { TranslationFile } from '../types';
import { WheelId } from '../types/wheel';
import { getFirstWheelPicture, getWheelPictures } from './wheelPictures';

type WheelPictures = 'none' | 'first' | 'all';

export interface StaticProps {
  params: {
    id?: string;
  };
  locales: string[];
  locale: string;
  defaultLocale: string;
}

interface ReturnType {
  props: SSRConfig & { pictures?: Record<WheelId, string | string[]> };
}

export const getTranslationsFromFiles = (files: TranslationFile[], pictures: WheelPictures) => {
  let pictureCollection: Record<WheelId, string | string[]>;

  switch (pictures) {
    case 'all':
      pictureCollection = getWheelPictures();
      break;

    case 'first':
      pictureCollection = getFirstWheelPicture();
      break;

    case 'none':
    default:
  }

  const getStaticProps = async ({ locale }: StaticProps): Promise<ReturnType> => {
    const translations = await serverSideTranslations(locale, ['common', 'layout', ...files], nextI18NextConfig);

    const props = { ...translations };

    if (pictureCollection) {
      // @ts-ignore `pictures` is not present in `props`
      props.pictures = pictureCollection;
    }
    
    return { props };
  };

  return getStaticProps;
};
