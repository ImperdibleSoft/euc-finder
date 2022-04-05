import { Badge, Box, Icon, Link as MuiLink, Theme } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import { PropsWithChildren } from 'react';
import { TFunction } from 'react-i18next';
import { EUC_FINDER, EUC_FINDER_DETAILS } from '../../../../constants/clientRoutes';
import { BRAND_COLOR } from '../../../../styles/theme';

export interface NavigationProps {
  comparedWheels: number;
  handleNavigate: (path: string) => void;
  newVideos: number;
  pathname: string;
  t: TFunction<'translations'>;
}

export const isSameRoute = (pathname: string, path: string) => {
  if (path === EUC_FINDER) {
    return pathname === path || pathname === EUC_FINDER_DETAILS.replace(':id', '[id]');
  }
  
  return pathname.startsWith(path);
};

export const renderCustomIcon = (icon: string, blackColor?: boolean) => {
  switch (icon) {
    case 'instagram':
      return (
        <Box component="span" sx={ {
          height: 24,
          '& img': { filter: `grayscale(1) invert(${ !blackColor ? 1 : 0.5 })` }
        } }>
          <Image
            alt="presentation"
            height="24"
            src="/logos/instagram-icon.png"          
            width="24"
          />
        </Box>
      );
  
    default:
      return (
        <Icon
          sx={ { color: ({ palette }: Theme) => palette.common[blackColor ? 'black' : 'white'] } }
        >
          { icon }
        </Icon>
      );
  }
};

export const renderIconWithBadge = (icon: string, badge?: number, blackColor = false) => {
  if (badge === undefined) {
    return renderCustomIcon(icon, blackColor);
  }

  return (
    <Badge badgeContent={ badge } color="secondary">
      { renderCustomIcon(icon, blackColor) }
    </Badge>
  );
};

interface LinkProps {
  blackColor: boolean;
  href: string;
  isActiveParent: boolean;
  isActiveRoute: boolean;
}

export const renderInternalLink = ({
  children,
  href,
  blackColor,
  isActiveParent,
  isActiveRoute
}: PropsWithChildren<LinkProps>) => (
  <Link
    key={ href }
    href={ href }
    passHref
  >
    <MuiLink
      className={ isActiveParent ? 'active' : undefined }
      sx={ {
        color: ({ palette }: Theme) => isActiveRoute
          ? palette.secondary.main
          : (blackColor ? palette.primary.main : palette.getContrastText(BRAND_COLOR)),
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        mx: 1
      } }
    >
      { children }
    </MuiLink>
  </Link>
);

export const renderExternalLink = ({ children, href, blackColor }: PropsWithChildren<LinkProps>) => (
  <MuiLink
    href={ href }
    target="_blank"
    sx={ {
      color: ({ palette }: Theme) => blackColor
        ? palette.primary.main
        : palette.getContrastText(BRAND_COLOR),
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      mx: 1
    } }
  >
    { children }
  </MuiLink>
);
