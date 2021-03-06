import React, { useMemo } from 'react';
import { TFunction } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { DropdownItem, Props as DropdownProps } from '../../components/Form/Dropdown';
import { Props as TextProps } from '../../components/Form/Text';
import { getRegions, wheelFeatureIcons } from '../../constants';
import { EUC_COMPARATOR, EUC_FINDER, ROOT, VIDEOS } from '../../constants/clientRoutes';
import getNavigation from '../../constants/navigation';
import { setAppOnStartup, setRegion, setUserWeight } from '../../store/actions';
import { getMeasureUnits, getRegion, getStartupApp, getUserWeight } from '../../store/selectors';
import { LOCAL_STORAGE_KEY, Region, TranslationFile, WeightUnits } from '../../types';
import { kilogramsToPounds, poundsToKilograms, setItem, toDecimals } from '../../utils';
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
  const regions = getRegions(t);
  const selectedRegion = useSelector(getRegion);
  const units = useSelector(getMeasureUnits);
  const userWeight = useSelector(getUserWeight);
  const calculatedWeight = units.weight === WeightUnits.lb ? kilogramsToPounds(userWeight) : userWeight;

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

  const handleChangeUserWeight = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(event.target.value);
    if (value) {
      const weightToStore = units.weight === WeightUnits.lb ? poundsToKilograms(value) : value;
      dispatch(setUserWeight({ weight: weightToStore }));
      setItem(LOCAL_STORAGE_KEY.USER_WEIGHT, `${ weightToStore }`);
    }
  };

  const fields = [
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
    } as DropdownProps,
    {
      label: t('region-label', commonNs),
      name: 'region',
      onChange: handleChangeRegion,
      options: regions,
      style: { marginBottom: 24 },
      value: selectedRegion
    } as DropdownProps,
    {
      description: t('userWeight-msg'),
      icon: wheelFeatureIcons.suspension,
      label: t('userWeight-label'),
      name: 'userWeight',
      onChange: handleChangeUserWeight,
      type: 'number',
      value: toDecimals(calculatedWeight, 2, 0)
    } as (TextProps & { description: string; })
  ];

  return { systemFields: fields };
};
