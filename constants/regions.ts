import { TFunction } from 'react-i18next';
import { DropdownItem } from '../components/Form/Dropdown';

export const getRegions = (t: TFunction<'translation'>): DropdownItem[] => [
  {
    label: t('europe-label'),
    value: 'eu'
  },
  {
    label: t('america-label'),
    value: 'us'
  },
  {
    label: t('asia-label'),
    value: 'asia'
  }
];