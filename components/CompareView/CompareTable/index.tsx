import { Button, TableCell, Theme } from '@mui/material';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { wheelFeatureFormatters } from '../../../constants';
import { useBreakpoints } from '../../../hooks';
import { MeasureUnits } from '../../../store/types';
import { Brands, MinMaxScores, ScoreCollection, Wheel, WheelId, WheelScoreProps } from '../../../types';
import { isCompetingValue, isTopValue } from '../../../utils/comparing';
import Table, { TableBody, TableHead, TableHeading, TableRow } from '../../Table';

const getBackground = (theme: Theme, index: number, highlighted: boolean) => {
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

interface Props {
  brands: Brands;
  handleRemoveFromComparision: (wheelId: WheelId) => void;
  measureUnits: MeasureUnits;
  minMaxScores: MinMaxScores;
  specs: (keyof Wheel)[];
  wheelScores: ScoreCollection;
  wheels: Wheel[];
}

const CompareTable: React.FC<Props> = ({
  brands,
  handleRemoveFromComparision,
  measureUnits,
  minMaxScores,
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
        { (['score', 'brandId', ...specs] as WheelScoreProps[]).map(key => (
          <TableRow key={ key }>
            <TableCell
              sx={ { fontWeight: 700 } }
              width={ colsWidth }
            >
              { t(key) }
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
                    bgcolor: (theme) => getBackground(theme, index, highlighted),
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
        )) }

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