import { Card, Grid, Icon, List, ListItem as MaterialListItem, ListItemIcon, ListItemText } from '@mui/material';
import React from 'react';
import { wheelFeatureIcons } from '../../../constants';
import { distance } from '../../../utils';
import { ListProps } from '../types';

export type { ListItem } from '../types';

const HighlightedList: React.FC<ListProps> = ({ items }) => (
  <Grid container spacing={ 2 }>
    { items.map(({ icon, iconProps, primary, secondary }) => (
      <React.Fragment key={ `${ primary }-${ secondary }-${ icon }` }>
        <Grid item xs={ 12 } md={ 6 } lg={ 3 }>
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

        { icon === wheelFeatureIcons.range && (
          <Grid item xs={ 12 } md={ 6 } lg={ 3 }>
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
                    primary={ distance(parseInt(primary, 10) * 55 / 100) }
                    secondary={ `${ secondary } real` }
                  />
                </MaterialListItem>
              </List>
            </Card>
          </Grid>
        ) }
      </React.Fragment>
    )) }
  </Grid>
);

export default HighlightedList;