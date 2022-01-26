import { Grid, Typography } from '@mui/material';
import Head from 'next/head';
import React from 'react';
import { useSelector } from 'react-redux';
import SimpleLayout from '../../components/Layouts/SimpleLayout';
import EmptyCase from '../../components/Screens/Influencers/EmptyCase';
import InfluencerCard from '../../components/Screens/Influencers/InfluencerCard';
import { APP_NAME, KEYWORDS } from '../../constants';
import { useInfluencersTranslations } from '../../hooks';
import { getInfluencers } from '../../store/selectors';
import { TranslationFile } from '../../types';
import { getTranslationsFromFiles } from '../../utils-server';

const Influencers: React.FC = () => {
  const { t } = useInfluencersTranslations();
  const influencers = useSelector(getInfluencers);

  const pageTitle = t('influencers-title');
  const pageDescription = t('influencers-description', { appName: APP_NAME });

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
        { !!influencers.length && (
          <>
            <Typography variant="h4" sx={ { mb: 2 } }>
              { pageTitle }
            </Typography>

            <Typography variant="body1" sx={ { mb: 2 } }>
              { t('influencers-msg') }
            </Typography>

            <Grid container spacing={ 2 }>
              { influencers.map(influencer => (
                <InfluencerCard
                  key={ influencer.id }
                  influencer={ influencer }
                />
              )) }
            </Grid>
          </>
        ) }

        { !influencers.length && (
          <EmptyCase />
        ) }
      </SimpleLayout>
    </>
  );
};

export default Influencers;

export const getStaticProps = getTranslationsFromFiles([TranslationFile.influencers], 'none');
