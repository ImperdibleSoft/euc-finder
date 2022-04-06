import { Box } from '@mui/material';
import React from 'react';
import landingSections from '../../../constants/landingSections';
import { useLandingTranslations } from '../../../hooks';
import { TranslationFile } from '../../../types';
import LandingSection from './Section';

const LandingPage = () => {
  const { t } = useLandingTranslations();

  return (
    <Box sx={ { my: -3 } }>
      { landingSections.map(section => (
        <LandingSection
          key={ section.path }
          callToAction={ t(section.callToAction) }
          description={ t(section.description) }
          path={ section.path }
          picture={ section.picture }
          sx={ section.sx }
          title={ t(section.title, { ns: TranslationFile.layout }) }
        />
      )) }
    </Box>
  );
};

export default LandingPage;

