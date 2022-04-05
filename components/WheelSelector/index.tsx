import { Autocomplete, Icon } from '@mui/material';
import React from 'react';
import { useLayoutTranslations } from '../../hooks';
import { Brand, Wheel, WheelId } from '../../types';
import { getBrandInfo } from '../../utils';
import { Search, SearchIconWrapper, StyledInputBase } from '../Layouts/MainLayout/SearchBar';

interface Props {
  brands: Brand[];
  onChange: (wheelId: WheelId) => void;
  wheels: Wheel[];
}

const WheelSelector = ({ brands, onChange, wheels }: Props) => {
  const { t } = useLayoutTranslations();

  const handleChange = (
    event: React.SyntheticEvent<Element, Event>,
    value: Wheel | null
  ) => {
    // @ts-ignore
    const wheelId = value?.id;
    if (wheelId) {
      onChange(wheelId);
    }
  };

  return (
    <Search sx={ { mr: (theme) => theme.spacing(1) } }>
      <SearchIconWrapper>
        <Icon>search</Icon>
      </SearchIconWrapper>

      <Autocomplete<Wheel>
        onChange={ handleChange }
        options={ wheels }
        getOptionLabel={ wheel => wheel.name }
        groupBy={ wheel => getBrandInfo(wheel.brandId, brands)?.name ?? '' }
        renderInput={ ({ InputLabelProps, InputProps, ...params }) => (
          <StyledInputBase
            { ...InputProps }
            { ...params }
            placeholder={ t('search-label') }
          />) }
        value={ null }
      />
    </Search>
  );
};

export default WheelSelector;
