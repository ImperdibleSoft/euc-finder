import i18n from './i18n';

export const getTranslation = (key: string) => {
  const lng = i18n.language;
  const translations = i18n.options.resources?.[lng];
  const translation = translations?.[key];

  return translation as string;
};