import { Container } from '@mui/material';
import React, { PropsWithChildren } from 'react';
import Footer from '../Footer';

const SimpleLayout: React.FC<PropsWithChildren<{}>> = ({ children }) => {
  return (
    <Container maxWidth="lg">
      { children }

      <Footer />
    </Container>
  );
};

export default SimpleLayout;
