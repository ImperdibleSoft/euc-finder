import { Icon } from '@mui/material';
import React from 'react';
import { ListProps } from '../types';

export type { ListItem } from '../types';

const IconsList: React.FC<ListProps> = ({ items }) => (
  <>
    { items.map(({ icon, iconProps }) => (
      <Icon
        key={ icon }
        color={ iconProps?.active ? 'action' : 'disabled' }
        style={ { fontSize: '20px' } }
      >
        { icon }
      </Icon>
    )) }
  </>
);

export default IconsList;