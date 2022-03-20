import { Grid, Typography  } from '@mui/material';
import React from 'react';
import { useWheelsDetailsTranslations } from '../../../../hooks';
import { PurchaseLink, WheelId } from '../../../../types';
import PurchaseLinkComponent from '../PurchaseLink';

interface Props {
  expensive: boolean;
  items: PurchaseLink[];
  large?: boolean;
  wheel: WheelId;
}

const SponsoredPurchaseLinks: React.FC<Props> = ({ expensive, items, large, wheel }) => {
  const { t } = useWheelsDetailsTranslations();

  if (!items.length) {
    return null;
  }
  
  return (
    <>
      { large && (
        <Typography sx={ { mt: 4, mb: 2 } } variant="h6" component="div">
          { t('promotedStores-title') }
        </Typography>
      ) }

      <Grid container spacing={ 2 }>
        { items.map(({ discount, url, store }) => (
          <Grid
            key={ url }
            item
            xs={ 6 }
            sm={ large ? 6 : 4 }
            md={ 4 }
          >
            <PurchaseLinkComponent
              discount={ discount }
              expensive={ expensive }
              large={ large  }
              store={ store }
              url={ url }
              wheel={ wheel }
            />
          </Grid>
        )) }
      </Grid>
    </>
  );
};

export default SponsoredPurchaseLinks;
