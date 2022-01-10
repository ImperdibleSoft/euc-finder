import {
  Paper,
  SxProps,
  Table as MaterialTable,
  TableBody as MaterialTableBody,
  TableCell,
  TableContainer,
  TableHead as MaterialTableHead,
  TableRow as MaterialTableRow,
  TableSortLabel,
  Theme
} from '@mui/material';
import React, { PropsWithChildren } from 'react';
import { Wheel, WheelSorting } from '../../types';

export { TableCell };

interface TableHeadProps {
  id?: keyof Wheel;
  onClick?: () => void;
  sorting?: WheelSorting;
  style?: React.CSSProperties;
  width?: string;
}
export const TableHead: React.FC<PropsWithChildren<TableHeadProps>> = ({
  children,
  id,
  onClick,
  sorting,
  style,
  width
}) => { 
  if (!id || !sorting || !onClick) {
    return (
      <TableCell style={ style } width={ width }>
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

interface TableRowProps {
  sx?: SxProps<Theme>;
}
export const TableRow: React.FC<PropsWithChildren<TableRowProps>> = ({ children, sx }) => (
  <MaterialTableRow sx={ sx }>
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