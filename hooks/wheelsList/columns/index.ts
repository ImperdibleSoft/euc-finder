import React, { useReducer } from 'react';
import { useSelector } from 'react-redux';
import { wheelFeatureFormatters } from '../../../constants';
import {
  getBrands,
  getListViewSpecs,
  getMeasureUnits,
  getPricesConfig,
  getTableViewSpecs
} from '../../../store/selectors';
import { Brand, Wheel, WheelFeatureFormatters, WheelsTableColumns } from '../../../types';
import { formatWheelName } from '../../../utils';
import { useWheelsListTranslations } from '../../translations';
import wheelsTableSettingsReducer, { getInitialValue } from './reducer';

export const useColumns = () => {
  const [listMainSpecs] = useSelector(getListViewSpecs);
  const [columns, dispatch] = useReducer(wheelsTableSettingsReducer, getInitialValue(listMainSpecs));

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

const shouldShowColumn = (columns: WheelsTableColumns, key: keyof Wheel, showPrice: boolean) =>
  (key === 'price' && showPrice) || key ==='name' || !!columns[key as keyof WheelsTableColumns];

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

const getColumnValue = (key: keyof Wheel, record: Wheel, brands: Brand[]) => {
  switch (key) {
    case 'name':
      return formatWheelName(record, brands);

    default:
      return record[key];
  }
};

export const useTableData = (records: Wheel[], columns: WheelsTableColumns) => {
  const { t } = useWheelsListTranslations();
  const brands = useSelector(getBrands);
  const measureUnits = useSelector(getMeasureUnits);
  const showPrice = useSelector(getPricesConfig);
  const specColumns = useSelector(getTableViewSpecs);

  const headings = specColumns
    .filter(key => shouldShowColumn(columns, key, showPrice))
    .map(key => ({
      id: key,
      label: t(key)
    }));
    
  const rows = records
    .map(record => ({
      id: record.id,
      cells: specColumns
        .filter(key => shouldShowColumn(columns, key, showPrice))
        .map(key => ({
          id: key,
          style: getCellStyles(key),
          formatter:  wheelFeatureFormatters[key as keyof WheelFeatureFormatters],
          // @ts-ignore
          // eslint-disable-next-line no-restricted-syntax
          units: key in measureUnits ? measureUnits[key] : undefined,
          value: getColumnValue(key, record, brands)
        }))
    }));

  return { headings, rows };
};
