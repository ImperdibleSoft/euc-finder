import { Icon, List, ListItem as MaterialListItem, ListItemIcon, ListItemText } from '@mui/material';
import React from 'react';
import { ListProps } from '../types';

export type { ListItem } from '../types';

const SmallList: React.FC<ListProps> = ({ items }) => (
  <List dense>
    { items.map(({ icon, iconProps, primary, secondary }) => (
      <MaterialListItem key={ `${ primary }-${ secondary }-${ icon }` } sx={ { px: 0 } }>
        <ListItemIcon sx={ { minWidth: 32 } }>
          <Icon color={ iconProps?.active ? 'primary' : 'disabled' }>{ icon }</Icon>
        </ListItemIcon>
        <ListItemText
          primary={ primary }
          secondary={ secondary }
        />
      </MaterialListItem>
    )) }
  </List>
);

export default SmallList;