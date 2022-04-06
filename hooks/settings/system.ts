import { TFunction } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { Props } from '../../components/Form/Dropdown';
import { getRegions } from '../../constants';
import { setRegion } from '../../store/actions';
import { getRegion } from '../../store/selectors';
import { LOCAL_STORAGE_KEY, Region } from '../../types';
import { setItem } from '../../utils';
import { commonNs } from '../translations';

export const useSystem = (t: TFunction<'translation'>) => {
  const dispatch = useDispatch();
  const selectedRegion = useSelector(getRegion);
  const regions = getRegions(t);

  const handleChangeRegion = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const { value } = event.target;

    if (value) {
      dispatch(setRegion(value as Region));
      setItem(LOCAL_STORAGE_KEY.REGION, value);
    }
  };

  const fields: Props[] = [
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
