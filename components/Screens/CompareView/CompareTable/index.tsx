/* eslint-disable max-lines */
import { Box, Button, Icon, TableCell, Theme, Tooltip } from '@mui/material';
import Link from 'next/link';
import React from 'react';
import { wheelFeatureFormatters } from '../../../../constants';
import { EUC_FINDER_DETAILS } from '../../../../constants/clientRoutes';
import { commonNs, useBreakpoints, useComparatorTranslations } from '../../../../hooks';
import { MeasureUnits, SpecWeights } from '../../../../store/types';
import {
  Brand,
  MinMaxScores,
  ScoreCollection,
  TranslationFile,
  Wheel,
  WheelId,
  WheelScoreProps
} from '../../../../types';
import { cleanWheelId, getBrandInfo } from '../../../../utils';
import { isCompetingValue, isTopValue } from '../../../../utils/comparing';
import Table, { TableBody, TableHead, TableHeading, TableRow } from '../../../Table';

const WHEEL_THUM_SIZE = 64;

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
  brands: Brand[];
  handleRemoveFromComparision: (wheelId: WheelId) => void;
  measureUnits: MeasureUnits;
  minMaxScores: MinMaxScores;
  specWeights: SpecWeights;
  specs: (keyof Wheel)[];
  wheelPictures: Record<WheelId, string>;
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
  wheelPictures,
  wheelScores,
  wheels
}) => {
  const { t } = useComparatorTranslations();
  const { sm, md } = useBreakpoints();
  
  const columnsCount = getMinimumColums(sm, md) - wheels.length;
  const emptyColumns = Array
    .from(Array(columnsCount >= 0 ? columnsCount : 0).keys())
    .map((val, index) => wheels.length + index + 1);
  const columns = 1 + wheels.length + emptyColumns.length;
  const colsWidth = `${ 100 / columns }%`;

  const cells = [...wheels, ...emptyColumns];

  return (
    <Table>
      <TableHeading>
        <TableHead width={ colsWidth } />

        { cells.map((wheel) => (
          <TableHead
            key={ typeof wheel === 'number' ? wheel : wheel.id }
            id={ 'id' }
            width={ colsWidth }
            style={ { textAlign: 'center' } }
          >
            <div style={ {
              alignItems: 'center',
              display: 'flex',
              flexDirection: 'column',
              marginBottom: 8,
              textAlign: 'center',
              width: '100%'
            } }>
              <div
                style={ {
                  backgroundImage: typeof wheel === 'number'
                    ? undefined
                    : `url(${ wheelPictures[cleanWheelId(wheel.id)] })`,
                  backgroundPosition: '50%',
                  backgroundRepeat: 'no-repeat',
                  backgroundSize: `auto ${ WHEEL_THUM_SIZE }px`,
                  height: WHEEL_THUM_SIZE,
                  width: WHEEL_THUM_SIZE
                } }
              />
            </div>

            <p style={ { margin: 0, marginTop: 0 } }>
              { typeof wheel === 'number'
                ? `${ t('eucs', commonNs).replace(/s$/, '') } ${ wheel }`
                : wheel.name
              }
            </p>
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
                    { t(key, { ns: key === 'score' ? TranslationFile.comparator : TranslationFile.common }) }
                  </span>

                  { showTooltip && (
                    <Tooltip title={ title }>
                      <Icon>info</Icon>
                    </Tooltip>
                  ) }
                </Box>
              </TableCell>

              { cells.map((wheel, index) => {
                // @ts-ignore
                // eslint-disable-next-line no-restricted-syntax
                const units = key in measureUnits ? measureUnits[key] : undefined;
                const formatter = typeof wheel !== 'number' && key !== 'brandId' && key !== 'score'
                  ? wheelFeatureFormatters[key]
                  : undefined;
                const value = typeof wheel !== 'number' && key !== 'brandId' && key !== 'score'
                  ? wheel[key]
                  : undefined;
                let formattedValue = formatter?.(value, t, units, key === 'width' ? 2 : 0) ?? value;

                const minMax = key !== 'brandId' ? minMaxScores[key] : undefined;
                const score = typeof wheel !== 'number' ?
                  wheelScores[wheel.id][key]
                  : 0;
                const highlighted = isCompetingValue(key) && isTopValue(score, minMax);

                if (typeof wheel !== 'number') {
                  switch (key) {
                    case 'brandId':
                      formattedValue = getBrandInfo(wheel.brandId, brands)?.name;
                      break;
                        
                    case 'score':
                      formattedValue = score;
                      break;
                  }
                }

                return (
                  <TableCell
                    key={ `${ typeof wheel === 'number' ? `emptyCell-${ wheel }` : wheel.id }-${ key }` }
                    sx={ {
                      bgcolor: (theme) => getCellBackground(theme, index, highlighted),
                      fontWeight: key === 'score' ? 700 : undefined
                    } }
                    width={ colsWidth }
                  >
                    { formattedValue }
                  </TableCell>
                );
              }
              ) }
            </TableRow>
          );
        }) }

        <TableRow>
          <TableCell width={ colsWidth }/>

          { cells.map(wheel => (
            <TableCell
              key={ `${ typeof wheel === 'number' ? `emptyCell-${ wheel }` : wheel.id }-actions` }
              sx={ { textAlign: 'center' } }
              width={ colsWidth }
            >
              { typeof wheel !== 'number' && (
                <Box sx={ { display: 'flex', flexDirection: 'column' } }>
                  <Link href={ EUC_FINDER_DETAILS.replace(':id', wheel.id) } passHref>
                    <Button
                      size="small"
                      sx={ { mb: 1 } }
                      variant="outlined"
                    >
                      { t('details-btn') }
                    </Button>
                  </Link>
                  
                  <Button
                    color="error"
                    size="small"
                    variant="outlined"
                    onClick={ () => handleRemoveFromComparision(wheel.id) }
                  >
                    { t('remove-label') }
                  </Button>
                </Box>
              ) }
            </TableCell>
          )) }
        </TableRow>
      </TableBody>
    </Table>
  );
};

export default CompareTable;
