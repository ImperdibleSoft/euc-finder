import { useTranslation } from 'react-i18next';


export const useInfluencersTranslations = () => {
  const { t, i18n } = useTranslation('influencers');

  return { t, i18n };
};

export const useSettingsTranslations = () => {
  const { t, i18n } = useTranslation('settings');

  return { t, i18n };
};

export const useDealersTranslations = () => {
  const { t, i18n } = useTranslation('dealers');

  return { t, i18n };
};

export const useVideosTranslations = () => {
  const { t, i18n } = useTranslation('videos');

  return { t, i18n };
};

export const useComparatorTranslations = () => {
  const { t, i18n } = useTranslation('comparator');

  return { t, i18n };
};

export const useWheelsListTranslations = () => {
  const { t, i18n } = useTranslation('wheelsList');

  return { t, i18n };
};

export const useWheelsDetailsTranslations = () => {
  const { t, i18n } = useTranslation('wheelDetails');

  return { t, i18n };
};
