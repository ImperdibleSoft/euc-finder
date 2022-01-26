import { Container, Grid, Toolbar } from '@mui/material';
import React from 'react';
import { wheelFeatureIcons } from '../../../../constants';
import { useCommonTranslations, useWheelsListTranslations } from '../../../../hooks';
import { WheelFeatureIcons, WheelId, WheelSorting, WheelSortingKeys, WheelWithPicture } from '../../../../types';
import Dropdown, { DropdownItem } from '../../../Form/Dropdown';
import WheelCard from '../WheelCard';

interface Props {
  handleAddToCompare?: (wheelId: WheelId) => void;
  handleSort: (key: WheelSortingKeys) => void
  isBeingCompared: (wheelId: WheelId) => boolean;
  records: WheelWithPicture[]
  showPrice: boolean,
  sorting: WheelSorting
}

const GridView: React.FC<Props> = ({
  handleAddToCompare,
  handleSort,
  isBeingCompared,
  records,
  showPrice,
  sorting
}) => {
  const common = useCommonTranslations();
  const { t } = useWheelsListTranslations();

  const [sampleWheel] = records ?? [];
  const sortCriteriaOptions = Object
    .keys(sampleWheel ?? {})
    .filter(key => {
      if (key === 'id' || key === 'peakPower' || key === 'maxGradibility' || key === 'picture') return false;
      if (key === 'price') return showPrice;
      return true;
    })
    .map((key): DropdownItem => ({
      icon: wheelFeatureIcons[key as keyof WheelFeatureIcons],
      label: common.t(key),
      value: key
    }));

  const sortOrderOptions: DropdownItem[] = [
    {
      icon: 'arrow_upward_icon',
      label: t('ascending-label'),
      value: 'asc'
    },
    {
      icon: 'arrow_downward_icon',
      label: t('descending-label'),
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
            fullWidth={ false }
            label={ t('sortBy-label') }
            name="sortCriteria"
            onChange={ handleChangeSortCriteria }
            options={ sortCriteriaOptions }
            value={ sorting.key }
          />

          <Dropdown
            fullWidth={ false }
            label={ t('order-label') }
            name="order"
            onChange={ handleChangeSortOrder }
            options={ sortOrderOptions }
            style={ { marginLeft: 8 } }
            value={ sorting.order }
          />
        </Toolbar>
      ) }

      <Grid container spacing={ 2 }>
        { records.map(record => {
          const handleCompareClick = handleAddToCompare !== undefined && !isBeingCompared(record.id)
            ? () => handleAddToCompare(record.id)
            : undefined;

          return (
            <Grid item key={ record.id } xs={ 12 } md={ 6 } lg={ 4 } xl={ 3 }>
              <WheelCard
                handleAddToCompare={ handleCompareClick }
                sorting={ sorting }
                wheel={ record }
              />
            </Grid>
          );
        }) }
      </Grid>
    </Container>
  );
};

export default GridView;
