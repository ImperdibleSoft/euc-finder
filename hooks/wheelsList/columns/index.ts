import React, { useReducer } from 'react';
import { SHOW_PRICE, SPEC_COLUMNS, wheelFeatureFormatters, wheelFeatureNames } from '../../../constants';
import { useArenaContext } from '../../../context';
import { Brands, Wheel, WheelFeatureFormatters, WheelsTableColumns } from '../../../types';
import wheelsTableSettingsReducer, { getInitialValue } from './reducer';

export const useColumns = () => {
  const [columns, dispatch] = useReducer(wheelsTableSettingsReducer, getInitialValue());

  const handleShow = (key: keyof WheelsTableColumns) => {
    dispatch({
      type: 'show',
      payload: { key }
    });
  };

  const handleHide = (key: keyof WheelsTableColumns) => {
    dispatch({
      type: 'hide',
      payload: { key }
    });
  };

  const handleReset = () => {
    dispatch({ type: 'reset' });
  };

  return {
    ...columns,
    handleHide,
    handleReset,
    handleShow
  };
};

const shouldShowColumn = (columns: WheelsTableColumns, key: keyof Wheel) =>
  (SHOW_PRICE && key === 'price') || key ==='name' || !!columns[key as keyof WheelsTableColumns];

const getCellStyles = (key: keyof Wheel): React.CSSProperties => {
  switch (key) {
    case 'price':
      return { textAlign: 'right' };

    case 'name':
      return { textAlign: 'left' };

    default:
      return {};
  }
};

const getColumnValue = (key: keyof Wheel, record: Wheel, brands: Brands) => {
  switch (key) {
    case 'name':
      return `${ brands[record.brandId].name } ${ record.name }`;

    default:
      return record[key];
  }
};

export const useTableData = (records: Wheel[], columns: WheelsTableColumns) => {
  const { brands } = useArenaContext();

  const headings = SPEC_COLUMNS
    .filter(key => shouldShowColumn(columns, key))
    .map(key => ({
      id: key,
      label: wheelFeatureNames[key]
    }));
    
  const rows = records
    .map(record => ({
      id: record.id,
      cells: SPEC_COLUMNS
        .filter(key => shouldShowColumn(columns, key))
        .map(key => ({
          id: key,
          style: getCellStyles(key),
          formatter:  wheelFeatureFormatters[key as keyof WheelFeatureFormatters],
          value: getColumnValue(key, record, brands)
        }))
    }));

  return { headings, rows };
};