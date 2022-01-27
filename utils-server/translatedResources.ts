import { SSRConfig } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import nextI18NextConfig from '../next-i18next.config.js';
import { TranslationFile } from '../types';
import { WheelId } from '../types/wheel';
import { getFirstWheelPicture, getWheelPictures } from './wheelPictures';

type WheelPictures = 'none' | 'first' | 'all';

interface StaticProps {
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

interface ReturnType {
  props: Props;
}

export const getTranslationsFromFiles = (files: TranslationFile[], pictures: WheelPictures) => {
  const getStaticProps = async ({ locale }: StaticProps): Promise<ReturnType> => {
    const translations = await serverSideTranslations(
      locale,
      [TranslationFile.common, TranslationFile.layout, ...files],
      nextI18NextConfig
    );
    const props: Props = { ...translations };

    let pictureGetter: undefined | (() => Record<WheelId, string | string[]>);

    switch (pictures) {
      case 'all':
        pictureGetter = getWheelPictures;
        break;

      case 'first':
        pictureGetter = getFirstWheelPicture;
        break;

      case 'none':
      default:
    }

    if (pictureGetter) {
      props.pictures = pictureGetter();
    }

    return { props };
  };

  return getStaticProps;
};
