import { useRouter } from 'next/router';
import { useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { EUC_COMPARE } from '../../constants/clientRoutes';
import { addWheelToComparision, removeWheelToComparision, resetWheelToComparision } from '../../store/actions';
import { getComparedWheels, getPricesConfig, getWheels } from '../../store/selectors';
import { Wheel, WheelId } from '../../types';
import { sortBy } from '../../utils';
import { getAbsoluteMinMaxValues, getAbsoluteWheelsScores, getRelativeMinMaxScores } from '../../utils/comparing';

export const useCompareActions = () => {
  const router = useRouter();
  const dispatch = useDispatch();

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

  return {
    handleAddToComparision,
    handleRemoveFromComparision,
    handleResetComparision
  };
};

export const useComparedWheels = () => {
  const showPrices = useSelector(getPricesConfig);
  const wheels = useSelector(getWheels);
  const comparedWheels = useSelector(getComparedWheels);

  const scores = useMemo(() => {
    const absoluteMinMaxValues = getAbsoluteMinMaxValues(wheels, showPrices);
    const absoluteScores = getAbsoluteWheelsScores(wheels, absoluteMinMaxValues, showPrices);
    return absoluteScores;
  }, [wheels, showPrices]);

  const minMaxScores = useMemo(() => {
    return getRelativeMinMaxScores(scores, comparedWheels, showPrices);
  }, [comparedWheels, scores, showPrices]);

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