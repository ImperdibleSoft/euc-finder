import { Box, Container } from '@mui/material';
import React, { PropsWithChildren } from 'react';
import Footer from '../Footer';

const SimpleLayout: React.FC<PropsWithChildren<{}>> = ({ children }) => {
  return (
    <Container maxWidth="lg" sx={ { height: '100%', display: 'flex', flexDirection: 'column' } }>
      <Box sx={ { flex: 1 } }>
        { children }
      </Box>

      <Footer />
    </Container>
  );
};

export default SimpleLayout;
