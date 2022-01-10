/* eslint-disable max-lines */
import { Box, Button, Icon, TableCell, Theme, Tooltip } from '@mui/material';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { wheelFeatureFormatters } from '../../../constants';
import { useBreakpoints } from '../../../hooks';
import { MeasureUnits, SpecWeights } from '../../../store/types';
import { Brands, MinMaxScores, ScoreCollection, Wheel, WheelId, WheelScoreProps } from '../../../types';
import { isCompetingValue, isTopValue } from '../../../utils/comparing';
import Table, { TableBody, TableHead, TableHeading, TableRow } from '../../Table';

const getRowBackground = (theme: Theme, key: WheelScoreProps, specWeights: SpecWeights) => {
  // @ts-ignore
  if (key !== 'score' && !specWeights[key]) {
    return `${ theme.palette.grey['500'] }22`;
  }
  
  return undefined;
};

const getCellBackground = (theme: Theme, index: number, highlighted: boolean) => {
  const bestBg = 11;
  const highlightedBg = 44;

  if (index === 0 && highlighted) {
    return `${ theme.palette.success.light }${ bestBg + highlightedBg }`;
  }

  if (index === 0) {
    return `${ theme.palette.success.light }${ bestBg }`;
  }

  if (highlighted) {
    return `${ theme.palette.success.light }${ highlightedBg }`;
  }

  return undefined;
};

const getMinimumColums = (sm: boolean, md: boolean) => {
  if (md) {
    return 5;
  }

  if (sm) {
    return 3;
  }

  return 0;
};

const getSortedKeys = (specs: (keyof Wheel)[], specWeights: SpecWeights): WheelScoreProps[] => {
  const sortedSpecs = [
    'score',
    'brandId',
    ...specs.sort((a, b) => {
      const aWeight = specWeights[a as keyof SpecWeights] ?? 0;
      const bWeight = specWeights[b as keyof SpecWeights] ?? 0;

      if (aWeight < bWeight) return 1;
      if (aWeight > bWeight) return -1;
      return 0;
    })
  ] as WheelScoreProps[];

  return sortedSpecs;
};

interface Props {
  brands: Brands;
  handleRemoveFromComparision: (wheelId: WheelId) => void;
  measureUnits: MeasureUnits;
  minMaxScores: MinMaxScores;
  specWeights: SpecWeights;
  specs: (keyof Wheel)[];
  wheelScores: ScoreCollection;
  wheels: Wheel[];
}

// eslint-disable-next-line max-lines-per-function
const CompareTable: React.FC<Props> = ({
  brands,
  handleRemoveFromComparision,
  measureUnits,
  minMaxScores,
  specWeights,
  specs,
  wheelScores,
  wheels
}) => {
  const { t } = useTranslation();
  const { sm, md } = useBreakpoints();
  
  const columnsCount = getMinimumColums(sm, md) - wheels.length;
  const emptyColumns = Array
    .from(Array(columnsCount >= 0 ? columnsCount : 0).keys())
    .map((val, index) => wheels.length + index + 1);
  const columns = 1 + wheels.length + emptyColumns.length;
  const colsWidth = `${ 100 / columns }%`;

  return (
    <Table>
      <TableHeading>
        <TableHead width={ colsWidth } />

        { wheels.map(({ id, name }) => (
          <TableHead
            key={ id }
            id={ 'id' }
            width={ colsWidth }
          >
            { name }
          </TableHead>
        )) }

        { emptyColumns.map(val => (
          <TableHead key={ `emptyHead-${ val }` } width={ colsWidth }>
            { t('eucs').replace(/s$/, '') } { val }
          </TableHead>
        )) }
      </TableHeading>

      <TableBody>
        { getSortedKeys(specs, specWeights).map(key => {
          const showTooltip = key !== 'score' && key !== 'brandId';
          const specWeight = specWeights[key as keyof SpecWeights] ?? 0;
          const title = t(specWeight ? `maxSpecValue-msg` : 'unusedSpec-msg', { value: specWeight });

          return (
            <TableRow key={ key } sx={ { backgroundColor: (theme) => getRowBackground(theme, key, specWeights) } }>
              <TableCell
                sx={ { fontWeight: 700 } }
                width={ colsWidth }
              >
                <Box
                  sx={ {
                    alignItems: 'center',
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between'
                  } }
                >
                  <span>
                    { t(key) }
                  </span>

                  { showTooltip && (
                    <Tooltip title={ title }>
                      <Icon>info</Icon>
                    </Tooltip>
                  ) }
                </Box>
              </TableCell>

              { wheels.map((wheel, index) => {
                // @ts-ignore
                // eslint-disable-next-line no-restricted-syntax
                const units = key in measureUnits ? measureUnits[key] : undefined;
                const formatter = key !== 'brandId' && key !== 'score' ? wheelFeatureFormatters[key] : undefined;
                const value = key !== 'brandId' && key !== 'score' ? wheel[key] : undefined;
                let formattedValue = formatter?.(value, t, units, key === 'width' ? 2 : 0) ?? value;

                const minMax = key !== 'brandId' ? minMaxScores[key] : undefined;
                const score = wheelScores[wheel.id][key];
                const highlighted = isCompetingValue(key) && isTopValue(score, minMax);

                switch (key) {
                  case 'brandId':
                    formattedValue = brands[wheel.brandId]?.name;
                    break;

                  case 'score':
                    formattedValue = score;
                    break;
                }

                return (
                  <TableCell
                    key={ `${ wheel.id }-${ key }` }
                    sx={ {
                      bgcolor: (theme) => getCellBackground(theme, index, highlighted),
                      // color: (theme) => highlighted ? theme.palette.common.white : undefined,
                      fontWeight: key === 'score' ? 700 : undefined
                    } }
                    width={ colsWidth }
                  >
                    { formattedValue }
                  </TableCell>
                );
              }
              ) }
              
              { emptyColumns.map(val => (
                <TableCell key={ `emptyCell-${ key }-${ val }` } width={ colsWidth } />
              )) }
            </TableRow>
          );
        }) }

        <TableRow>
          <TableCell width={ colsWidth }/>

          { wheels.map(wheel => (
            <TableCell key={ `${ wheel.id }-actions` } sx={ { textAlign: 'center' } }>
              <Button
                color="error"
                size="small"
                variant="outlined"
                onClick={ () => handleRemoveFromComparision(wheel.id) }
              >
                { t('remove-label') }
              </Button>
            </TableCell>
          )) }
            
          { emptyColumns.map(val => (
            <TableCell key={ `emptyCell-actions-${ val }` } width={ colsWidth } />
          )) }
        </TableRow>
      </TableBody>
    </Table>
  );
};

export default CompareTable;