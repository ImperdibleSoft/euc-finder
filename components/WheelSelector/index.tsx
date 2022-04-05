import { alpha, Autocomplete, FormControl, Icon, Theme } from '@mui/material';
import React from 'react';
import { useLayoutTranslations } from '../../hooks';
import { Brand, Wheel, WheelId } from '../../types';
import { getBrandInfo } from '../../utils';
import { formControlStyles } from '../Form/constants';
import { Search, SearchIconWrapper, StyledInputBase } from '../Layouts/MainLayout/SearchBar';

interface Props {
  brands: Brand[];
  onChange: (wheelId: WheelId) => void;
  placeholder?: string;
  traslucent?: boolean;
  style?: React.CSSProperties;
  wheels: Wheel[];
}

const WheelSelector = ({ brands, onChange, placeholder, traslucent = false, style, wheels }: Props) => {
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
    <FormControl style={ { ...formControlStyles, ...style } }>
      <Search sx={ {
        backgroundColor: ({ palette  }: Theme) => alpha(palette.background.default , traslucent ? 0.15 : 1),
        borderBottom: ({ palette }: Theme) => `1px solid ${ alpha(palette.primary.main, 1) }`,
        borderRadius: 0,
        mr: (theme) => theme.spacing(1),

        '&:hover': {
          backgroundColor: ({ palette }: Theme) => alpha(palette.background.default, traslucent ? 0.25 : 1),
          borderBottomWidth: '2px'
        }
      } }>
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
              placeholder={ placeholder ?? t('search-label') }
            />) }
          value={ null }
        />
      </Search>
    </FormControl>
  );
};

export default WheelSelector;
