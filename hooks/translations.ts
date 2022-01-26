import { useTranslation } from 'react-i18next';
import { TranslationFile } from '../types';

export const useCommonTranslations = () => {
  const { t, i18n } = useTranslation();

  return { t, i18n };
};

export const useLayoutTranslations = () => {
  const { t, i18n } = useTranslation(TranslationFile.layout);

  return { t, i18n };
};

export const useChangelogTranslations = () => {
  const { t, i18n } = useTranslation(TranslationFile.changelog);

  return { t, i18n };
};

export const useInfluencersTranslations = () => {
  const { t, i18n } = useTranslation(TranslationFile.influencers);

  return { t, i18n };
};

export const useSettingsTranslations = () => {
  const { t, i18n } = useTranslation(TranslationFile.settings);

  return { t, i18n };
};

export const useDealersTranslations = () => {
  const { t, i18n } = useTranslation(TranslationFile.dealers);

  return { t, i18n };
};

export const useVideosTranslations = () => {
  const { t, i18n } = useTranslation(TranslationFile.videos);

  return { t, i18n };
};

export const useComparatorTranslations = () => {
  const { t, i18n } = useTranslation(TranslationFile.comparator);

  return { t, i18n };
};

export const useWheelsListTranslations = () => {
  const { t, i18n } = useTranslation(TranslationFile.wheelsList);

  return { t, i18n };
};

export const useWheelsDetailsTranslations = () => {
  const { t, i18n } = useTranslation(TranslationFile.wheelDetails);

  return { t, i18n };
};
