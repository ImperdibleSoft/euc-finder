import { Box, Card, Theme, Typography } from '@mui/material';
import React, { useRef } from 'react';
import { isFacebookEnabled } from '../../../../../constants';
import { useLoadFacebookContent, useWheelsDetailsTranslations } from '../../../../../hooks';

interface Props {
  width?: number;
}

const FacebookLikeButton: React.FC<Props> = ({ width }) => {
  const { t } = useWheelsDetailsTranslations();
  const cardRef = useRef<HTMLDivElement>(null);

  const {
    loadingState,
    pathname,
    rect,
    shouldRender
  } = useLoadFacebookContent(cardRef);

  if (!isFacebookEnabled()) {
    return null;
  }

  return (
    <Card
      ref={ cardRef }
      // TODO: Force white background because FB Likes are not supporting dark theme, even if there is a prop for it
      sx={ {
        bgcolor: ({ palette }: Theme) => loadingState === 'success' ? palette.common.white : undefined,
        mb: 1,
        p: 1
      } }
    >
      { (loadingState === 'loading') && (
        <Typography variant="subtitle1" component="p" sx={ { p: 1 } }>
          { t('loadingLikes-msg') }
        </Typography>
      ) }
    
      { (loadingState === 'error') && (
        <Typography variant="subtitle1" component="p" sx={ { p: 1 } }>
          { t('errorLoadingLikes-msg') }
        </Typography>
      ) }

      { shouldRender && (
        <Box
          sx={ {
            display: 'inline-block !important',
            maxWidth: '100%'
          } }
          className="fb-like"
          data-action="like"
          data-href={ pathname }
          data-layout="standard"
          data-share="true"
          data-size="large"
          data-width={ width ?? rect?.width }
        />
      ) }
    </Card>
  );
};

export default FacebookLikeButton;
