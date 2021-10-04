import { Grid } from '@mui/material';
import { useRouter } from 'next/dist/client/router';
import React from 'react';
import EmptyCase from '../components/EmptyCase';
import EucAdditionalPurchaseLinks from '../components/EucAdditionalPurchaseLinks';
import EucDetailHeader from '../components/EucDetailHeader';
import EucPictures from '../components/EucPictures';
import EucSpecsAdditional from '../components/EucSpecsAdditional';
import EucSpecsHighlighted from '../components/EucSpecsHighlighted';
import EucSpecsMain from '../components/EucSpecsMain';
import SimpleLayout from '../components/Layouts/SimpleLayout';
import { wheels } from '../context/data';
import { useEucDetail, useEucDetailHandlers, useEucDetailInformationGroups, useEucPurchaseLinks } from '../hooks';

const EucDetail: React.FC = () => {
  const router = useRouter();
  const id = router.query.id as string;

  const { name, pictures, wheel } = useEucDetail(id);
  const { highlightedSpecs, mainSpecs, additionalSpecs } = useEucDetailInformationGroups();
  const { handleClosePicture, handleOpenPicture, pictureDetail } = useEucDetailHandlers();
  const { sponsoredLinks, regularLinks } = useEucPurchaseLinks(id);

  return (
    <SimpleLayout>
      { !wheel && (
        <EmptyCase />
      ) }

      { !!wheel && (
        <>
          <EucDetailHeader
            heroImage={ pictures[0] ?? 'https://smartmoveperu.com/wp-content/uploads/2021/08/34-scaled.jpg' }
            purchaseLinks={ sponsoredLinks }
            wheelName={ name }
          >
            This should be a small description about selected wheel
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
  );
};

export const getStaticProps = async () => ({ props: {} });

export const getStaticPaths = async () => ({
  paths: wheels.map(wheel => ({ params: { id: wheel.id } })),
  fallback:'blocking'
});

export default EucDetail;