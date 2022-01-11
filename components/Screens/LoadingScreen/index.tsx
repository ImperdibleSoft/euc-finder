import { Box, Container, styled } from '@mui/material';
import Image from 'next/image';
import React from 'react';

const SpiningBox = styled(Box)`
  @-webkit-keyframes rotating /* Safari and Chrome */ {
    from {
      -webkit-transform: rotate(0deg);
      -o-transform: rotate(0deg);
      transform: rotate(0deg);
    }
    to {
      -webkit-transform: rotate(360deg);
      -o-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }
  @keyframes rotating {
    from {
      -ms-transform: rotate(0deg);
      -moz-transform: rotate(0deg);
      -webkit-transform: rotate(0deg);
      -o-transform: rotate(0deg);
      transform: rotate(0deg);
    }
    to {
      -ms-transform: rotate(360deg);
      -moz-transform: rotate(360deg);
      -webkit-transform: rotate(360deg);
      -o-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }
  
  position: absolute;
  bottom: -1px;
  right: 9px;
  transform-origin: 47.3% 48.5%;
  -webkit-animation: rotating 2s linear infinite;
  -moz-animation: rotating 2s linear infinite;
  -ms-animation: rotating 2s linear infinite;
  -o-animation: rotating 2s linear infinite;
  animation: rotating 2s linear infinite;
`;
SpiningBox.displayName = 'SpiningBox';

const LoadingScreen: React.FC = () => {
  return (
    <Container sx={ {
      alignItems: 'center',
      display: 'flex',
      flex: 1,
      justifyContent: 'center'
    } }>
      <Box sx={ { position: 'relative', transform: 'scale(0.45)' } }>
        <Image
          alt="Loading element"
          height="256"
          src="/assets/loader/loader-base.webp"
          width="256"
        />

        <SpiningBox>
          <Image
            alt="Loading element"
            height="215"
            src="/assets/loader/spinner.webp"
            width="223"
          />
        </SpiningBox>
      </Box>
    </Container>
  );
};

export default LoadingScreen;