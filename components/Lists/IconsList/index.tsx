import { Icon, Tooltip } from '@mui/material';
import React from 'react';
import { ListProps } from '../types';

export type { ListItem } from '../types';

const IconsList: React.FC<ListProps> = ({ items }) => (
  <>
    { items.map(({ icon, iconProps, primary, secondary }) => (
      <Tooltip key={ icon } disableFocusListener title={ `${ primary }: ${ secondary }` } >
        <Icon
          color={ iconProps?.active ? 'action' : 'disabled' }
          style={ { fontSize: '20px' } }
        >
          { icon }
        </Icon>
      </Tooltip>
    )) }
  </>
);

export default IconsList;