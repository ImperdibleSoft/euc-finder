import { Box, Button, TableCell } from '@mui/material';
import Link from 'next/link';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { EUC_DETAILS } from '../../../../constants/clientRoutes';
import { useTableData } from '../../../../hooks';
import { WheelId, WheelSorting, WheelSortingKeys, WheelsTableColumns, WheelWithPicture } from '../../../../types';
import Table, { TableBody, TableHead, TableHeading, TableRow } from '../../../Table';

const cellStyles: React.CSSProperties = {
  textAlign: 'center',
  verticalAlign: 'middle'
};

const headingStyles: React.CSSProperties = {
  ...cellStyles,
  cursor: 'pointer',
  minWidth: 120
};

interface Props {
  columns: WheelsTableColumns;
  handleAddToCompare?: (wheelId: WheelId) => void;
  handleSort: (key: WheelSortingKeys) => void;
  isBeingCompared: (wheelId: WheelId) => boolean;
  records: WheelWithPicture[];
  sorting: WheelSorting;
}

const TableView: React.FC<Props> = ({
  columns,
  handleAddToCompare,
  handleSort,
  isBeingCompared,
  records,
  sorting
}) => {
  const { t } = useTranslation();
  const { headings, rows } = useTableData(records, columns);

  if (records.length <= 0) {
    return null;
  }

  return (
    <Box sx={ { px: 2 } }>
      <Table>
        <TableHeading>
          { headings.map(({ id, label }) => (
            <TableHead
              key={ id }
              id={ id }
              onClick={ () => handleSort(id as WheelSortingKeys) }
              sorting={ sorting }
              style={ headingStyles }
            >
              { label }
            </TableHead>
          )) }

          <TableHead/>
        </TableHeading>

        <TableBody>
          { rows.map(row => {
            const wheel = records.find(w => w.id === row.id);

            if (!wheel) {
              return null;
            }
            
            const handleCompareClick = handleAddToCompare !== undefined && !isBeingCompared(wheel.id)
              ? () => handleAddToCompare(wheel.id)
              : undefined;

            return (
              <TableRow key={ row.id } >
                { row.cells.map(cell => (
                  <React.Fragment key={ cell.id }>
                    { cell.id !== 'name' && (
                      <TableCell style={ { ...cellStyles, ...cell.style } }>
                        { cell.formatter?.(cell.value, t, cell.units, cell.id === 'width' ? 2 : 0) ?? cell.value }
                      </TableCell>
                    ) }

                    { cell.id === 'name' && (
                      <TableCell style={ cellStyles }>
                        <div style={ {
                          alignItems: 'center',
                          display: 'flex',
                          textAlign: 'center',
                          width: '100%',
                          ...cell.style
                        } }>
                          <div
                            style={ {
                              backgroundImage: `url(${ wheel?.picture })`,
                              backgroundPosition: '50%',
                              backgroundRepeat: 'no-repeat',
                              backgroundSize: 'auto 48px',
                              height: '48px',
                              width: '48px',
                              marginRight: 12
                            } }
                          />

                          { cell.formatter?.(cell.value, t) ?? cell.value }
                        </div>
                      </TableCell>
                    ) }
                  </React.Fragment>
                )) }

                <TableCell style={ { ...cellStyles, textAlign: 'right' } }>
                  <Link href={ EUC_DETAILS.replace(':id', row.id) } passHref>
                    <Button size="small" variant="outlined" sx={ { mb: 1, display: 'flex', width: '100%' } }>
                      { t('details-btn') }
                    </Button>
                  </Link>

                  { !!handleCompareClick && (
                    <Button
                      size="small"
                      variant="outlined"
                      color="secondary"
                      onClick={ handleCompareClick }
                      sx={ { display: 'flex', width: '100%' } }
                    >
                      { t('compare-label') }
                    </Button>
                  ) }
                </TableCell>
              </TableRow>
            );}) }
        </TableBody>
      </Table>
    </Box>
  );
};

export default TableView;