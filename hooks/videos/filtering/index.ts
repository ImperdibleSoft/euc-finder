import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import MultiSelect from '../../../components/Form/MultiSelect';
import { wheelFeatureIcons } from '../../../constants';
import { filterVideos, resetVideoFilters } from '../../../store/actions';
import { getBrands, getInfluencers, getVideoFilters, getWheels } from '../../../store/selectors';
import { FilterField, VideoFilters } from '../../../types';
import { getDropdownOptions } from './constants';

const useFilters = () => {
  const dispatch = useDispatch();
  const filters = useSelector(getVideoFilters);

  const handleFilterBy = (key: keyof VideoFilters, value: unknown) => {
    dispatch(filterVideos({ key, value }));
  };

  const handleChangeCategories = (value: string[]) => {
    handleFilterBy('categories', value);
  };

  const handleChangeInfluencers = (value: string[]) => {
    handleFilterBy('influencers', value);
  };

  const handleChangeWheels = (value: string[]) => {
    handleFilterBy('wheels', value);
  };

  const handleResetFilters = () => {
    dispatch(resetVideoFilters());
  };

  return {
    filters,
    handleChangeCategories,
    handleChangeInfluencers,
    handleChangeWheels,
    handleResetFilters
  };
};

export const useVideoFilterFields = () => {
  const { t } = useTranslation();
  const brands = useSelector(getBrands);
  const influencers = useSelector(getInfluencers);
  const wheels = useSelector(getWheels);

  const {
    categoryOptions,
    influencersOptions,
    wheelsOptions
  } = getDropdownOptions({ brands, influencers, wheels }, t);

  const {
    handleChangeCategories,
    handleChangeInfluencers,
    handleChangeWheels,
    handleResetFilters,
    filters
  } = useFilters();


  const fields: FilterField[] = [
    {
      allOptionsLabel: t('allOptions-label', { option: t('categories-label') }),
      Field: MultiSelect,
      icon: wheelFeatureIcons.category,
      label: t('categories-label'),
      name: 'categories',
      onChange: handleChangeCategories,
      options: categoryOptions,
      value: filters.categories,
      space: true
    },
    {
      allOptionsLabel: t('allElements-label', { element: t('influencers') }),
      Field: MultiSelect,
      icon: 'person',
      label: t('influencers'),
      name: 'influencers',
      onChange: handleChangeInfluencers,
      options: influencersOptions,
      value: filters.influencers,
      space: true
    },
    {
      allOptionsLabel: t('allElements-label', { element: t('eucs') }),
      Field: MultiSelect,
      icon: wheelFeatureIcons.diameter,
      label: t('eucs'),
      name: 'wheels',
      onChange: handleChangeWheels,
      options: wheelsOptions,
      value: filters.wheels,
      space: true
    }
  ];

  
  const onChangeCategories = (id: string) => {
    handleChangeCategories([id]);
  };

  const onChangeInfluencers = (id: string) => {
    handleChangeInfluencers([id]);
  };

  const onChangeWheels = (id: string) => {
    handleChangeWheels([id]);
  };


  return {
    fields,
    filters,
    handleChangeCategories: onChangeCategories,
    handleChangeInfluencers: onChangeInfluencers,
    handleChangeWheels: onChangeWheels,
    handleResetFilters
  };
};