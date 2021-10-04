import { Container } from '@mui/material';
import React, { PropsWithChildren } from 'react';

const SimpleLayout: React.FC<PropsWithChildren<{}>> = ({ children }) => {
  return (
    <Container maxWidth="lg">
      { children }
    </Container>
  );
};

export default SimpleLayout;