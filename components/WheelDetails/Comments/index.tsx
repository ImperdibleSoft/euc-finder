import { Card } from '@mui/material';
import React, { useEffect, useRef, useState } from 'react';
import { useFacebookSDK, useResize } from '../../../hooks';
import { isDarkTheme } from '../../../utils';

interface Props {
  dark?: boolean;
  numPost?: number;
  width?: number;
}

const FacebookComments: React.FC<Props> = ({ dark = isDarkTheme(), numPost = 10, width }) => {
  const [href, setHref] = useState('');
  const cardRef = useRef<HTMLDivElement>(null);
  const { rect } = useResize(cardRef);

  useFacebookSDK();

  useEffect(() => {
    setHref(location.href);
  }, []);

  return (
    <Card ref={ cardRef }>
      { !!href && (
        <div
          className="fb-comments"
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
