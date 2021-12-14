import { useRouter } from 'next/router';
import { EUCS, EUC_DETAILS, VIDEOS } from '../../constants/clientRoutes';

const parsePathname = (pathname: string) =>
  pathname.replace(/\[(.*)\]/, (match, p) => `:${ p }`);

export const useContainerMargins = () => {
  const router = useRouter();
  const container = parsePathname(router.pathname) === EUCS || parsePathname(router.pathname) === VIDEOS;
  const firstItem = parsePathname(router.pathname) !== EUC_DETAILS;

  return {
    container,
    firstItem
  };
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