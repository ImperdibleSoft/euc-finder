import { Box, Grid, Typography } from '@mui/material';
import React from 'react';
import { PurchaseLink } from '../../types';
import EucDetailPurchaseLinks from '../EucDetailPurchaseLinks';

interface Props {
  items: PurchaseLink[]
}

const EucAdditionalPurchaseLinks: React.FC<Props> = ({ items }) => {
  if (items.length <= 0) {
    return null;
  }
  
  return (
    <Grid item xs={ 12 } md={ 6 }>
      <Typography sx={ { mt: 4, mb: 2 } } variant="h6" component="div">
        Otras tiendas disponibles
      </Typography>

      <Box>
        <EucDetailPurchaseLinks items={ items } />
      </Box>
    </Grid>
  );
};

export default EucAdditionalPurchaseLinks;