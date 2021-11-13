import { Box, Button, Collapse } from '@mui/material';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

interface Props {
  collapsedSize?: number | string;
}

const Collapsable: React.FC<Props> = ({ children, collapsedSize }) => {
  const [collapsed, setCollapsed] = useState(true);
  const { t } = useTranslation();

  const toggleCollapse = () => {
    setCollapsed(!collapsed);
  };

  return (
    <Box sx={ { display: 'flex', flexDirection: 'column', justifyContent: 'center' } }>
      <Collapse collapsedSize={ collapsedSize } component="div" in={ !collapsedSize || !collapsed }>
        { children }

      </Collapse>

      { !!collapsedSize && (
        <Button onClick={ toggleCollapse }>
          { t(collapsed ? 'more' : 'less') }
        </Button>
      ) }
    </Box>
  );
};

export default Collapsable;
