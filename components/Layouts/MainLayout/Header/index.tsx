import {
  AppBar,
  Autocomplete,
  AutocompleteChangeDetails,
  AutocompleteChangeReason,
  Box,
  Icon,
  IconButton,
  Toolbar,
  Typography
} from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { APP_NAME } from '../../../../constants';
import { ROOT } from '../../../../constants/clientRoutes';
import { Brands, Region, Wheel } from '../../../../types';
import { showPurchaseLinks } from '../../../../utils';
import Dropdown, { DropdownItem } from '../../../Form/Dropdown';
import { Search, SearchIconWrapper, StyledInputBase } from '../SearchBar';

export interface Props {
  brands: Brands
  handleSelectRegion: (event: React.ChangeEvent<HTMLSelectElement>) => void
  handleSelectWheel: (
    event: React.SyntheticEvent<Element, Event>,
    value: Wheel | null,
    reason: AutocompleteChangeReason,
    details?: AutocompleteChangeDetails<Wheel> | undefined
  ) => void
  regions: DropdownItem[]
  selectedRegion: Region
  wheels: Wheel[]
}

const Header: React.FC<Props> = ({
  brands,
  handleSelectRegion,
  handleSelectWheel,
  regions,
  selectedRegion,
  wheels
}) => {
  const { t } = useTranslation();
  const purchaseLinks = showPurchaseLinks();
  
  return (
    <AppBar
      position="fixed"
      sx={ {
        ml: 0,
        width: '100%'
      } }
    >
      <Toolbar sx={ {
        alignItems: 'center',
        flexDirection: 'column',
        '@media screen and (min-width: 583px)': { flexDirection: 'row' }
      } }>
        <Box  sx={ {
          flex: 1,
          py: { xs: 1, sm: 0 },
          width: { xs: '100%', sm: 'auto' } 
        } }>
          <Link href={ ROOT } passHref>
            <Box sx={ {
              alignItems: 'center',
              cursor: 'pointer',
              display: 'flex' 
            } }>
              <Image
                alt="App's logo"
                height="48px"
                src="/logos/eucfinder-dark.png"
                width="48px"
              />

              <Typography
                variant="h6"
                noWrap
                sx={ {
                  color: (theme) => theme.palette.common.white,
                  display: 'inline-block',
                  textDecoration: 'none'
                } }
              >
                { APP_NAME }
              </Typography>
            </Box>
          </Link>
        </Box>

        <Box sx={ {
          alignItems: { sx: 'center', sm: 'flex-end' },
          display: 'flex',
          flex: { xs: 1, sm: 0 },
          flexDirection: 'row',
          justifyContent: 'center',
          pb: { xs: 1, sm: 0 },
          width: { xs: '100%', sm: 'auto' }
        } }>
          <Search sx={ { mr: (theme) => theme.spacing(1) } }>
            <SearchIconWrapper>
              <Icon>search</Icon>
            </SearchIconWrapper>

            <Autocomplete<Wheel>
              onChange={ handleSelectWheel }
              options={ wheels }
              getOptionLabel={ wheel => wheel.name }
              groupBy={ wheel => brands[wheel.brandId].name }
              renderInput={ ({ InputLabelProps, InputProps, ...params }) => (
                <StyledInputBase
                  { ...InputProps }
                  { ...params }
                  placeholder={ t('search-label') }
                />) }
            />
          </Search>

          { purchaseLinks && (
            <Search sx={ { mr: (theme) => theme.spacing(1) } }>
              <Dropdown
                icon="public"
                label={ t('region-label') }
                name="region"
                onChange={ handleSelectRegion }
                options={ regions }
                value={ selectedRegion }
              />
            </Search>
          ) }

          <Link href={ '/settings' } passHref>
            <IconButton>
              <Icon sx={ { color: (theme) => theme.palette.common.white } }>settings</Icon>
            </IconButton>
          </Link>
        </Box>
      </Toolbar>
    </AppBar>
  );};

export default Header;