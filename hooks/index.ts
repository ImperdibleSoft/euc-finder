import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { EUC_DETAILS, INFLUENCERS, VIDEOS } from '../constants/clientRoutes';
import { getInitialData, getVideos, getWheelData } from '../store/actions';
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
  const { pathname } = useRouter();
  const dispatch = useDispatch();
  const [initialData, setInitialData] = useState<LoadingState>('idle');
  const [videosData, setVideosData] = useState<LoadingState>('idle');
  const [wheelData, setWheelData] = useState<LoadingState>('idle');
  
  const downloadInitialData = async () => {
    setInitialData('loading');
    await dispatch(getInitialData());
    setInitialData('success');
  };

  const downloadVideosData = async () => {
    setVideosData('loading');
    await dispatch(getVideos());
    setVideosData('success');
  };

  const downloadWheelData = async () => {
    setWheelData('loading');
    await dispatch(getWheelData());
    setWheelData('success');
  };

  useEffect(() => {
    // Only download this information if it has not loaded previously
    if (initialData === 'idle') {
      downloadInitialData();
    }

    if (
      // Only load this information on these pages
      (pathname === INFLUENCERS || pathname === VIDEOS) &&
      // Only load this information if it has not been loaded previously
      // Also, if wheelData has been loaded: do not load it (because wheelData
      // loads the same information)
      (videosData === 'idle' && wheelData === 'idle')
    ) {
      downloadVideosData();
    }
    
    if (
      // Only load this information on these pages
      pathname === EUC_DETAILS.replace(':id', '[id]') &&
      // Only load this information if it has not been loaded previously
      wheelData === 'idle'
    ) {
      downloadWheelData();
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname, initialData, videosData, wheelData]);

  return {
    initialData,
    videosData,
    wheelData
  };
};