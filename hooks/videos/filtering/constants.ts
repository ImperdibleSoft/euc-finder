import { TFunction } from 'react-i18next';
import { CheckboxProps } from '../../../components/Form/Checkbox';
import { Brands, Influencer, Wheel } from '../../../types';
import { formatWheelName, getAllCategories } from '../../../utils';

interface Params {
  brands: Brands;
  influencers: Influencer[];
  wheels: Wheel[];
}

export const getDropdownOptions = ({ brands, influencers, wheels }: Params, t: TFunction<'translation'>) => {
  const categoryOptions: CheckboxProps[] = getAllCategories()
    .map(category => ({
      label: t(`${ category }-label`),
      name: category,
      onChange: () => { return; }
    }));

  const influencersOptions: CheckboxProps[] = influencers
    .map(influencer => ({
      label: influencer.name,
      name: influencer.id,
      onChange: () => { return; }
    }));

  const wheelsOptions: CheckboxProps[] = wheels
    .map(wheel => ({
      label: formatWheelName(wheel, brands),
      name: wheel.id,
      onChange: () => { return; }
    }));

  return {
    categoryOptions,
    influencersOptions,
    wheelsOptions
  };
};