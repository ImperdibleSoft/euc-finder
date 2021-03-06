import { Card, SxProps, Theme, Typography } from '@mui/material';
import React, { useRef } from 'react';
import { isFacebookEnabled } from '../../../../../constants';
import { useLoadFacebookContent, useWheelsDetailsTranslations } from '../../../../../hooks';

const textStyles: SxProps<Theme> = {
  p: 2,
  textAlign: 'center'
};

interface Props {
  numPost?: number;
  width?: number;
}

const FacebookComments: React.FC<Props> = ({ numPost = 10, width }) => {
  const { t } = useWheelsDetailsTranslations();
  const cardRef = useRef<HTMLDivElement>(null);

  const {
    loadingState,
    pathname,
    rect,
    shouldRender,
    theme
  } = useLoadFacebookContent(cardRef);

  if (!isFacebookEnabled()) {
    return null;
  }

  return (
    <Card
      ref={ cardRef }
      // TODO: Force white background because FB Comments are not supporting dark theme, even if there is a prop for it
      sx={ { bgcolor: ({ palette }: Theme) => loadingState === 'success' ? palette.common.white : undefined } }
    >
      { (loadingState === 'loading') && (
        <Typography variant="subtitle1" component="p" sx={ textStyles }>
          { t('loadingComments-msg') }
        </Typography>
      ) }

      { (loadingState === 'error') && (
        <Typography variant="subtitle1" component="p" sx={ textStyles }>
          { t('errorLoadingComments-msg') }
        </Typography>
      ) }

      { shouldRender && (
        <div
          className="fb-comments"
          data-href={ pathname }
          data-colorscheme={ theme }
          data-width={ width ?? rect?.width }
          data-numposts={ numPost }
        />
      ) }
    </Card>
  );
};

export default FacebookComments;
