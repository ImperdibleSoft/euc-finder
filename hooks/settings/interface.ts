import { useRouter } from 'next/router';
import { ChangeEvent, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Props } from '../../components/Form/Dropdown';
import { LOCAL_STORAGE_KEY } from '../../types';
import { setItem } from '../../utils';

export const useInterface = () => {
  const { t, i18n } = useTranslation();
  const router = useRouter();
  const [language, setLanguage] = useState(i18n.language);

  const handleChangeLanguage = (event: ChangeEvent<HTMLSelectElement>) => {
    const { value } = event.target;
    setLanguage(value);
    setItem(LOCAL_STORAGE_KEY.LANGUAGE, value);

    router.push(router.pathname, router.asPath, { locale: value });
  };

  const languageField: Props = {
    label: t('language-label'),
    name: 'language',
    onChange: handleChangeLanguage,
    options: [
      {
        label: t('en-label'),
        value: 'en'
      },
      {
        label: t('es-label'),
        value: 'es'
      }
    ],
    value: language
  };

  return { languageField };
};