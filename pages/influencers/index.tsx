import { Typography } from '@mui/material';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { getStaticProps } from '..';
import SimpleLayout from '../../components/Layouts/SimpleLayout';
import { getInfluencers } from '../../store/selectors';

const Influencers: React.FC = () => {
  const { t } = useTranslation();
  const influencers = useSelector(getInfluencers);

  return (
    <SimpleLayout>
      <Typography variant="h4">
        { t('influencers-label') }
      </Typography>

      { influencers.map(influencer => (
        <div key={ influencer.id }>
          { influencer.name }
        </div>
      )) }
    </SimpleLayout>
  );
};

export default Influencers;

export { getStaticProps };