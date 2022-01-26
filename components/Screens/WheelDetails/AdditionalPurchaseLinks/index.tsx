import {  Grid, Typography } from '@mui/material';
import React from 'react';
import { useWheelsDetailsTranslations } from '../../../../hooks';
import { PurchaseLink, WheelId } from '../../../../types';
import SponsoredPurchaseLinks from '../SponsoredPurchaseLinks';

interface Props {
  expensive: boolean;
  items: PurchaseLink[];
  wheel: WheelId;
}

const AdditionalPurchaseLinks: React.FC<Props> = ({ expensive, items, wheel }) => {
  const { t } = useWheelsDetailsTranslations();

  if (items.length <= 0) {
    return null;
  }
  
  return (
    <Grid item xs={ 12 } md={ 6 }>
      <Typography sx={ { mt: 4, mb: 2 } } variant="h6" component="div">
        { t('otherStores-title') }
      </Typography>

      <SponsoredPurchaseLinks expensive={ expensive } items={ items } wheel={ wheel } />
    </Grid>
  );
};

export default AdditionalPurchaseLinks;
