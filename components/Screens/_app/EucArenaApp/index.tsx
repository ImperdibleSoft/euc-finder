import { useRouter } from 'next/router';
import { PropsWithChildren } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { getRegions } from '../../../../constants';
import { EUC_DETAILS } from '../../../../constants/clientRoutes';
import { useAppData } from '../../../../hooks';
import { setRegion } from '../../../../store/actions';
import { getBrands, getRegion, getWheels } from '../../../../store/selectors';
import { LOCAL_STORAGE_KEY, Region, Wheel } from '../../../../types';
import { setItem } from '../../../../utils';
import MainLayout from '../../../Layouts/MainLayout';
import LoadingScreen from '../../LoadingScreen';

const EucArenaApp: React.FC<PropsWithChildren<{}>> = ({ children }) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const router = useRouter();
  const brands = useSelector(getBrands);
  const region = useSelector(getRegion);
  const wheels = useSelector(getWheels);
  const loadingStates = useAppData();

  const handleSelectWheel = (event: React.SyntheticEvent<Element, Event>, value: Wheel | null) => {
    if (value?.id) {
      router.push(EUC_DETAILS.replace(':id', value.id));
    }
  };

  const handleSelectRegion = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const { value } = event.target;

    if (value) {
      dispatch(setRegion(value as Region));
      setItem(LOCAL_STORAGE_KEY.REGION, value);
    }
  };

  return (
    <MainLayout
      brands={ brands }
      handleSelectRegion={ handleSelectRegion }
      handleSelectWheel={ handleSelectWheel }
      regions={ getRegions(t) }
      selectedRegion={ region }
      wheels={ wheels }
    >
      { loadingStates.initialData === 'loading' && (
        <LoadingScreen />
      ) }
      
      { loadingStates.initialData === 'success' && children }
    </MainLayout>
  );
};

export default EucArenaApp;
