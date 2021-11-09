import { Box, Grid, Typography } from '@mui/material';
import Head from 'next/head';
import React from 'react';
import { useTranslation } from 'react-i18next';
import DealerCard from '../components/DealerCard';
import SimpleLayout from '../components/Layouts/SimpleLayout';
import { APP_NAME } from '../constants';
// @ts-ignore
import dealersMarkdown from '../docs/dealers.md';
import { parseMarkdown } from '../utils/dealers';
import { getStaticProps } from '../utils/serverTranslatedResources';

const Dealers: React.FC = () => {
  const { t } = useTranslation();
  const dealers = parseMarkdown(dealersMarkdown);

  const pageTitle = t('dealers-title');

  return (
    <>
      <Head>
        <title>{ `${ pageTitle } - ${ APP_NAME }` }</title>
      </Head>

      <SimpleLayout>
        <Typography variant="h4" component="h1" sx={ { mb: 3 } }>
          { pageTitle }
        </Typography>

        <Typography variant="body1" component="p" sx={ { mb: 3 } }>
          { t('dealers1-msg', { appName: APP_NAME }) }
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

        { dealers.map(region => (
          <Box key={ region.name } sx={ { mb: 5 } }>
            <Typography variant="h5" component="h4" sx={ { mb: 2 } }>
              { t(`${ region.name }-label`) }
            </Typography>

            <Grid container spacing={ 2 }>
              { region.dealers.map(({ dealerName, ...props }) => (
                <DealerCard
                  key={ dealerName }
                  storeName={ dealerName }
                  { ...props }
                />
              )) }
            </Grid>
          </Box>
        )) }
      </SimpleLayout>
    </>
  );
};

export default Dealers;

export { getStaticProps };