import { Theme, Typography } from '@mui/material';
import Image from 'next/image';
import React from 'react';
import { APP_NAME } from '../../constants';
import { commonNs, useLayoutTranslations } from '../../hooks';

interface Props {
  icon?: boolean;
  text?: boolean;
}

const Logotype = ({ icon = true, text = true }: Props): JSX.Element => {
  const { t } = useLayoutTranslations();

  return (
    <>
      { icon && (
        <Image
          alt={ t('appLogo-label', { ...commonNs, appName: APP_NAME }) }
          height="48px"
          src="/logos/eucfinder-dark.png"
          width="48px"
        />
      ) }

      { text && (
        <Typography
          variant="h6"
          noWrap
          sx={ {
            color: ({ palette }: Theme) => palette.common.white,
            display: 'inline-block',
            ml: 1,
            mr: 2,
            textDecoration: 'none'
          } }
        >
          { APP_NAME }
        </Typography>
      ) }
    </>
  );
};

export default Logotype;
