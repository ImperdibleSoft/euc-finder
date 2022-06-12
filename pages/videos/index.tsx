import { Box, Button, ButtonGroup, Icon, Pagination, Typography } from '@mui/material';
import Head from 'next/head';
import React from 'react';
import { useDispatch } from 'react-redux';
import LayoutWithSidebar from '../../components/Layouts/LayoutWithSidebar';
import EmptyCase from '../../components/Screens/Videos/EmptyCase';
import VideoFilters from '../../components/Screens/Videos/VideoFilters';
import VideosCarousel from '../../components/Screens/Videos/VideosCarousel';
import { APP_DESCRIPTION, APP_NAME, KEYWORDS } from '../../constants';
import { commonNs, useSidebar, useVideoFilterFields, useVideos, useVideosTranslations } from '../../hooks';
import { paginateVideos } from '../../store/actions';
import { PaginateVideosAction } from '../../store/types';
import { TranslationFile } from '../../types';
import { getTranslationsFromFiles } from '../../utils-server';

// eslint-disable-next-line max-lines-per-function
const Videos: React.FC = () => {
  const { t } = useVideosTranslations();
  const dispatch = useDispatch();
  const {
    loaded,
    promoted,
    unwatched,
    watched,
    paginationSize
  } = useVideos();

  const { handleCloseSidebar, handleOpenSidebar, open } = useSidebar();
  const {
    fields, 
    handleChangeCategories,
    handleChangeInfluencers,
    handleChangeWheels,
    handleResetFilters 
  } = useVideoFilterFields();

  const handlePaginate = (event: unknown, page: number, type: PaginateVideosAction['payload']['type']) => {
    const newOffset = (page - 1) * paginationSize;
    dispatch(paginateVideos(type, newOffset));
  };

  const title = t('videos-title');
  const pageTitle = `${ title } - ${ APP_NAME }`;
  // TODO: Add a description for videos page
  const pageDescription = APP_DESCRIPTION;
  const keywords = ['videos', ...KEYWORDS];

  const entityName = t('videos', commonNs);

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

      <LayoutWithSidebar
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
        <ButtonGroup sx={ { display: { xs: 'flex', sm: 'none' }, flex: 1, justifyContent: 'flex-end', px: 2 } }>
          <Button onClick={ handleOpenSidebar } startIcon={ <Icon>filter_list</Icon> }>
            { t('filters-title') }
          </Button>
        </ButtonGroup>

        { promoted.videos.length > 0 && (
          <>
            <Box sx={ { mt: 3, px: 2 } }>
              <Typography variant="h4" component="h1" sx={ { mb: { sm: 3 } } }>
                { t('promotedVideos-title') }
              </Typography>
            </Box>

            <VideosCarousel
              count={ promoted.pagination.total }
              entityName={ entityName }
              handleChangeCategories={ handleChangeCategories }
              handleChangeInfluencers={ handleChangeInfluencers }
              handleChangeWheels={ handleChangeWheels }
              skeleton={ !loaded }
              videos={ promoted.videos }
            />

            <Box sx={ { alignItems: 'center', display: 'flex', flexDirection: 'column', pb: 1 } }>
              <Pagination
                color="secondary"
                count={ Math.ceil(promoted.pagination.total / paginationSize) }
                hidden={ promoted.pagination.count >= promoted.pagination.total }
                hideNextButton={
                  (promoted.pagination.promotedOffset + promoted.pagination.count) >= promoted.pagination.total
                }
                hidePrevButton={ promoted.pagination.promotedOffset <= 0 }
                onChange={ (e, p) => { handlePaginate(e, p, 'promoted'); } }
                page={
                  Math.ceil((promoted.pagination.promotedOffset + promoted.pagination.count) / paginationSize)
                }
              />
            </Box>
          </>
        ) }

        { unwatched.videos.length > 0 && (
          <>
            <Box sx={ { mt: 3, px: 2 } }>
              <Typography variant="h4" component="h1" sx={ { mb: { sm: 3 } } }>
                { t('newVideos-title') }
              </Typography>
            </Box>

            <VideosCarousel
              count={ unwatched.pagination.total }
              entityName={ entityName }
              handleChangeCategories={ handleChangeCategories }
              handleChangeInfluencers={ handleChangeInfluencers }
              handleChangeWheels={ handleChangeWheels }
              skeleton={ !loaded }
              videos={ unwatched.videos }
            />

            <Box sx={ { alignItems: 'center', display: 'flex', flexDirection: 'column', pb: 1 } }>
              <Pagination
                color="secondary"
                count={ Math.ceil(unwatched.pagination.total / paginationSize) }
                hidden={ unwatched.pagination.count >= unwatched.pagination.total }
                hideNextButton={
                  (unwatched.pagination.unwatchedOffset + unwatched.pagination.count) >= unwatched.pagination.total
                }
                hidePrevButton={ unwatched.pagination.unwatchedOffset <= 0 }
                onChange={ (e, p) => { handlePaginate(e, p, 'unwatched'); } }
                page={ Math.ceil((unwatched.pagination.unwatchedOffset + unwatched.pagination.count) / paginationSize) }
              />
            </Box>
          </>
        ) }
        
        { watched.videos.length > 0 && (
          <>
            <Box sx={ { mt: 3, px: 2 } }>
              <Typography variant="h4" component="h1" sx={ { mb: { sm: 3 } } }>
                { t('watchedVideos-title') }
              </Typography>
            </Box>

            <VideosCarousel
              count={ watched.pagination.total }
              entityName={ entityName }
              className="watchedVideos"
              handleChangeCategories={ handleChangeCategories }
              handleChangeInfluencers={ handleChangeInfluencers }
              handleChangeWheels={ handleChangeWheels }
              skeleton={ !loaded }
              videos={ watched.videos }
            />

            <Box sx={ { alignItems: 'center', display: 'flex', flexDirection: 'column', pb: 1 } }>
              <Pagination
                color="secondary"
                count={ Math.ceil(watched.pagination.total / paginationSize) }
                hidden={ watched.pagination.count >= watched.pagination.total }
                hideNextButton={
                  (watched.pagination.watchedOffset + watched.pagination.count) >= watched.pagination.total
                }
                hidePrevButton={ watched.pagination.watchedOffset <= 0 }
                onChange={ (e, p) => { handlePaginate(e, p, 'watched'); } }
                page={ Math.ceil((watched.pagination.watchedOffset + watched.pagination.count) / paginationSize) }
              />
            </Box>
          </>
        ) }

        { (!promoted.videos.length && !unwatched.videos.length && !watched.videos.length) && (
          <EmptyCase
            handleOpenFilters={ handleOpenSidebar }
            handleResetFilters={ handleResetFilters }
          />
        ) }
      </LayoutWithSidebar>
    </>
  );
};

export default Videos;

export const getStaticProps = getTranslationsFromFiles([TranslationFile.videos]);
