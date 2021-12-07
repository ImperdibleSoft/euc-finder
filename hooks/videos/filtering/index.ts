import React from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import CheckboxGroup from '../../../components/Form/CheckboxGroup';
import { wheelFeatureIcons } from '../../../constants';
import { filterVideos, resetVideoFilters } from '../../../store/actions';
import { getBrands, getInfluencers, getVideoFilters, getWheels } from '../../../store/selectors';
import { FilterField, InfluencerId, VideoCategory, VideoFilters, WheelId } from '../../../types';
import { getDropdownOptions } from './constants';

const useFilters = () => {
  const dispatch = useDispatch();
  const filters = useSelector(getVideoFilters);

  const handleFilterBy = (key: keyof VideoFilters, value: unknown) => {
    dispatch(filterVideos({ key, value }));
  };

  const handleChangeCategories = (event: React.ChangeEvent<HTMLInputElement>) => {
    const category = event.target.name as VideoCategory;
    const value = event.target.checked;

    let enabledCategories = [...filters.categories];
    if (!value) {
      enabledCategories = [...filters.categories].filter(b => b !== category);
    } else if (value && !enabledCategories.includes(category)) {
      enabledCategories.push(category);
    }

    handleFilterBy('categories', enabledCategories);
  };

  const handleChangeInfluencers = (event: React.ChangeEvent<HTMLInputElement>) => {
    const name = event.target.name as InfluencerId;
    const value = event.target.checked;

    let enabledInfluencers = [...filters.influencers];
    if (!value) {
      enabledInfluencers = [...filters.influencers].filter(b => b !== name);
    } else if (value && !enabledInfluencers.includes(name)) {
      enabledInfluencers.push(name);
    }

    handleFilterBy('influencers', enabledInfluencers);
  };

  const handleChangeWheels = (event: React.ChangeEvent<HTMLInputElement>) => {
    const name = event.target.name as WheelId;
    const value = event.target.checked;

    let enabledWheels = [...filters.wheels];
    if (!value) {
      enabledWheels = [...filters.wheels].filter(b => b !== name);
    } else if (value && !enabledWheels.includes(name)) {
      enabledWheels.push(name);
    }

    handleFilterBy('wheels', enabledWheels);
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
      Field: CheckboxGroup,
      icon: wheelFeatureIcons.category,
      label: t('category-label'),
      name: 'categories',
      options: categoryOptions.map(option => ({
        ...option,
        onChange: handleChangeCategories,
        checked: filters.categories.includes(option.name as VideoCategory)
      })),
      space: true
    },
    
    {
      Field: CheckboxGroup,
      icon: 'person',
      label: t('influencers'),
      name: 'influencers',
      options: influencersOptions.map(option => ({
        ...option,
        onChange: handleChangeInfluencers,
        checked: filters.influencers.includes(option.name as InfluencerId)
      })),
      space: true
    },
    
    {
      Field: CheckboxGroup,
      icon: wheelFeatureIcons.diameter,
      label: t('wheels'),
      name: 'wheels',
      options: wheelsOptions.map(option => ({
        ...option,
        onChange: handleChangeWheels,
        checked: filters.wheels.includes(option.name as WheelId)
      })),
      space: true
    }
  ];

  
  const onChangeCategories = (id: string) => {
    // @ts-ignore incomplete target object
    handleChangeCategories({ target: { name: id, checked: true } });
  };

  const onChangeInfluencers = (id: string) => {
    // @ts-ignore incomplete target object
    handleChangeInfluencers({ target: { name: id, checked: true } });
  };

  const onChangeWheels = (id: string) => {
    // @ts-ignore incomplete target object
    handleChangeWheels({ target: { name: id, checked: true } });
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