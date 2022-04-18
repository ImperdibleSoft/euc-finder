import { useMemo } from 'react';
import { TFunction } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { DropdownItem, Props } from '../../components/Form/Dropdown';
import { getRegions } from '../../constants';
import { EUC_COMPARATOR, EUC_FINDER, ROOT, VIDEOS } from '../../constants/clientRoutes';
import getNavigation from '../../constants/navigation';
import { setAppOnStartup, setRegion } from '../../store/actions';
import { getRegion, getStartupApp } from '../../store/selectors';
import { LOCAL_STORAGE_KEY, Region, TranslationFile } from '../../types';
import { setItem } from '../../utils';
import { commonNs } from '../translations';

export const useSystem = (t: TFunction<'translation'>) => {
  const dispatch = useDispatch();
  const appOnStartup = useSelector(getStartupApp);
  const availableApps = useMemo(() => getNavigation()
    .filter(i => i.path === EUC_FINDER || i.path === EUC_COMPARATOR || i.path === VIDEOS)
    .map((i): DropdownItem => ({
      label: t(i.label, { ns: TranslationFile.layout }),
      icon: i.icon,
      value: i.path
    }))
  // eslint-disable-next-line react-hooks/exhaustive-deps
  , []);
  const selectedRegion = useSelector(getRegion);
  const regions = getRegions(t);

  const handleChangeAppOnStartup = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const { value } = event.target;
    dispatch(setAppOnStartup(value));
    setItem(LOCAL_STORAGE_KEY.STARTUP_APP, value);
  };

  const handleChangeRegion = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const { value } = event.target;

    if (value) {
      dispatch(setRegion(value as Region));
      setItem(LOCAL_STORAGE_KEY.REGION, value);
    }
  };

  const fields: Props[] = [
    {
      label: t('startupApp-label'),
      name: 'startupApp',
      onChange: handleChangeAppOnStartup,
      options: [
        {
          label: t('none-label'),
          value: ROOT
        },
        ...availableApps
      ],
      style: { marginBottom: 24 },
      value: appOnStartup
    },
    {
      label: t('region-label', commonNs),
      name: 'region',
      onChange: handleChangeRegion,
      options: regions,
      style: { marginBottom: 24 },
      value: selectedRegion
    }
  ];

  return { systemFields: fields };
};
