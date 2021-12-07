import { Box, Button, ButtonGroup, Container, Icon, Typography } from '@mui/material';
import Head from 'next/head';
import React from 'react';
import { useTranslation } from 'react-i18next';
import LeftSidebarLayout from '../../components/Layouts/LeftSidebarLayout';
import VideoCard from '../../components/Videos/VideoCard';
import VideoFilters from '../../components/Videos/VideoFilters';
import { APP_DESCRIPTION, APP_NAME, KEYWORDS } from '../../constants';
import { useSidebar, useVideoFilterFields, useVideos } from '../../hooks';
import { getStaticProps } from '../../utils/serverTranslatedResources';

const Videos = () => {
  const { t } = useTranslation();
  const { handleCloseSidebar, handleOpenSidebar, open } = useSidebar();
  const { videos } = useVideos();
  const {
    fields, 
    handleChangeCategories,
    handleChangeInfluencers,
    handleChangeWheels,
    handleResetFilters 
  } = useVideoFilterFields();

  const title = t('videos');
  const pageTitle = `${ title } - ${ APP_NAME }`;
  // TODO: Add a description for videos page
  const pageDescription = APP_DESCRIPTION;
  const keywords = ['videos', ...KEYWORDS];

  return (
    <>
      <Head>
        <title>{ pageTitle }</title>
        <meta name="description" content={ pageDescription } />

        <meta name="keywords" content={ keywords.join(', ') } />

        <meta property="og:type" content="website" />
        <meta property="og:title" content={ pageTitle } />
        <meta property="og:description" content={ pageDescription } />
        <meta property="og:image" content={ require('/public/assets/ogImage.png').default?.src } />
        <meta property="og:image:alt" content={ t('appLogo-label', { appName: APP_NAME }) } />
      </Head>

      <LeftSidebarLayout
        handleCloseSidebar={ handleCloseSidebar }
        handleOpenSidebar={ handleOpenSidebar }
        open={ open }
        sidebar={ (
          <>
            <VideoFilters
              fields={ fields }
              handleResetFilters={ handleResetFilters }
            />
          </>
        ) }
      >
        <Container>
          <Typography variant="h4" component="h1" sx={ { mb: { sm: 3 } } }>
            { title }
          </Typography>

          <ButtonGroup sx={ { display: { xs: 'flex', sm: 'none' }, flex: 1, justifyContent: 'flex-end' } }>
            <Button onClick={ handleOpenSidebar } startIcon={ <Icon>filter_list</Icon> }>
              { t('filters-title') }
            </Button>
          </ButtonGroup>
        </Container>

        <Box sx={ { alignItems: 'center', display: 'flex', flexDirection: 'column', pb: 1 } }>
          <Box sx={ { width: '100%', pr: 2, pb: 2, textAlign: 'center', m: '0 auto' } }>
            { videos.map(video => (
              <VideoCard
                key={ video.url }
                handleChangeCategories={ handleChangeCategories }
                handleChangeInfluencers={ handleChangeInfluencers }
                handleChangeWheels={ handleChangeWheels }
                video={ video }
              />
            )) }
          </Box>
        </Box>
      </LeftSidebarLayout>

    </>
  );
};

export default Videos;

export { getStaticProps };