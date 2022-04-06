import { AppBar, Box, Toolbar, useScrollTrigger } from '@mui/material';
import Link from 'next/link';
import React, { PropsWithChildren, ReactElement } from 'react';
import { ROOT } from '../../../../constants/clientRoutes';
import { useBreakpoints } from '../../../../hooks';
import { BRAND_COLOR } from '../../../../styles/theme';
import Logotype from '../../../Logotype';
import MobileNavigationMenu from './MobileNavigationMenu';
import TabletNavigationMenu from './TabletNavigationMenu';
import { NavigationProps } from './utils';

interface ElevationProps {
  isLanding: boolean;
}

const ElevationScroll = ({ children, isLanding }: PropsWithChildren<ElevationProps>): JSX.Element => {
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0
  });

  return React.cloneElement(children as ReactElement, { elevation: (isLanding && !trigger) ? 0 : 4 });
};

type Props = ElevationProps & NavigationProps;

const Header = ({ isLanding, ...navigationProps }: Props) => {
  const { md: renderFullHeader } = useBreakpoints();

  return (
    <ElevationScroll isLanding={ isLanding }>
      <AppBar
        id="Header"
        sx={ {
          alignItems: 'center',
          backgroundColor: BRAND_COLOR,
          justifyContent: 'center',
          ml: 0,
          minHeight: 64,
          width: '100%'
        } }
      >
        <Toolbar
          id="Header-content"
          sx={ {
            alignItems: 'center',
            flexDirection: 'column',
            justifyContent: 'space-between',
            width: '100%',
            '@media screen and (min-width: 583px)': { flexDirection: 'row' }
          } }
        >
          <Box
            id="Header-contentLeft"
            sx={ {
              display: 'flex',
              flexDirection: 'row',
              py: { xs: 1, sm: 0 },
              width: { xs: '100%', sm: 'auto' } 
            } }
          >
            { !renderFullHeader && (
              <MobileNavigationMenu { ...navigationProps } />
            ) }
          
            <Link href={ ROOT } passHref>
              <Box sx={ {
                alignItems: 'center',
                cursor: 'pointer',
                display: 'flex'
              } }>
                <Logotype icon={ renderFullHeader } />
              </Box>
            </Link>
          </Box>

          { renderFullHeader && (
            <TabletNavigationMenu { ...navigationProps } />
          ) }
        
        </Toolbar>
      </AppBar>
    </ElevationScroll>
  );
};

export default Header;
