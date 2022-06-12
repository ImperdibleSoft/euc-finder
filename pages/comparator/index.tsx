import { Box, Button, ButtonGroup, Container } from '@mui/material';
import Head from 'next/head';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import LayoutWithSidebar from '../../components/Layouts/LayoutWithSidebar';
import CompareCharts from '../../components/Screens/CompareView/CompareCharts';
import CompareSettings from '../../components/Screens/CompareView/CompareSettings';
import CompareTable from '../../components/Screens/CompareView/CompareTable';
import EmptyCase from '../../components/Screens/CompareView/EmptyCase';
import WheelSelector from '../../components/WheelSelector';
import { APP_DESCRIPTION, APP_NAME, KEYWORDS } from '../../constants';
import {
  useBreakpoints,
  useComparatorTranslations,
  useCompareActions,
  useComparedWheels,
  useSettings
} from '../../hooks';
import { getBrands, getMaxCurrentAllowed, getMeasureUnits, getTableViewSpecs, getWheels } from '../../store/selectors';
import { TranslationFile, WheelId } from '../../types';
import { getTranslationsFromFiles, StaticProps } from '../../utils-server';
import { getFirstWheelPicture } from '../../utils-server/wheelFirstPicture';

interface Props {
  pictures: Record<WheelId, string>;
}

const CompareWheels: React.FC<Props> = ({ pictures }) => {
  const { t } = useComparatorTranslations();
  const [openSettings, setOpenSettings] = useState(false);
  const {
    canCompareMoreWheels,
    handleAddToComparision,
    handleRemoveFromComparision,
    handleResetComparision
  } = useCompareActions();
  const { sm } = useBreakpoints();
  const { activePreset, handleChangePreset, specWeightsFields } = useSettings();
  const brands = useSelector(getBrands);
  const specs = useSelector(getTableViewSpecs).filter(k => k !== 'name');
  const measureUnits = useSelector(getMeasureUnits);
  const maxCurrentAllowed = useSelector(getMaxCurrentAllowed);
  const wheels = useSelector(getWheels);
  const { minMaxScores, specWeights, wheelScores, wheels: comparedWheels } = useComparedWheels();

  const renderWheelDropdown = () => {
    const handleChange = canCompareMoreWheels()
      ? (wheelId: WheelId) => {
        handleAddToComparision(wheelId);
      }
      : undefined;

    if (!handleChange) {
      return null;
    }

    return (
      <WheelSelector
        brands={ brands }
        onChange={ handleChange }
        placeholder={ t('addWheel-label') }
        wheels={ wheels }
      />
    );
  };

  const handleOpenSettings = () => {
    setOpenSettings(true);
  };

  const handleCloseSettings = () => {
    setOpenSettings(false);
  };

  const pageTitle = `${ t('compare-title') } - ${ APP_NAME }`;
  const pageDescription = APP_DESCRIPTION;

  return (
    <>
      <Head>
        <title>{ pageTitle }</title>
        <meta name="description" content={ pageDescription } />

        <meta name="keywords" content={ KEYWORDS.join(', ') } />

        <meta property="og:type" content="website" />
        <meta property="og:title" content={ pageTitle } />
        <meta property="og:description" content={ pageDescription } />
        <meta property="og:image" content={ require('/public/assets/ogImage.png').default?.src } />
        <meta property="og:image:alt" content={ t('appLogo-label', { appName: APP_NAME }) } />
      </Head>

      <LayoutWithSidebar
        handleCloseSidebar={ handleCloseSettings }
        handleOpenSidebar={ handleOpenSettings }
        open={ openSettings }
        sidebar={ (
          <CompareSettings
            activePreset={ activePreset }
            handleChangePreset={ handleChangePreset }
            fields={ specWeightsFields }
          />
        ) }
      >
        <Container>
          <Box sx={ { alignItems: 'center', display: 'flex', justifyContent: 'flex-end', pb: 2 } }>
            <ButtonGroup>
              { !sm && (
                <Button onClick={ handleOpenSettings } variant="outlined">
                  { t('settings-btn') }
                </Button>
              ) }

              <Button
                color="error"
                onClick={ handleResetComparision }
                variant="outlined"
              >
                { t('reset-btn') }
              </Button>
            </ButtonGroup>
          </Box>

          { renderWheelDropdown() }

          { comparedWheels.length > 0 && (
            <>
              <CompareTable
                brands={ brands }
                handleRemoveFromComparision={ handleRemoveFromComparision }
                maxCurrentAllowed={ maxCurrentAllowed }
                measureUnits={ measureUnits }
                minMaxScores={ minMaxScores }
                specWeights={ specWeights }
                specs={ specs }
                wheelPictures={ pictures }
                wheelScores={ wheelScores }
                wheels={ comparedWheels }
              />

              <CompareCharts
                measureUnits={ measureUnits }
                minMaxScores={ minMaxScores }
                wheels={ comparedWheels }
                wheelScores={ wheelScores }
              />
            </>
          ) }

          { comparedWheels.length <= 0 && (
            <EmptyCase>
              { renderWheelDropdown() }
            </EmptyCase>
          ) }
        </Container>
      </LayoutWithSidebar>
    </>
  );
};

export default CompareWheels;

export const getStaticProps = async (staticProps: StaticProps) => {
  const getInnerStaticProps = getTranslationsFromFiles([TranslationFile.comparator, TranslationFile.settings]);
  const pictures = getFirstWheelPicture();

  const value = await getInnerStaticProps(staticProps);
  return {
    ...value,
    props: {
      ...value.props,
      pictures
    }
  };
};
