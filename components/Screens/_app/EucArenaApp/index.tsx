import { PropsWithChildren } from 'react';
import { useAppData } from '../../../../hooks';
import MainLayout from '../../../Layouts/MainLayout';
import LoadingScreen from '../../LoadingScreen';

const EucArenaApp: React.FC<PropsWithChildren<{}>> = ({ children }) => {
  const loadingStates = useAppData();

  return (
    <MainLayout loading={ loadingStates.initialData !== 'success' && loadingStates.initialData !== 'error' }>
      { loadingStates.initialData === 'loading' && (
        <LoadingScreen />
      ) }
      
      { loadingStates.initialData === 'success' && children }
    </MainLayout>
  );
};

export default EucArenaApp;
