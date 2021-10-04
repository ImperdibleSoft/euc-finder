import Divider from '@mui/material/Divider';
import React from 'react';

const Clear: React.FC = () => (
  <Divider
    style={ {
      borderBottomWidth: 0,
      marginTop: 16,
      marginBottom: 16
    } }
  />
);

export default Clear;