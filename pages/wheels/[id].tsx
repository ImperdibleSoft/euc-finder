import { Grid } from '@mui/material';
import { useRouter } from 'next/dist/client/router';
import Head from 'next/head';
import React from 'react';
import { useTranslation } from 'react-i18next';
import EmptyCase from '../../components/EmptyCase';
import EucAdditionalPurchaseLinks from '../../components/EucAdditionalPurchaseLinks';
import EucDetailHeader from '../../components/EucDetailHeader';
import EucPictures from '../../components/EucPictures';
import EucSpecsAdditional from '../../components/EucSpecsAdditional';
import EucSpecsHighlighted from '../../components/EucSpecsHighlighted';
import EucSpecsMain from '../../components/EucSpecsMain';
import SimpleLayout from '../../components/Layouts/SimpleLayout';
import { APP_NAME, KEYWORDS } from '../../constants';
import { brands, wheels } from '../../context/data';
import { useEucDetail, useEucDetailHandlers, useEucDetailInformationGroups, useEucPurchaseLinks } from '../../hooks';
import { getStaticProps } from '../../utils/serverTranslatedResources';

const EucDetail: React.FC = () => {
  const router = useRouter();
  const id = router.query.id as string;
  const { t } = useTranslation();

  const { name, pictures, wheel } = useEucDetail(id);
  const { highlightedSpecs, mainSpecs, additionalSpecs } = useEucDetailInformationGroups();
  const { handleClosePicture, handleOpenPicture, pictureDetail } = useEucDetailHandlers();
  const { sponsoredLinks, regularLinks } = useEucPurchaseLinks(id);

  const pageTitle = `${ name } - ${ APP_NAME }`;
  const newKeywords = wheel ? [brands[wheel.brandId].name, wheel.name, name]: [];
  const keywords = KEYWORDS.concat(newKeywords).join(', ');

  return (
    <>
      <Head>
        <title>{ pageTitle }</title>

        <meta name="keywords" content={ keywords } />

        <meta property="og:type" content="article" />
        <meta property="og:title" content={ pageTitle } />
        <meta property="og:image" content={ pictures?.[0] } />
      </Head>

      <SimpleLayout>
        { !wheel && (
          <EmptyCase />
        ) }

        { !!wheel && (
          <>
            <EucDetailHeader
              heroImage={ pictures[0] }
              purchaseLinks={ sponsoredLinks }
              wheelName={ name }
            >
              { t('defaultDescription-msg') }
            </EucDetailHeader>

            <EucSpecsHighlighted specs={ highlightedSpecs } wheel={ wheel } />

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

              <EucAdditionalPurchaseLinks items={ regularLinks } />
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