import {
  Paper,
  Table as MaterialTable,
  TableBody as MaterialTableBody,
  TableCell,
  TableContainer,
  TableHead as MaterialTableHead,
  TableRow as MaterialTableRow,
  TableSortLabel
} from '@mui/material';
import React, { PropsWithChildren } from 'react';
import { Wheel, WheelSorting } from '../../types';

export { TableCell };

interface TableHeadProps {
  id?: keyof Wheel
  onClick?: () => void
  sorting?: WheelSorting
  style?: React.CSSProperties
}
export const TableHead: React.FC<PropsWithChildren<TableHeadProps>> = ({ children, id, onClick, sorting, style }) => { 
  if (!id || !sorting || !onClick) {
    return (
      <TableCell style={ style }>
        { children }
      </TableCell>
    );
  }

  return (
    <TableCell style={ style }>
      <TableSortLabel
        active={ sorting.key === id }
        direction={ sorting.key === id ? sorting.order : 'asc' }
        onClick={ onClick }
      >
        { children }
      </TableSortLabel>
    </TableCell>
  );};

export const TableRow: React.FC<PropsWithChildren<{}>> = ({ children }) => (
  <MaterialTableRow>
    { children }
  </MaterialTableRow>
);

export const TableBody: React.FC<PropsWithChildren<{}>> = ({ children }) => (
  <MaterialTableBody>
    { children }
  </MaterialTableBody>
);

export const TableHeading: React.FC<PropsWithChildren<{}>> = ({ children }) => (
  <MaterialTableHead>
    <MaterialTableRow>
      { children }
    </MaterialTableRow>
  </MaterialTableHead>
);

const Table: React.FC<PropsWithChildren<{}>> = ({ children }) => (
  <TableContainer component={ Paper }>
    <MaterialTable>
      { children }
    </MaterialTable>
  </TableContainer>
);

export default Table;