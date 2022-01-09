import { Box, Button, ButtonGroup } from '@mui/material';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import CompareTable from '../../components/CompareView/CompareTable';
import EmptyCase from '../../components/CompareView/EmptyCase';
import Dropdown, { DropdownItem } from '../../components/Form/Dropdown';
import SimpleLayout from '../../components/Layouts/SimpleLayout';
import { useCompareActions, useComparedWheels } from '../../hooks';
import { getBrands, getMeasureUnits, getTableViewSpecs, getWheels } from '../../store/selectors';
import { WheelId } from '../../types';
import { getStaticProps } from '../../utils-server';

const MAX_WHEELS = 5;

const CompareWheels: React.FC = () => {
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
  const { minMaxScores, wheelScores, wheels } = useComparedWheels();

  const renderWheelDropdown = (name: string) => {
    if (wheels.length >= MAX_WHEELS) {
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

  return (
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

      { wheels.length > 0 && (
        <CompareTable
          brands={ brands }
          handleRemoveFromComparision={ handleRemoveFromComparision }
          measureUnits={ measureUnits }
          minMaxScores={ minMaxScores }
          specs={ specs }
          wheelScores={ wheelScores }
          wheels={ wheels }
        />
      ) }

      { wheels.length <= 0 && (
        <EmptyCase>
          { renderWheelDropdown('addWheel-emptyCase') }
        </EmptyCase>
      ) }
    </SimpleLayout>
  );
};

export default CompareWheels;

export { getStaticProps };