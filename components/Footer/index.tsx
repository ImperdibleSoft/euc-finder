import { Box, Container, Divider, Link, Typography } from '@mui/material';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { APP_NAME, APP_REPO, APP_VERSION, CURRENT_YEAR } from '../../constants';
import { useModalsContext } from '../../context';

const launchYear = 2021;
const yearText = CURRENT_YEAR <= launchYear ? CURRENT_YEAR : `${ launchYear }-${ CURRENT_YEAR }`;

const Footer: React.FC = () => {
  const { t } = useTranslation();
  const { initialDisclaimer } = useModalsContext();
  const [major, minor] = APP_VERSION.split('.');
  
  return (
    <>
      <Divider sx={ { mt: 5 } }  />

      <Container sx={ {
        pb: 3,
        pt: 5,
        textAlign: 'center'
      } }>
        <Box sx={ { mb: 4 } }>
          { APP_NAME } { yearText } — v{ `${ major }.${ minor }` } { `${ t('at') } ` }

          <Link href={ APP_REPO } target="_blank" rel="noreferrer">
            Github
          </Link>

          { ` — ${ t('createdBy-msg') } ` }
          <Link href="https://imperdiblesoft.com" target="_blank" rel="noreferrer">
            ImperdibleSoft
          </Link>
        </Box>

        <Box sx={ { mb: 4 } }>
          <Link sx={ { cursor: 'pointer' } } onClick={ initialDisclaimer.handleOpen }>
            { t('information-label') }
          </Link>

          { ` ${ t('information-msg') }` }
        </Box>

        <Box>
          <Typography variant="subtitle2" component="p">
            { t('disclaimer1-msg') }
          </Typography>
          <Typography variant="subtitle2" component="p">
            { t('disclaimer2-msg') }
          </Typography>
        </Box>
      </Container>
    </>
  );};

export default Footer;