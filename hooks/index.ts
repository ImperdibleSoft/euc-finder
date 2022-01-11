import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { getConfig, getInitialData } from '../store/actions';
import { LoadingState } from '../types';

export * from './apps';
export * from './facebook';
export * from './network';
export * from './settings';
export * from './theme';
export * from './videos';
export * from './wheelDetails';
export * from './wheelsList';

export const useAppData = () => {
  const dispatch = useDispatch();
  const [configData, setConfigData] = useState<LoadingState>('idle');
  const [initialData, setInitialData] = useState<LoadingState>('idle');
  
  const downloadConfigData = async () => {
    setConfigData('loading');
    await dispatch(getConfig());
    setConfigData('success');
  };

  const downloadInitialData = async () => {
    setInitialData('loading');
    await dispatch(getInitialData());
    setInitialData('success');
  };

  useEffect(() => {
    downloadConfigData();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (configData === 'success') {
      downloadInitialData();
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [configData]);

  return {
    configData,
    initialData
  };
};