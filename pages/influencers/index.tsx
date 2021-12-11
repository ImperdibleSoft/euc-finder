import { Grid, Typography } from '@mui/material';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { getStaticProps } from '..';
import InfluencerCard from '../../components/Influencers/InfluencerCard';
import SimpleLayout from '../../components/Layouts/SimpleLayout';
import { getInfluencers } from '../../store/selectors';

const Influencers: React.FC = () => {
  const { t } = useTranslation();
  const influencers = useSelector(getInfluencers);

  return (
    <SimpleLayout>
      <Typography variant="h4" sx={ { mb: 2 } }>
        { t('influencers') }
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
  );
};

export default Influencers;

export { getStaticProps };