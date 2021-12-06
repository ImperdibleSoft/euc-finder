import { Box, Grid, Typography } from '@mui/material';
import Head from 'next/head';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import DealerCard from '../components/DealerCard';
import SimpleLayout from '../components/Layouts/SimpleLayout';
import { APP_NAME, KEYWORDS } from '../constants';
import { getRegion } from '../store/selectors';
import { Region } from '../types';
import { getDealersFromMarkdown } from '../utils/dealers';
import { getStaticProps } from '../utils/serverTranslatedResources';

const getRegionId = (regionCode: Region) => {
  switch (regionCode) {
    case 'eu':
      return 'europe';

    case 'us':
      return 'america';

    case 'asia':
    default:
      return regionCode;
  }
};

const Dealers: React.FC = () => {
  const { t } = useTranslation();
  const regionCode = useSelector(getRegion);
  const regionId = getRegionId(regionCode);

  const regions = getDealersFromMarkdown();
  const region = regions.find(r => r.name === regionId);
  const regionName = t(`${ regionId }-label`);

  const pageTitle = t('dealers-title');
  const pageDescription = t('dealers1-msg', { appName: APP_NAME, region: regionName });

  return (
    <>
      <Head>
        <title>{ `${ pageTitle } - ${ APP_NAME }` }</title>
        <meta name="description" content={ pageDescription } />

        <meta name="keywords" content={ KEYWORDS.join(', ') } />

        <meta property="og:type" content="website" />
        <meta property="og:title" content={ pageTitle } />
        <meta property="og:description" content={ pageDescription } />
        <meta property="og:image" content={ require('/public/assets/ogImage.png').default?.src } />
        <meta property="og:image:alt" content={ t('appLogo-label', { appName: APP_NAME }) } />
      </Head>

      <SimpleLayout>
        <Typography variant="h4" component="h1" sx={ { mb: 3 } }>
          { pageTitle }
        </Typography>

        <Typography variant="body1" component="p" sx={ { mb: 3 } }>
          { pageDescription }
        </Typography>

        <Typography variant="body1" component="p" sx={ { mb: 3 } }>
          { t('dealers2-msg') }
        </Typography>

        <Typography variant="h4" component="h2" sx={ { mb: 3 } }>
          { t('discounts-title') }
        </Typography>

        <Typography variant="body1" component="p" sx={ { mb: 3 } }>
          { t('discounts1-msg') }
        </Typography>

        <Typography variant="body1" component="p" sx={ { mb: 3 } }>
          { t('discounts2-msg') }
        </Typography>

        <Box>
          <Typography variant="h5" component="h4" sx={ { mb: 2 } }>
            { regionName }
          </Typography>

          <Grid container spacing={ 2 }>
            { !region?.dealers.length && (
              <Grid item xs={ 12 } sm={ 12 } md={ 12 } lg={ 12 } xl={ 12 }>
                { t('noDealers-msg', { region: regionName }) }
              </Grid>
            ) }

            { region?.dealers?.map(({ dealerName, ...props }) => (
              <DealerCard
                key={ dealerName }
                storeName={ dealerName }
                { ...props }
              />
            )) }
          </Grid>
        </Box>
      </SimpleLayout>
    </>
  );
};

export default Dealers;

export { getStaticProps };