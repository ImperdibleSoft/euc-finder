import { useRouter } from 'next/router';
import { EUCS, VIDEOS } from '../../constants/clientRoutes';

export const useContainerMargins = () => {
  const router = useRouter();
  const addSpacing = router.pathname === EUCS || router.pathname === VIDEOS;

  return addSpacing;
};

export const useCardSizes = () => {
  const router = useRouter();
  const hasSidebar = router.pathname === EUCS || router.pathname === VIDEOS;

  return {
    xs: 12,
    sm: hasSidebar ? 12 : 6,
    md: hasSidebar ? 6 : 4,
    lg: hasSidebar ? 4 : 3,
    xl: 3
  };
};