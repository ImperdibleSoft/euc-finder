import { CardMedia, Grid, Typography } from '@mui/material';
import React, { PropsWithChildren } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { getBrands } from '../../../../store/selectors';
import { Availability, BrandId } from '../../../../types';
import { getBrandInfo } from '../../../../utils';
import AvailabilityIcon from '../../../AvailabilityIcon';
import BrandLogo from '../../../BrandLogo';

interface Props {
  availability: Availability;
  brandId: BrandId;
  heroImage: string;
  wheelName: string;
}

const Header: React.FC<PropsWithChildren<Props>> = ({
  availability,
  brandId,
  children,
  heroImage,
  wheelName
}) => {
  const { t } = useTranslation();
  const brands = useSelector(getBrands);
  const brand = getBrandInfo(brandId, brands);
  
  return (
    <Grid container>
      <Grid item xs={ 12 } md={ 4 } sx={ { position: 'relative' } }>
        <CardMedia
          component="img"
          height="240"
          image={ heroImage }
          alt={ t('wheelPicture-msg', { wheelName }) }
        />

        { !!brand && (
          <BrandLogo
            alt={ t('appLogo-label', { appName: brand.name }) }
            logo={ brand.logo }
          />
        ) }
      </Grid>

      <Grid
        item
        xs={ 12 }
        md={ 8 }
        sx={ {
          display: 'flex',
          flexDirection: 'column',
          pl: { md: 8 },
          position: { xs: 'relative', md: 'initial' },
          pt: { xs: 4, md: 0 }
        } }
      >
        <Typography sx={ { mb: 2 } } variant="h2" component="h1">
          { wheelName }
        </Typography>

        <Typography variant="body1" component="div" color="text.secondary" style={ { flex: 1 } }>
          { children }
        </Typography>

        <AvailabilityIcon availability={ availability } showLabel />
      </Grid>
    </Grid>
  );};

export default Header;
