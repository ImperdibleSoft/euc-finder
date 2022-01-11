import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { getInitialData } from '../store/actions';
import { LoadingState } from '../types';

export * from './apps';
export * from './facebook';
export * from './network';
export * from './settings';
export * from './theme';
export * from './videos';
export * from './wheelDetails';
export * from './wheelsList';

export const useInitialData = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState<LoadingState>('idle');
  
  const handleDownloadInitialData = async () => {
    setLoading('loading');
    await dispatch(getInitialData());
    setLoading('success');
  };

  useEffect(() => {
    handleDownloadInitialData();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return loading;
};