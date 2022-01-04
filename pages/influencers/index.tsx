import { Grid, Typography } from '@mui/material';
import Head from 'next/head';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { getStaticProps } from '..';
import InfluencerCard from '../../components/Influencers/InfluencerCard';
import SimpleLayout from '../../components/Layouts/SimpleLayout';
import { APP_NAME, KEYWORDS } from '../../constants';
import { getInfluencers } from '../../store/selectors';

const Influencers: React.FC = () => {
  const { t } = useTranslation();
  const influencers = useSelector(getInfluencers);

  const pageTitle = t('influencers');
  const pageDescription = t('influencers1-msg', { appName: APP_NAME });

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
        <Typography variant="h4" sx={ { mb: 2 } }>
          { pageTitle }
        </Typography>

        <Grid container spacing={ 2 }>
          { influencers.map(influencer => (
            <InfluencerCard
              key={ influencer.id }
              influencer={ influencer }
            />
          )) }
        </Grid>
      </SimpleLayout>
    </>
  );
};

export default Influencers;

export { getStaticProps };