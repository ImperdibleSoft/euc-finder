import { useRouter } from 'next/router';
import { useCallback, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { EUC_COMPARE, SETTINGS } from '../../constants/clientRoutes';
import { addWheelToComparision, removeWheelToComparision, resetWheelToComparision } from '../../store/actions';
import { getComparedWheels, getSpecWeights, getWheels } from '../../store/selectors';
import { Wheel, WheelId } from '../../types';
import { sortBy } from '../../utils';
import { getAbsoluteMinMaxValues, getAbsoluteWheelsScores, getRelativeMinMaxScores } from '../../utils/comparing';

export const useCompareActions = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const comparedWheels = useSelector(getComparedWheels);

  const canCompareMoreWheels = useCallback(
    (wheelsToAdd = 1) => (comparedWheels.length + wheelsToAdd) <= 5,
    [comparedWheels]
  );

  const isBeingCompared = useCallback(
    (wheelId: WheelId) => comparedWheels.includes(wheelId),
    [comparedWheels]
  );

  const handleAddAllToComparision = (wheels: WheelId[]) => {
    wheels.forEach(wheelId => {
      dispatch(addWheelToComparision({ wheelId }));
    });
    router.push(EUC_COMPARE);
  };

  const handleAddToComparision = (wheelId: WheelId) => {
    dispatch(addWheelToComparision({ wheelId }));
    router.push(EUC_COMPARE);
  };

  const handleRemoveFromComparision = (wheelId: WheelId) => {
    dispatch(removeWheelToComparision({ wheelId }));
  };

  const handleResetComparision = () => {
    dispatch(resetWheelToComparision());
  };

  const handleOpenComparator = () => {
    router.push(EUC_COMPARE);
  };

  const handleOpenSettings = () => {
    router.push(SETTINGS);
  };

  return {
    canCompareMoreWheels,
    handleAddAllToComparision,
    handleAddToComparision,
    handleOpenSettings,
    handleRemoveFromComparision,
    handleOpenComparator,
    handleResetComparision,
    isBeingCompared
  };
};

export const useComparedWheels = () => {
  const wheels = useSelector(getWheels);
  const comparedWheels = useSelector(getComparedWheels);
  const specWeights = useSelector(getSpecWeights);

  const scores = useMemo(() => {
    const absoluteMinMaxValues = getAbsoluteMinMaxValues(wheels);
    const absoluteScores = getAbsoluteWheelsScores(wheels, absoluteMinMaxValues, specWeights);
    return absoluteScores;
  }, [wheels, specWeights]);

  const minMaxScores = useMemo(() => {
    return getRelativeMinMaxScores(scores, comparedWheels);
  }, [comparedWheels, scores]);

  const scoredWheels = comparedWheels
    .map(wheelId => {
      const wheel = wheels.find(w => w.id === wheelId) as Wheel;

      return {
        ...wheel,
        score: scores[wheel.id]?.score ?? 0
      };
    })
    .sort(sortBy('score'));

  return {
    minMaxScores,
    wheelScores: scores,
    wheels: scoredWheels
  };
};