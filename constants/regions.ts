import { TFunction } from 'react-i18next';
import { DropdownItem } from '../components/Form/Dropdown';
import { commonNs } from '../hooks';

export const getRegions = (t: TFunction<'translation'>): DropdownItem[] => [
  {
    label: t('europe-label', commonNs),
    value: 'eu'
  },
  {
    label: t('america-label', commonNs),
    value: 'us'
  },
  {
    label: t('asia-label', commonNs),
    value: 'asia'
  }
];
