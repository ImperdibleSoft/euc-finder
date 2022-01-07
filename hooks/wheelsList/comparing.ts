import { useDispatch } from 'react-redux';
import { addWheelToComparision, removeWheelToComparision, resetWheelToComparision } from '../../store/actions';
import { WheelId } from '../../types';

export const useCompareActions = () => {
  const dispatch = useDispatch();

  const handleAddToComparision = (wheelId: WheelId) => {
    dispatch(addWheelToComparision({ wheelId }));
  };

  const handleRemoveFromComparision = (wheelId: WheelId) => {
    dispatch(removeWheelToComparision({ wheelId }));
  };

  const handleResetComparision = () => {
    dispatch(resetWheelToComparision());
  };

  return {
    handleAddToComparision,
    handleRemoveFromComparision,
    handleResetComparision
  };
};