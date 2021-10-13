import { Card, Grid, Icon, List, ListItem as MaterialListItem, ListItemIcon, ListItemText } from '@mui/material';
import React from 'react';
import { ListProps } from '../types';

export type { ListItem } from '../types';

const HighlightedList: React.FC<ListProps> = ({ items }) => (
  <Grid container spacing={ 2 }>
    { items.map(({ icon, iconProps, primary, secondary }) => (
      <Grid key={ `${ primary }-${ secondary }-${ icon }` } item xs={ 12 } md={ 6 } lg={ 3 }>
        <Card>
          <List>
            <MaterialListItem>
              <ListItemIcon>
                <Icon
                  color={ iconProps?.active ? 'secondary' : 'disabled' }
                  fontSize="large"
                >
                  { icon }
                </Icon>
              </ListItemIcon>

              <ListItemText
                primaryTypographyProps={ { fontSize: '1.3rem' } }
                primary={ primary }
                secondary={ secondary }
              />
            </MaterialListItem>
          </List>
        </Card>
      </Grid>
    )) }
  </Grid>
);

export default HighlightedList;