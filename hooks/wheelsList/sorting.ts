import { useState } from 'react';
import { Order, WheelSortingKeys } from '../../types';

export const useSorting = () => {
  const [sortCriteria, setSortCriteria] = useState<WheelSortingKeys>('range');
  const [order, setOrder] = useState<Order>('desc');

  const handleSort = (key: WheelSortingKeys) => {
    if (key === sortCriteria) {
      setOrder(order === 'asc' ? 'desc' : 'asc');
    } else {
      setSortCriteria(key);
      setOrder('asc');
    }
  };

  const sorting = {
    key: sortCriteria,
    order
  };

  return {
    sorting,
    handleSort
  };
};