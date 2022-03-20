import { Box, Button, ButtonGroup, Grid } from '@mui/material';
import { GetStaticPaths } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import eucFinderApi from '../../apis/eucfinder';
import SimpleLayout from '../../components/Layouts/SimpleLayout';
import AdditionalPurchaseLinks from '../../components/Screens/WheelDetails/AdditionalPurchaseLinks';
import AdditionalSpecs from '../../components/Screens/WheelDetails/AdditionalSpecs';
import Apps from '../../components/Screens/WheelDetails/Apps';
import EmptyCase from '../../components/Screens/WheelDetails/EmptyCase';
import FacebookComments from '../../components/Screens/WheelDetails/Facebook/FacebookComments';
import FacebookLikeButton from '../../components/Screens/WheelDetails/Facebook/FacebookLikeButton';
import Header from '../../components/Screens/WheelDetails/Header';
import HighlightedSpecs from '../../components/Screens/WheelDetails/HighlightedSpecs';
import MainSpecs from '../../components/Screens/WheelDetails/MainSpecs';
import Pictures from '../../components/Screens/WheelDetails/Pictures';
import SponsoredPurchaseLinks from '../../components/Screens/WheelDetails/SponsoredPurchaseLinks';
import VideosCarousel from '../../components/Screens/WheelDetails/VideosCarousel';
import { APP_NAME, KEYWORDS } from '../../constants';
import {
  commonNs,
  useCompareActions,
  useEucDetail,
  useEucDetailHandlers,
  useEucDetailInformationGroups,
  useEucPurchaseLinks,
  useEucVideos,
  useWheelsDetailsTranslations
} from '../../hooks';
import { getBrands } from '../../store/selectors';
import { TranslationFile, WheelId } from '../../types';
import { cleanWheelId, getBrandInfo } from '../../utils';
import { getTranslationsFromFiles } from '../../utils-server';

interface Props {
  pictures: Record<WheelId, string[]>;
}

const EucDetail: React.FC<Props> = ({ pictures }) => {
  const router = useRouter();
  const id = router.query.id as WheelId;
  const { t } = useWheelsDetailsTranslations();
  const expensive = (id !== WheelId.ks16xs && id !== WheelId.v10);
  const wheelPictures = pictures[cleanWheelId(id)];

  useEffect(() => {
    // eslint-disable-next-line no-console
    console.log({ t, test: t('defaultDescription-msg') });

  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const { name, wheel } = useEucDetail(id);
  const { highlightedSpecs, mainSpecs, additionalSpecs } = useEucDetailInformationGroups();
  const { handleClosePicture, handleOpenPicture, pictureDetail } = useEucDetailHandlers();
  const { promotedLinks, regularLinks } = useEucPurchaseLinks(id);
  const { handleWatchMoreVideos, totalCount, videos } = useEucVideos(id);
  const { canCompareMoreWheels, handleAddToComparision } = useCompareActions();

  const brands = useSelector(getBrands);
  const brand = wheel ? getBrandInfo(wheel.brandId, brands) : undefined;

  const pageTitle = `${ name } - ${ APP_NAME }`;
  const pageDescription = t('defaultDescription-msg');

  const brandKeywords = brand ? [brand.name] : [];
  const newKeywords = wheel ? [...brandKeywords, wheel.name, name] : [];
  const keywords = KEYWORDS.concat(newKeywords).join(', ');

  const handleCompare = canCompareMoreWheels()
    ? () => {
      handleAddToComparision(id, true);
    }
    : undefined;

  return (
    <>
      <Head>
        <title>{ pageTitle }</title>
        <meta name="description" content={ pageDescription } />

        <meta name="keywords" content={ keywords } />

        <meta property="og:type" content="article" />
        <meta property="og:title" content={ pageTitle } />
        <meta property="og:description" content={ pageDescription } />
        <meta property="og:image" content={ wheelPictures[0] } />
        <meta
          property="og:image:alt"
          content={ t('wheelPicture-msg', { ...commonNs, wheelName: wheel?.name }) }
        />
      </Head>

      <SimpleLayout>
        { !wheel && (
          <EmptyCase />
        ) }

        { !!wheel && (
          <>
            <Header
              availability={ wheel.availability }
              brandId={ wheel.brandId }
              heroImage={ wheelPictures[0] }
              wheelName={ name }
            >
              <FacebookLikeButton />

              { !!handleCompare && (
                <Box sx={ { mb: 1 } }>
                  <ButtonGroup variant="contained">
                    <Button color="primary" onClick={ handleCompare }>
                      { t('compare-btn') }
                    </Button>
                  </ButtonGroup>
                </Box>
              ) }
              
              { pageDescription }
            </Header>

            <HighlightedSpecs specs={ highlightedSpecs } wheel={ wheel } />

            <SponsoredPurchaseLinks
              expensive={ expensive }
              items={ promotedLinks }
              large
              wheel={ id }
            />

            <Grid container spacing={ 2 }>
              <MainSpecs specs={ mainSpecs } wheel={ wheel } />

              <Pictures
                onClick={ handleOpenPicture }
                onClose={ handleClosePicture }
                pictureDetail={ pictureDetail }
                pictures={ wheelPictures }
                wheelName={ name }
              />

              { totalCount > 0 && (
                <VideosCarousel
                  handleWatchMoreVideos={ handleWatchMoreVideos }
                  totalCount={ totalCount }
                  videos={ videos }
                />
              ) }

              <Grid item xs={ 12 }>
                <Apps wheel={ wheel } />
              </Grid>
              
              <AdditionalSpecs specs={ additionalSpecs } wheel={ wheel } />

              <AdditionalPurchaseLinks
                expensive={ expensive }
                items={ regularLinks }
                wheel={ id }
              />

              <Grid item xs={ 12 }>
                <FacebookComments />
              </Grid>
            </Grid>

          </>
        ) }
      </SimpleLayout>
    </>
  );
};

export const getStaticProps = getTranslationsFromFiles([TranslationFile.wheelDetails], 'all');

export const getStaticPaths: GetStaticPaths = async () => {
  const { wheels } = await eucFinderApi.data.getInitialData();

  return {
    paths: [
      ...wheels.map(wheel => ({ params: { id: wheel.id } })),
      ...wheels.map(wheel => ({ params: { id: wheel.id }, locale: 'es' }))
    ],
    fallback:'blocking'
  };
};

export default EucDetail;
