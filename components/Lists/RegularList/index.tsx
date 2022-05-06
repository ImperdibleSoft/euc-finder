import { Icon, List, ListItem as MaterialListItem, ListItemIcon, ListItemText } from '@mui/material';
import React from 'react';
import { ListProps } from '../types';

export type { ListItem } from '../types';

interface Props extends ListProps {
  dense?: boolean
}

const RegularList: React.FC<Props> = ({ dense, items }) => (
  <List dense={ dense }>
    { items.map(({ icon, iconProps, primary, secondary }) => (
      <MaterialListItem key={ `${ primary }-${ secondary }-${ icon }` }>
        { !!icon && (
          <ListItemIcon>
            <Icon color={ iconProps?.active ? 'primary' : 'disabled' }>{ icon }</Icon>
          </ListItemIcon>
        ) }

        <ListItemText
          primary={ primary }
          secondary={ secondary }
        />
      </MaterialListItem>
    )) }
  </List>
);

export default RegularList;
