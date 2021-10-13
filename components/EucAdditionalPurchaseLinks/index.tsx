import { Box, Grid, Typography } from '@mui/material';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { PurchaseLink } from '../../types';
import EucDetailPurchaseLinks from '../EucDetailPurchaseLinks';

interface Props {
  items: PurchaseLink[]
}

const EucAdditionalPurchaseLinks: React.FC<Props> = ({ items }) => {
  const { t } = useTranslation();

  if (items.length <= 0) {
    return null;
  }
  
  return (
    <Grid item xs={ 12 } md={ 6 }>
      <Typography sx={ { mt: 4, mb: 2 } } variant="h6" component="div">
        { t('otherStores-title') }
      </Typography>

      <Box>
        <EucDetailPurchaseLinks items={ items } />
      </Box>
    </Grid>
  );
};

export default EucAdditionalPurchaseLinks;