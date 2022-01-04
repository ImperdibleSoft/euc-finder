import { Grid } from '@mui/material';
import { useRouter } from 'next/dist/client/router';
import Head from 'next/head';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import Apps from '../../components/Apps';
import EmptyCase from '../../components/EmptyCase';
import SimpleLayout from '../../components/Layouts/SimpleLayout';
import AdditionalPurchaseLinks from '../../components/WheelDetails/AdditionalPurchaseLinks';
import AdditionalSpecs from '../../components/WheelDetails/AdditionalSpecs';
import Header from '../../components/WheelDetails/Header';
import HighlightedSpecs from '../../components/WheelDetails/HighlightedSpecs';
import MainSpecs from '../../components/WheelDetails/MainSpecs';
import Pictures from '../../components/WheelDetails/Pictures';
import SponsoredPurchaseLinks from '../../components/WheelDetails/SponsoredPurchaseLinks';
import VideosCarousel from '../../components/WheelDetails/VideosCarousel';
import { APP_NAME, KEYWORDS } from '../../constants';
import {
  useEucDetail,
  useEucDetailHandlers,
  useEucDetailInformationGroups,
  useEucPurchaseLinks,
  useEucVideos
} from '../../hooks';
import { wheels } from '../../store/models/data';
import { getBrands } from '../../store/selectors';
import { WheelId } from '../../types';
import { getStaticProps as genericStaticProps, getWheelPictures, StaticProps } from '../../utils-server';

interface Props {
  pictures: string[];
}

const EucDetail: React.FC<Props> = ({ pictures }) => {
  const router = useRouter();
  const id = router.query.id as WheelId;
  const { t } = useTranslation();
  const expensive = (id !== WheelId.ks16xs && id !== WheelId.v10);

  const brands = useSelector(getBrands);
  const { name, wheel } = useEucDetail(id);
  const { highlightedSpecs, mainSpecs, additionalSpecs } = useEucDetailInformationGroups();
  const { handleClosePicture, handleOpenPicture, pictureDetail } = useEucDetailHandlers();
  const { sponsoredLinks, regularLinks } = useEucPurchaseLinks(id);
  const { handleWatchMoreVideos, totalCount, videos } = useEucVideos(id);

  const pageTitle = `${ name } - ${ APP_NAME }`;
  const pageDescription = t('defaultDescription-msg');
  const newKeywords = wheel ? [brands[wheel.brandId].name, wheel.name, name]: [];
  const keywords = KEYWORDS.concat(newKeywords).join(', ');

  return (
    <>
      <Head>
        <title>{ pageTitle }</title>
        <meta name="description" content={ pageDescription } />

        <meta name="keywords" content={ keywords } />

        <meta property="og:type" content="article" />
        <meta property="og:title" content={ pageTitle } />
        <meta property="og:description" content={ pageDescription } />
        <meta property="og:image" content={ pictures[0] } />
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
              heroImage={ pictures[0] }
              wheelName={ name }
            >
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
                pictures={ pictures }
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
            </Grid>
          </>
        ) }
      </SimpleLayout>
    </>
  );
};

export async function getStaticProps(staticProps: StaticProps) {
  const { props } = await genericStaticProps(staticProps);

  const { params: { id } } = staticProps;
  const wheel = wheels.find(w => w.id === id);

  return {
    props: {
      ...props,
      pictures: wheel ? getWheelPictures(wheel.brandId, wheel.id) : []
    }
  };
}

export const getStaticPaths = async () => ({
  paths: [
    ...wheels.map(wheel => ({ params: { id: wheel.id } })),
    ...wheels.map(wheel => ({ params: { id: wheel.id }, locale: 'es' }))
  ],
  fallback:'blocking'
});

export default EucDetail;