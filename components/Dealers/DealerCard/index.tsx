/* eslint-disable max-lines */
import { 
  Box,
  Card,
  CardContent,
  CardMedia,
  Divider,
  Grid,
  Icon,
  Link,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Tooltip,
  Typography
} from '@mui/material';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { getPurchaseLinksByStore, getStores } from '../../../store/selectors';
import { isDarkTheme } from '../../../utils';
import { isDealerAvailable } from '../../../utils/dealers';

const listItemStyles = { px: 0 };
const listItemIconStyles = { cursor: 'default', minWidth: 24, mr: 2 };

const getNegotiationsStatus = (discountCode: string) => {
  switch (discountCode) {
    case '✔️':
      return '✔️';

    case '❌':
      return '❌';

    default:
      return undefined;
  }
};

interface Props {
  storeName: string;
  negotiations: string;
  discountCode: string;
  storeInformation: string;
  purchaseLinks: string;
  fetchPrices: string;
}

// eslint-disable-next-line max-lines-per-function
const DealerCard: React.FC<Props> = ({
  storeName,
  negotiations,
  discountCode,
  storeInformation,
  purchaseLinks,
  fetchPrices
}) => {
  const { t } = useTranslation();
  const dark = isDarkTheme();
  const stores = useSelector(getStores);
  const store = stores.find(s => s.name.toLowerCase() === storeName.toLowerCase());
  const links = useSelector(getPurchaseLinksByStore(store?.id));
  
  if (
    (!negotiations || negotiations === '➖') &&
    (!discountCode || discountCode === '➖') &&
    (!storeInformation || storeInformation === '➖') &&
    (!purchaseLinks || purchaseLinks === '➖') &&
    (!fetchPrices || fetchPrices === '➖')
  ) {
    return null;
  }

  const available = isDealerAvailable(storeName) ? '✔️': '❌';
  const parsedNegotiations = getNegotiationsStatus(discountCode) ?? negotiations;

  const logoSize = 156;
  const [logoPath, extension] = store?.logo.split('.') ?? [];
  const logoVersion = dark ? 'dark' : 'light';
  const logo = store ? `${ logoPath }-${ logoVersion }.${ extension }` : undefined;

  return (
    <Grid
      key={ storeName }
      item
      xs={ 12 }
      sm={ 6 }
      md={ 4 }
      lg={ 3 }
    >
      <Card>
        <Box sx={ {
          alignItems: 'center',
          display: 'flex',
          justifyContent: 'center',
          height: logoSize,
          maxWidth: logoSize,
          margin: '0 auto'
        } }>
          { !!logo && (
            <CardMedia
              alt={ t('appLogo-label', { appName: storeName }) }
              component="img"
              image={ logo }
              sx={ { objectFit: 'initial' } }
            />
          ) }
        </Box>

        <CardContent>
          <Typography gutterBottom variant="h5" component="p">
            { storeName }
          </Typography>

          { !!store?.website && (
            <List dense>
              <ListItem sx={ listItemStyles }>
                <ListItemText
                  primary={ (
                    <Link
                      href={ `${ store.website }${ store.meta.code ? `?${ store.meta.code }` : '' }` }
                      target="_blank"
                    >
                      { store.website }
                    </Link>
                  ) }
                  secondary={ t('website-label') }
                />
              </ListItem>
            </List>
          ) }

          <List dense>
            <ListItem sx={ listItemStyles }>
              <ListItemIcon sx={ listItemIconStyles }>
                <Icon color="primary">radio_button_unchecked</Icon>
              </ListItemIcon>
              <ListItemText primary={ `${ links.length } ${ t('eucs') }` } />
            </ListItem>
          </List>

          <List dense>
            <ListItem sx={ listItemStyles }>
              <ListItemIcon sx={ listItemIconStyles }>
                { available }
              </ListItemIcon>
              <ListItemText primary={ t('dealers-available-label') } />
            </ListItem>
            <Divider />

            <ListItem sx={ listItemStyles }>
              <Tooltip title={ t(`${ storeInformation }-label`) ?? '' }>
                <ListItemIcon sx={ listItemIconStyles }>
                  { storeInformation }
                </ListItemIcon>
              </Tooltip>
              <ListItemText primary={ t('dealers-storeInformation-label') } />
            </ListItem>

            <ListItem sx={ listItemStyles }>
              <Tooltip title={ t(`${ purchaseLinks }-label`) ?? '' }>
                <ListItemIcon sx={ listItemIconStyles }>
                  { purchaseLinks }
                </ListItemIcon>
              </Tooltip>
              <ListItemText primary={ t('dealers-purchaseLinks-label') } />
            </ListItem>

            <ListItem sx={ listItemStyles }>
              <Tooltip title={ t(`${ fetchPrices }-label`) ?? '' }>
                <ListItemIcon sx={ listItemIconStyles }>
                  { fetchPrices }
                </ListItemIcon>
              </Tooltip>
              <ListItemText primary={ t('dealers-fetchPrices-label') } />
            </ListItem>

            <ListItem sx={ listItemStyles }>
              <Tooltip title={ t(`${ parsedNegotiations }-label`) ?? '' }>
                <ListItemIcon sx={ listItemIconStyles }>
                  { parsedNegotiations }
                </ListItemIcon>
              </Tooltip>
              <ListItemText primary={ t('dealers-negotiations-label') } />
            </ListItem>

            <ListItem sx={ listItemStyles }>
              <Tooltip title={ t(`${ discountCode }-label`) ?? '' }>
                <ListItemIcon sx={ listItemIconStyles }>
                  { discountCode }
                </ListItemIcon>
              </Tooltip>
              <ListItemText primary={ t('dealers-discountCode-label') } />
            </ListItem>
          </List>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default DealerCard;