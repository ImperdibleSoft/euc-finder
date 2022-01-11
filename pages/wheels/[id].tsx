import { Box, Button, ButtonGroup, Grid } from '@mui/material';
import { GetStaticPaths } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import eucFinderApi from '../../apis/eucfinder';
import Apps from '../../components/Apps';
import FacebookComments from '../../components/Facebook/FacebookComments';
import FacebookLikeButton from '../../components/Facebook/FacebookLikeButton';
import SimpleLayout from '../../components/Layouts/SimpleLayout';
import AdditionalPurchaseLinks from '../../components/WheelDetails/AdditionalPurchaseLinks';
import AdditionalSpecs from '../../components/WheelDetails/AdditionalSpecs';
import EmptyCase from '../../components/WheelDetails/EmptyCase';
import Header from '../../components/WheelDetails/Header';
import HighlightedSpecs from '../../components/WheelDetails/HighlightedSpecs';
import MainSpecs from '../../components/WheelDetails/MainSpecs';
import Pictures from '../../components/WheelDetails/Pictures';
import SponsoredPurchaseLinks from '../../components/WheelDetails/SponsoredPurchaseLinks';
import VideosCarousel from '../../components/WheelDetails/VideosCarousel';
import { APP_NAME, KEYWORDS } from '../../constants';
import {
  useCompareActions,
  useEucDetail,
  useEucDetailHandlers,
  useEucDetailInformationGroups,
  useEucPurchaseLinks,
  useEucVideos
} from '../../hooks';
import { getBrands } from '../../store/selectors';
import { WheelId } from '../../types';
import { cleanWheelId } from '../../utils';
import { getStaticProps as genericStaticProps, getWheelPictures, StaticProps } from '../../utils-server';

interface Props {
  pictures: Record<WheelId, string[]>;
}

const EucDetail: React.FC<Props> = ({ pictures }) => {
  const router = useRouter();
  const id = router.query.id as WheelId;
  const { t } = useTranslation();
  const expensive = (id !== WheelId.ks16xs && id !== WheelId.v10);
  const wheelPictures = pictures[cleanWheelId(id)];

  const brands = useSelector(getBrands);
  const { name, wheel } = useEucDetail(id);
  const { highlightedSpecs, mainSpecs, additionalSpecs } = useEucDetailInformationGroups();
  const { handleClosePicture, handleOpenPicture, pictureDetail } = useEucDetailHandlers();
  const { sponsoredLinks, regularLinks } = useEucPurchaseLinks(id);
  const { handleWatchMoreVideos, totalCount, videos } = useEucVideos(id);
  const { canCompareMoreWheels, handleAddToComparision } = useCompareActions();

  const pageTitle = `${ name } - ${ APP_NAME }`;
  const pageDescription = t('defaultDescription-msg');
  const newKeywords = wheel ? [brands[wheel.brandId].name, wheel.name, name]: [];
  const keywords = KEYWORDS.concat(newKeywords).join(', ');


  const handleCompare = canCompareMoreWheels()
    ? () => {
      handleAddToComparision(id);
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
        <meta property="og:image:alt" content={ t('wheelPicture-msg', { wheelName: wheel?.name }) } />
      </Head>

      <SimpleLayout>
        { !wheel && (
          <EmptyCase />
        ) }

        { !!wheel && (
          <>
            <Header
              brandId={ wheel.brandId }
              heroImage={ wheelPictures[0] }
              wheelName={ name }
            >
              <FacebookLikeButton />

              { !!handleCompare && (
                <Box sx={ { mb: 1 } }>
                  <ButtonGroup variant="contained">
                    <Button color="primary" onClick={ handleCompare }>
                      { t('compare-label') }
                    </Button>
                  </ButtonGroup>
                </Box>
              ) }
              
              { pageDescription }
            </Header>

            <HighlightedSpecs specs={ highlightedSpecs } wheel={ wheel } />

            <SponsoredPurchaseLinks
              expensive={ expensive }
              items={ sponsoredLinks }
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
                <Apps />
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

export async function getStaticProps(staticProps: StaticProps) {
  const { props } = await genericStaticProps(staticProps);
  const pictures = getWheelPictures();

  return {
    props: {
      ...props,
      pictures
    }
  };
}

export const getStaticPaths: GetStaticPaths = async () => {
  const { wheels } = await eucFinderApi.config.getInitialData();

  return {
    paths: [
      ...wheels.map(wheel => ({ params: { id: wheel.id } })),
      ...wheels.map(wheel => ({ params: { id: wheel.id }, locale: 'es' }))
    ],
    fallback:'blocking'
  };
};

export default EucDetail;