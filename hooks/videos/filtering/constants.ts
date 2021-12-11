import { TFunction } from 'react-i18next';
import { DropdownItem } from '../../../components/Form/Dropdown';
import { Brands, Influencer, Lang, Wheel } from '../../../types';
import { formatWheelName, getAllCategories } from '../../../utils';

interface Params {
  brands: Brands;
  influencers: Influencer[];
  wheels: Wheel[];
}

export const getDropdownOptions = ({ brands, influencers, wheels }: Params, t: TFunction<'translation'>) => {
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
      label: t('en-label'),
      value: 'en'
    },
    {
      label: t('es-label'),
      value: 'es'
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