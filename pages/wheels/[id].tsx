import { Grid } from '@mui/material';
import { useRouter } from 'next/dist/client/router';
import Head from 'next/head';
import React from 'react';
import { useTranslation } from 'react-i18next';
import EmptyCase from '../../components/EmptyCase';
import EucAdditionalPurchaseLinks from '../../components/EucAdditionalPurchaseLinks';
import EucDetailHeader from '../../components/EucDetailHeader';
import EucDetailPurchaseLinks from '../../components/EucDetailPurchaseLinks';
import EucPictures from '../../components/EucPictures';
import EucSpecsAdditional from '../../components/EucSpecsAdditional';
import EucSpecsHighlighted from '../../components/EucSpecsHighlighted';
import EucSpecsMain from '../../components/EucSpecsMain';
import SimpleLayout from '../../components/Layouts/SimpleLayout';
import { APP_NAME, KEYWORDS } from '../../constants';
import { brands, wheels } from '../../context/data';
import { useEucDetail, useEucDetailHandlers, useEucDetailInformationGroups, useEucPurchaseLinks } from '../../hooks';
import { WheelId } from '../../types';
import { getStaticProps } from '../../utils/serverTranslatedResources';

const EucDetail: React.FC = () => {
  const router = useRouter();
  const id = router.query.id as WheelId;
  const { t } = useTranslation();
  const expensive = (id !== WheelId.ks16xs && id !== WheelId.v10);

  const { name, pictures, wheel } = useEucDetail(id);
  const { highlightedSpecs, mainSpecs, additionalSpecs } = useEucDetailInformationGroups();
  const { handleClosePicture, handleOpenPicture, pictureDetail } = useEucDetailHandlers();
  const { sponsoredLinks, regularLinks } = useEucPurchaseLinks(id);

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
        <meta property="og:image" content={ pictures?.[0] } />
        <meta property="og:image:alt" content={ t('wheelPicture-msg', { wheelName: wheel?.name }) } />
      </Head>

      <SimpleLayout>
        { !wheel && (
          <EmptyCase />
        ) }

        { !!wheel && (
          <>
            <EucDetailHeader
              brandId={ wheel.brandId }
              heroImage={ pictures[0] }
              wheelName={ name }
            >
              { pageDescription }
            </EucDetailHeader>

            <EucSpecsHighlighted specs={ highlightedSpecs } wheel={ wheel } />

            <EucDetailPurchaseLinks
              expensive={ expensive }
              items={ sponsoredLinks }
              large
              wheel={ id }
            />

            <Grid container spacing={ 2 }>
              <EucSpecsMain specs={ mainSpecs } wheel={ wheel } />

              <EucPictures
                onClick={ handleOpenPicture }
                onClose={ handleClosePicture }
                pictureDetail={ pictureDetail }
                pictures={ pictures }
                wheelName={ name }
              />

              <EucSpecsAdditional specs={ additionalSpecs } wheel={ wheel } />

              <EucAdditionalPurchaseLinks
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

export { getStaticProps };

export const getStaticPaths = async () => ({
  paths: [
    ...wheels.map(wheel => ({ params: { id: wheel.id } })),
    ...wheels.map(wheel => ({ params: { id: wheel.id }, locale: 'es' }))
  ],
  fallback:'blocking'
});

export default EucDetail;