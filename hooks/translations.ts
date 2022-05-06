import { useTranslation } from 'react-i18next';
import { TranslationFile } from '../types';

export const commonNs = { ns: TranslationFile.common };

const commonTranslations = [TranslationFile.layout, TranslationFile.common ];

export const useCommonTranslations = () => {
  const { t, i18n } = useTranslation(TranslationFile.common);

  return { t, i18n };
};

export const useLayoutTranslations = () => {
  const { t, i18n } = useTranslation(commonTranslations);

  return { t, i18n };
};

export const useLandingTranslations = () => {
  const { t, i18n } = useTranslation([TranslationFile.landing, ...commonTranslations]);

  return { t, i18n };
};

export const useAboutTranslations = () => {
  const { t, i18n } = useTranslation([TranslationFile.about, ...commonTranslations]);

  return { t, i18n };
};

export const useChangelogTranslations = () => {
  const { t, i18n } = useTranslation([TranslationFile.changelog, ...commonTranslations]);

  return { t, i18n };
};

export const useEmbedTranslations = () => {
  const { t, i18n } = useTranslation([TranslationFile.embed, ...commonTranslations]);

  return { t, i18n };
};

export const useInfluencersTranslations = () => {
  const { t, i18n } = useTranslation([TranslationFile.influencers, ...commonTranslations]);

  return { t, i18n };
};

export const useSettingsTranslations = () => {
  const { t, i18n } = useTranslation([TranslationFile.settings, ...commonTranslations]);

  return { t, i18n };
};

export const useDealersTranslations = () => {
  const { t, i18n } = useTranslation([TranslationFile.dealers, ...commonTranslations]);

  return { t, i18n };
};

export const useVideosTranslations = () => {
  const { t, i18n } = useTranslation([TranslationFile.videos, ...commonTranslations]);

  return { t, i18n };
};

export const useComparatorTranslations = () => {
  const { t, i18n } = useTranslation([TranslationFile.comparator, ...commonTranslations]);

  return { t, i18n };
};

export const useWheelsListTranslations = () => {
  const { t, i18n } = useTranslation([TranslationFile.wheelsList, ...commonTranslations]);

  return { t, i18n };
};

export const useWheelsDetailsTranslations = () => {
  const { t, i18n } = useTranslation([TranslationFile.wheelDetails, ...commonTranslations]);

  return { t, i18n };
};
