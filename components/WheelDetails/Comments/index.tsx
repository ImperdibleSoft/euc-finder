import { Card, SxProps, Theme, Typography } from '@mui/material';
import React, { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useFacebookSDK, useResize } from '../../../hooks';
import { LoadingState } from '../../../types';
import { isDarkTheme } from '../../../utils';

const textStyles: SxProps<Theme> = {
  py: 2,
  textAlign: 'center'
};

interface Props {
  dark?: boolean;
  numPost?: number;
  width?: number;
}

const FacebookComments: React.FC<Props> = ({ dark, numPost = 10, width }) => {
  const { t } = useTranslation();
  const { loadingState: sdkLoadingState } = useFacebookSDK();

  const [darkTheme, setDarkTheme] = useState(dark);
  const [href, setHRef] = useState('');
  const [commentsLoadingState, setCommentsLoadingState] = useState<LoadingState>('idle');
  
  const iframeRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const { rect } = useResize(cardRef);

  useEffect(() => {
    if (!dark) {
      setDarkTheme(isDarkTheme());
    }
  }, [dark]);

  useEffect(() => {
    const value = location.href.replace('http://localhost:3000', 'https://www.eucfinder.com');
    setHRef(value);
    setCommentsLoadingState('loading');
  }, [darkTheme]);

  useEffect(() => {
    if (sdkLoadingState === 'success') {
      setTimeout(() => {
        const span = iframeRef.current?.querySelector('span');
        setCommentsLoadingState(!!span?.offsetHeight ? 'success' : 'error');
      }, 2000);
    }
  }, [sdkLoadingState]);

  return (
    <Card ref={ cardRef }>
      { (sdkLoadingState === 'loading' || commentsLoadingState === 'loading') && (
        <Typography variant="subtitle1" sx={ textStyles }>
          { t('loadingComments-msg') }
        </Typography>
      ) }

      { (sdkLoadingState === 'error' || commentsLoadingState === 'error') && (
        <Typography variant="subtitle1" sx={ textStyles }>
          { t('errorLoadingComments-msg') }
        </Typography>
      ) }

      { !!href && commentsLoadingState !== 'error' && (
        <div
          className="fb-comments"
          ref={ iframeRef }
          data-href={ href }
          data-colorscheme={ dark ? 'dark' : 'light' }
          data-width={ width ?? rect?.width }
          data-numposts={ numPost }
        />
      ) }
    </Card>
  );
};

export default FacebookComments;
