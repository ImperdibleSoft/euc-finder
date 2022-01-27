import { i18n } from 'i18next';
import { useRouter } from 'next/router';
import { ChangeEvent, useState } from 'react';
import { TFunction } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { Props } from '../../components/Form/Dropdown';
import { setTheme } from '../../store/actions';
import { getTheme } from '../../store/selectors';
import { AvailableTheme, LOCAL_STORAGE_KEY } from '../../types';
import { setItem } from '../../utils';
import { commonNs } from '../translations';

export const useInterface = (t: TFunction<'translation'>, i18nFunc: i18n) => {
  const router = useRouter();
  const dispatch = useDispatch();
  const [language, setLanguage] = useState(i18nFunc.language);
  const selectedTheme = useSelector(getTheme);

  const handleChangeLanguage = (event: ChangeEvent<HTMLSelectElement>) => {
    const { value } = event.target;
    setLanguage(value);
    setItem(LOCAL_STORAGE_KEY.LANGUAGE, value);

    router.push(router.pathname, router.asPath, { locale: value });
  };

  const handleChangeTheme = (event: ChangeEvent<HTMLSelectElement>) => {
    const theme = event.target.value as AvailableTheme;
    dispatch(setTheme({ theme }));
    setItem(LOCAL_STORAGE_KEY.THEME, theme);
  };

  const fields: Props[] = [
    {
      label: t('language-label', commonNs),
      name: 'language',
      onChange: handleChangeLanguage,
      options: [
        {
          label: t('en-label', commonNs),
          value: 'en'
        },
        {
          label: t('es-label', commonNs),
          value: 'es'
        }
      ],
      style: { marginBottom: 24 },
      value: language
    },
    {
      label: t('theme-label'),
      name: 'theme',
      onChange: handleChangeTheme,
      options: [
        {
          label: t(`${ AvailableTheme.auto }-label`),
          icon: 'brightness_medium',
          value: AvailableTheme.auto
        },
        {
          label: t(`${ AvailableTheme.light }-label`),
          icon: 'light_mode',
          value: AvailableTheme.light
        },
        {
          label: t(`${ AvailableTheme.dark }-label`),
          icon: 'dark_mode',
          value: AvailableTheme.dark
        }
      ],
      value: selectedTheme
    }
  ];

  return { interfaceFields: fields };
};
