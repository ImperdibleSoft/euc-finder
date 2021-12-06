import { CardMedia, Grid, Typography } from '@mui/material';
import React, { PropsWithChildren } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { getBrands } from '../../store/selectors';
import { BrandId } from '../../types';
import BrandLogo from '../BrandLogo';

interface Props {
  brandId: BrandId
  heroImage: string
  wheelName: string
}

const EucDetailHeader: React.FC<PropsWithChildren<Props>> = ({
  brandId,
  children,
  heroImage,
  wheelName
}) => {
  const { t } = useTranslation();
  const brands = useSelector(getBrands);
  
  return (
    <Grid container>
      <Grid item xs={ 12 } md={ 4 } sx={ { position: 'relative' } }>
        <CardMedia
          component="img"
          height="240"
          image={ heroImage }
          alt={ t('wheelPicture-msg', { wheelName }) }
        />

        <BrandLogo
          alt={ t('appLogo-label', { appName: brands[brandId].name }) }
          logo={ brands[brandId].logo }
        />
      </Grid>

      <Grid
        item
        xs={ 12 }
        md={ 8 }
        sx={ {
          pt: { xs: 4, md: 0 },
          pl: { md: 8 },
          display: 'flex',
          flexDirection: 'column'
        } }
      >
        <Typography sx={ { mb: 2 } } variant="h2" component="h1">
          { wheelName }
        </Typography>

        <Typography variant="body1" component="p" color="text.secondary" style={ { flex: 1 } }>
          { children }
        </Typography>
      </Grid>
    </Grid>
  );};

export default EucDetailHeader;