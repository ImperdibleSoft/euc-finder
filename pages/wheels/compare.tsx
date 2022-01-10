import { Box, Button, ButtonGroup } from '@mui/material';
import Head from 'next/head';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import CompareTable from '../../components/CompareView/CompareTable';
import EmptyCase from '../../components/CompareView/EmptyCase';
import Dropdown, { DropdownItem } from '../../components/Form/Dropdown';
import SimpleLayout from '../../components/Layouts/SimpleLayout';
import { APP_DESCRIPTION, APP_NAME, KEYWORDS } from '../../constants';
import { useCompareActions, useComparedWheels } from '../../hooks';
import { wheels } from '../../store/models/data';
import { getBrands, getMeasureUnits, getTableViewSpecs, getWheels } from '../../store/selectors';
import { WheelId } from '../../types';
import { getStaticProps as genericStaticProps, getWheelPictures, StaticProps } from '../../utils-server';

const MAX_WHEELS = 5;

interface Props {
  pictures: Record<WheelId, string>;
}

const CompareWheels: React.FC<Props> = ({ pictures }) => {
  const { t } = useTranslation();
  const {
    handleAddToComparision,
    handleOpenSettings,
    handleRemoveFromComparision,
    handleResetComparision
  } = useCompareActions();
  const brands = useSelector(getBrands);
  const specs = useSelector(getTableViewSpecs).filter(k => k !== 'name');
  const measureUnits = useSelector(getMeasureUnits);
  const addWheelOptions = useSelector(getWheels)
    .map((w): DropdownItem => ({
      label: w.name,
      value: w.id
    }));
  const { minMaxScores, specWeights, wheelScores, wheels: comparedWheels } = useComparedWheels();

  const renderWheelDropdown = (name: string) => {
    if (comparedWheels.length >= MAX_WHEELS) {
      return null;
    }

    const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
      const wheelId = event.target.value as WheelId;
      handleAddToComparision(wheelId);
    };

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
        { renderWheelDropdown('addWheel') }

        <Box sx={ { alignItems: 'center', display: 'flex', justifyContent: 'flex-end', pb: 2 } }>
          <ButtonGroup>
            <Button
              onClick={ handleOpenSettings }
              variant="outlined"
            >
              { t('settings-title') }
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

        { comparedWheels.length > 0 && (
          <CompareTable
            brands={ brands }
            handleRemoveFromComparision={ handleRemoveFromComparision }
            measureUnits={ measureUnits }
            minMaxScores={ minMaxScores }
            specWeights={ specWeights }
            specs={ specs }
            wheelPictures={ pictures }
            wheelScores={ wheelScores }
            wheels={ comparedWheels }
          />
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

export async function getStaticProps(staticProps: StaticProps) {
  const { props } = await genericStaticProps(staticProps);

  const pictures = wheels.reduce((wheelPictures, wheel) => {
    if (!wheelPictures[wheel.id]) {
      wheelPictures[wheel.id] = getWheelPictures(wheel.brandId, wheel.id)[0];
    }

    return wheelPictures;
  }, {} as Record<WheelId, string>);

  return {
    props: {
      ...props,
      pictures
    }
  };
}