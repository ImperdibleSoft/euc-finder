import { TFunction } from 'react-i18next';
import { DropdownItem } from '../../../components/Form/Dropdown';
import { Brand, Influencer, Lang, Wheel } from '../../../types';
import { formatWheelName, getAllCategories } from '../../../utils';
import { commonNs } from '../../translations';

interface Params {
  brands: Brand[];
  influencers: Influencer[];
  wheels: Wheel[];
}

export const getDropdownOptions = (
  { brands, influencers, wheels }: Params,
  t: TFunction<'translation'>
) => {
  const categoryOptions: DropdownItem[] = getAllCategories()
    .map(category => ({
      label: t(`${ category }-label`),
      value: category
    }));

  const influencersOptions: DropdownItem[] = influencers
    .map(influencer => ({
      label: influencer.name,
      value: influencer.id
    }));

  const languageOptions: DropdownItem<Lang>[] = [
    {
      label: t('en-label', commonNs),
      value: 'en'
    },
    {
      label: t('es-label', commonNs),
      value: 'es'
    },
    {
      label: t('fr-label', commonNs),
      value: 'fr'
    }
  ];

  const wheelsOptions: DropdownItem[] = wheels
    .map(wheel => ({
      label: formatWheelName(wheel, brands),
      value: wheel.id
    }));

  return {
    categoryOptions,
    influencersOptions,
    languageOptions,
    wheelsOptions
  };
};
