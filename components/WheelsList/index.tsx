import { Container, Grid, Toolbar } from '@mui/material';
import React from 'react';
import { SHOW_PRICE, wheelFeatureIcons, wheelFeatureNames } from '../../constants';
import { Wheel, WheelFeatureIcons, WheelSorting, WheelSortingKeys } from '../../types';
import Dropdown, { DropdownItem } from '../Form/Dropdown';
import WheelCard from '../WheelCard';

interface Props {
  handleSort: (key: WheelSortingKeys) => void
  records: Wheel[]
  sorting: WheelSorting
}

const WheelsList: React.FC<Props> = ({ handleSort, records, sorting  }) => {
  const [sampleWheel] = records ?? [];
  const sortCriteriaOptions = Object
    .keys(sampleWheel ?? {})
    .filter(key => {
      if (key === 'id' || key === 'peakPower' || key === 'maxGradibility') return false;
      if (key === 'price') return SHOW_PRICE;
      return true;
    })
    .map((key): DropdownItem => ({
      icon: wheelFeatureIcons[key as keyof WheelFeatureIcons],
      label: wheelFeatureNames[key as keyof Wheel],
      value: key
    }));

  const sortOrderOptions: DropdownItem[] = [
    {
      icon: 'arrow_upward_icon',
      label: 'Ascendente',
      value: 'asc'
    },
    {
      icon: 'arrow_downward_icon',
      label: 'Descendente',
      value: 'desc'
    }
  ];

  const handleChangeSortCriteria = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const { value } = event.target;
    handleSort(value as WheelSortingKeys);
  };

  const handleChangeSortOrder = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const { value } = event.target;
    if (value !== sorting.order) {
      handleSort(sorting.key);
    }
  };
  
  return (
    <Container>
      { !!sampleWheel && (
        <Toolbar
          disableGutters
          sx={ {
            alignItems: 'flex-end',
            flexDirection: { xs: 'column', md: 'row' },
            justifyContent: 'flex-end'

          } }
        >
          <Dropdown
            defaultValue={ sorting.key }
            fullWidth={ false }
            label="Ordenar por"
            name="sortCriteria"
            onChange={ handleChangeSortCriteria }
            options={ sortCriteriaOptions }
          />

          <Dropdown
            defaultValue={ sorting.order }
            fullWidth={ false }
            label="Orden"
            name="order"
            onChange={ handleChangeSortOrder }
            options={ sortOrderOptions }
            style={ { marginLeft: 8 } }
          />
        </Toolbar>
      ) }

      <Grid container spacing={ 2 }>
        { records.map(record => (
          <Grid item key={ record.id } xs={ 12 } md={ 6 } lg={ 4 } xl={ 3 }>
            <WheelCard sorting={ sorting } wheel={ record } />
          </Grid>
        )) }
      </Grid>
    </Container>
  );
};

export default WheelsList;