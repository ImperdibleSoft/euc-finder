import { Box, Button, Card, CardMedia, Icon, Typography } from '@mui/material';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import {
  useConfirmationModal,
  useDiscountPrice,
  useWheelPrice,
  useWheelPriceStyles,
  useWheelsDetailsTranslations
} from '../../../../hooks';
import { getRegion } from '../../../../store/selectors';
import { Store, WheelId } from '../../../../types';
import { isDarkTheme, logEvent } from '../../../../utils';

interface Props {
  discount?: number;
  expensive: boolean;
  large?: boolean;
  url: string;
  store: Store;
  wheel: WheelId;
}

// eslint-disable-next-line max-lines-per-function
const PurchaseLink: React.FC<Props> = ({ discount: d, expensive, large = false, url, store, wheel }) => {
  const [codeCopied, setCodeCopied] = useState('');
  const region = useSelector(getRegion);
  const { t } = useWheelsDetailsTranslations();
  const dark = isDarkTheme();
  const { loadingState, price: rawPrice } = useWheelPrice(store.id, url, expensive);
  const [, discountCode] = store?.meta?.code?.split('=') ?? [];
  const { price, discount, discountedPrice } = useDiscountPrice(region, rawPrice, d) ?? {};

  const mainStyles = useWheelPriceStyles(true, large);
  const secondaryStyles = useWheelPriceStyles(false, large);

  const copyCallback = () => {
    if (discountCode) {
      setCodeCopied(discountCode);
    }
  };
  
  const navigate = () => {
    logEvent({
      action: 'click',
      params: {
        codeCopied,
        store: store.id,
        wheel
      }
    });

    window?.open(url);
  };

  const discountProps = !!store.meta.manualDiscount
    ? {
      code: discountCode,
      discount
    }
    : {};

  const { handleOpen, render } = useConfirmationModal({
    callback: navigate,
    copyCallback: copyCallback,
    storeName: store.name,
    ...discountProps
  });

  const logoSize = large ? 200 : 156;
  const [logoPath, extension] = store.logo.split('.');
  const logoVersion = dark ? 'dark' : 'light';
  const logo = `${ logoPath }-${ logoVersion }.${ extension }`; 

  const displayDiscount = (loadingState === 'success' || loadingState === 'error') && price !== undefined && !!discount;

  return (
    <>
      <Card
        sx={ {
          alignItems: 'center',
          display: 'flex',
          flexDirection: 'column',
          p: 1
        } }
      >
        <Box sx={ {
          alignItems: 'center',
          display: 'flex',
          justifyContent: 'center',
          height: logoSize,
          maxWidth: logoSize
        } }>
          <CardMedia
            alt={ t('appLogo-label', { appName: store.name }) }
            component="img"
            image={ logo }
            sx={ { objectFit: 'initial' } }
          />
        </Box>

        { displayDiscount && (
          <Typography variant="body1" component="span" sx={ { alignItems: 'center', display: 'flex', mb: 2 } }>
            <Icon sx={ { mr: 1 } } color="secondary">local_offer</Icon> { t('discount-msg', { discount }) }
          </Typography>
        ) }

        { loadingState === 'loading' && (
          <Typography variant="body1" component="span" sx={ { mb: 2 } }>
            { t('loadingPrice-msg', { storeName: store.name }) }
          </Typography>
        ) }

        { loadingState === 'success' && rawPrice === '-' && (
          <Typography
            variant={ (discountedPrice ? secondaryStyles : mainStyles).variant }
            component="span"
            sx={ {
              color: (theme) => theme.palette.grey[500],
              fontWeight: mainStyles.fontWeight,
              mb: 2,
              textDecoration: mainStyles.textDecoration
            } }
          >
            { t('soldOut-msg') }
          </Typography>
        ) }

        { loadingState !== 'loading' && !!rawPrice && rawPrice !== '-' && (
          <Box
            sx={ {
              alignItems:  'center',
              display: 'flex',
              flexDirection: 'column',
              mb: 2
            } }
          >
            <Typography
              variant={ (discountedPrice ? secondaryStyles : mainStyles).variant }
              component="span"
              sx={ {
                color: (theme) => theme.palette.grey[500],
                fontWeight: (discountedPrice ? secondaryStyles : mainStyles).fontWeight,
                textDecoration: (discountedPrice ? secondaryStyles : mainStyles).textDecoration
              } }
            >
              { price }
            </Typography>

            { !!discountedPrice && (
              <Typography
                variant={ mainStyles.variant }
                component="span"
                sx={ {
                  color: (theme) => theme.palette.secondary.main,
                  fontWeight: mainStyles.fontWeight,
                  textDecoration: mainStyles.textDecoration
                } }
              >
                { discountedPrice }
              </Typography>
            ) }
          </Box>
        ) }

        <Button
          onClick={ handleOpen }
          size={ large ? 'large' : 'medium' }
          variant="contained"
        >
          { t('buy-btn') }
        </Button>
      </Card>

      { render() }
    </>
  );
};

export default PurchaseLink;
