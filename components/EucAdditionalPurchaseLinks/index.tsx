import {  Grid, Typography } from '@mui/material';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { PurchaseLink, WheelId } from '../../types';
import EucDetailPurchaseLinks from '../EucDetailPurchaseLinks';

interface Props {
  expensive: boolean;
  items: PurchaseLink[];
  wheel: WheelId;
}

const EucAdditionalPurchaseLinks: React.FC<Props> = ({ expensive, items, wheel }) => {
  const { t } = useTranslation();

  if (items.length <= 0) {
    return null;
  }
  
  return (
    <Grid item xs={ 12 } md={ 6 }>
      <Typography sx={ { mt: 4, mb: 2 } } variant="h6" component="div">
        { t('otherStores-title') }
      </Typography>

      <EucDetailPurchaseLinks expensive={ expensive } items={ items } wheel={ wheel } />
    </Grid>
  );
};

export default EucAdditionalPurchaseLinks;