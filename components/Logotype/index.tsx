import { Box, Theme, Typography } from '@mui/material';
import Image from 'next/image';
import React from 'react';
import { APP_NAME } from '../../constants';
import { commonNs, useLayoutTranslations } from '../../hooks';
import { BRAND_COLOR } from '../../styles/theme';

interface Props {
  darkBg?: boolean;
  icon?: boolean;
  text?: boolean;
}

const Logotype = ({ darkBg = true, icon = true, text = true }: Props): JSX.Element => {
  const { t } = useLayoutTranslations();

  return (
    <Box
      sx={ {
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'row'
      } }
    >
      { icon && (
        <Image
          alt={ t('appLogo-label', { ...commonNs, appName: APP_NAME }) }
          height="48px"
          src={ `/logos/eucfinder-${ darkBg ? 'dark' : 'light' }.png` }
          width="48px"
        />
      ) }

      { text && (
        <Typography
          variant="h6"
          noWrap
          sx={ {
            color: ({ palette }: Theme) => darkBg ? palette.common.white : BRAND_COLOR,
            display: 'inline-block',
            textDecoration: 'none'
          } }
        >
          { APP_NAME }
        </Typography>
      ) }
    </Box>
  );
};

export default Logotype;
