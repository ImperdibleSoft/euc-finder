import { Box, Button, ButtonGroup } from '@mui/material';
import Head from 'next/head';
import React from 'react';
import { useSelector } from 'react-redux';
import Dropdown, { DropdownItem } from '../../components/Form/Dropdown';
import SimpleLayout from '../../components/Layouts/SimpleLayout';
import CompareCharts from '../../components/Screens/CompareView/CompareCharts';
import CompareTable from '../../components/Screens/CompareView/CompareTable';
import EmptyCase from '../../components/Screens/CompareView/EmptyCase';
import { APP_DESCRIPTION, APP_NAME, KEYWORDS } from '../../constants';
import { useComparatorTranslations, useCompareActions, useComparedWheels } from '../../hooks';
import { getBrands, getMaxCurrentAllowed, getMeasureUnits, getTableViewSpecs, getWheels } from '../../store/selectors';
import { TranslationFile, WheelId } from '../../types';
import { getTranslationsFromFiles } from '../../utils-server';

interface Props {
  pictures: Record<WheelId, string>;
}

const CompareWheels: React.FC<Props> = ({ pictures }) => {
  const { t } = useComparatorTranslations();
  const {
    canCompareMoreWheels,
    handleAddToComparision,
    handleOpenSettings,
    handleRemoveFromComparision,
    handleResetComparision
  } = useCompareActions();
  const brands = useSelector(getBrands);
  const specs = useSelector(getTableViewSpecs).filter(k => k !== 'name');
  const measureUnits = useSelector(getMeasureUnits);
  const maxCurrentAllowed = useSelector(getMaxCurrentAllowed);
  const addWheelOptions = useSelector(getWheels)
    .map((w): DropdownItem => ({
      label: w.name,
      value: w.id
    }));
  const { minMaxScores, specWeights, wheelScores, wheels: comparedWheels } = useComparedWheels();

  const renderWheelDropdown = (name: string) => {
    const handleChange = canCompareMoreWheels()
      ? (event: React.ChangeEvent<HTMLSelectElement>) => {
        const wheelId = event.target.value as WheelId;
        handleAddToComparision(wheelId);
      }
      : undefined;

    if (!handleChange) {
      return null;
    }

    return (
      <Dropdown
        name={ name }
        onChange={ handleChange }
        options={ addWheelOptions }
        label={ t('addWheel-label') }
        fullWidth={ false }
        value=""
      />
    );
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

      <SimpleLayout>
        <Box sx={ { alignItems: 'center', display: 'flex', justifyContent: 'flex-end', pb: 2 } }>
          <ButtonGroup>
            <Button
              onClick={ handleOpenSettings }
              variant="outlined"
            >
              { t('settings-btn') }
            </Button>

            <Button
              color="error"
              onClick={ handleResetComparision }
              variant="outlined"
            >
              { t('reset-btn') }
            </Button>
          </ButtonGroup>
        </Box>

        { renderWheelDropdown('addWheel') }

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
              wheels={ comparedWheels }
            />
          </>
        ) }

        { comparedWheels.length <= 0 && (
          <EmptyCase>
            { renderWheelDropdown('addWheel-emptyCase') }
          </EmptyCase>
        ) }
      </SimpleLayout>
    </>
  );
};

export default CompareWheels;

export const getStaticProps = getTranslationsFromFiles([TranslationFile.comparator], 'first');
