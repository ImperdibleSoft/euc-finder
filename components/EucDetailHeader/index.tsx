import { CardMedia, Grid, Typography } from '@mui/material';
import React, { PropsWithChildren } from 'react';
import { PurchaseLink } from '../../types';
import EucDetailPurchaseLinks from '../EucDetailPurchaseLinks';

interface Props {
  heroImage: string
  purchaseLinks: PurchaseLink[]
  wheelName: string
}

const EucDetailHeader: React.FC<PropsWithChildren<Props>> = ({
  children,
  heroImage,
  purchaseLinks,
  wheelName
}) => (
  <Grid container>
    <Grid item xs={ 12 } md={ 4 }>
      <CardMedia
        component="img"
        height="240"
        image={ heroImage }
        alt={ `Foto de ${ wheelName }` }
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

      <EucDetailPurchaseLinks items={ purchaseLinks } large />
    </Grid>
  </Grid>
);

export default EucDetailHeader;