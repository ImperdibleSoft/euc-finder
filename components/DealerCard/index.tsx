import { 
  Box,
  Card,
  CardContent,
  CardMedia,
  Divider,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Tooltip,
  Typography
} from '@mui/material';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { stores } from '../../context/data';
import { isDarkTheme } from '../../utils';

const listItemStyles = { px: 0 };
const listItemIconStyles = { cursor: 'default', minWidth: 24, mr: 2 };

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
  const store = stores.find(s => s.name.toLowerCase() === storeName.toLowerCase());
  
  if (
    (!negotiations || negotiations === '➖') &&
    (!discountCode || discountCode === '➖') &&
    (!storeInformation || storeInformation === '➖') &&
    (!purchaseLinks || purchaseLinks === '➖') &&
    (!fetchPrices || fetchPrices === '➖')
  ) {
    return null;
  }

  const available = (
    ((negotiations === '✔️' && discountCode === '✔️') || negotiations === '❌') &&
    storeInformation === '✔️' &&
    purchaseLinks === '✔️' &&
    fetchPrices === '✔️'
  ) ? '✔️': '❌';

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
              alt={ `${ storeName } logo` }
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

          <List dense>
            <ListItem sx={ listItemStyles }>
              <Tooltip title={ t(`${ available }-label`) ?? '' }>
                <ListItemIcon sx={ listItemIconStyles }>
                  { available }
                </ListItemIcon>
              </Tooltip>
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
              <Tooltip title={ t(`${ negotiations }-label`) ?? '' }>
                <ListItemIcon sx={ listItemIconStyles }>
                  { negotiations }
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