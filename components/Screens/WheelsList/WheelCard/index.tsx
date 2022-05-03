import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography
} from '@mui/material';
import Link from 'next/link';
import React from 'react';
import { useSelector } from 'react-redux';
import { wheelFeatureFormatters, wheelFeatureIcons } from '../../../../constants';
import { EUC_FINDER_DETAILS } from '../../../../constants/clientRoutes';
import { commonNs, useEucListInformationGroups, useWheelsListTranslations } from '../../../../hooks';
import { getBrands, getMaxCurrentAllowed, getMeasureUnits } from '../../../../store/selectors';
import { WheelFeatureFormatters, WheelFeatureIcons, WheelSorting, WheelWithPicture } from '../../../../types';
import { formatWheelName, getBrandInfo, getFormatterValue } from '../../../../utils';
import AvailabilityIcon from '../../../AvailabilityIcon';
import BrandLogo from '../../../BrandLogo';
import IconsList from '../../../Lists/IconsList';
import SmallList from '../../../Lists/SmallList';
import { ListItem } from '../../../Lists/types';

interface Props {
  handleAddToCompare?: () => void;
  score: number;
  sorting: WheelSorting;
  wheel: WheelWithPicture;
}

const WheelCard: React.FC<Props> = ({ handleAddToCompare, score, sorting, wheel }) => {
  const { t } = useWheelsListTranslations();
  const brands = useSelector(getBrands);
  const brand = getBrandInfo(wheel.brandId, brands);
  const measureUnits = useSelector(getMeasureUnits);
  const maxCurrentAllowed = useSelector(getMaxCurrentAllowed);
  const { mainSpecs, additionalSpecs } = useEucListInformationGroups(sorting);
  const link = EUC_FINDER_DETAILS.replace(':id', wheel.id);
  
  const mainSpecItems: ListItem[] = mainSpecs.map(key => {
    const icon = wheelFeatureIcons[key as keyof WheelFeatureIcons];
    const label = t(key, commonNs);
    const formatter = wheelFeatureFormatters[key as keyof WheelFeatureFormatters];
    // @ts-ignore
    // eslint-disable-next-line no-restricted-syntax
    const convertTo = key in measureUnits ? measureUnits[key] : undefined;
    const formatterValue = getFormatterValue(wheel, key, { brands, maxCurrentAllowed });
    const value = formatter?.(formatterValue, t, convertTo, key === 'width' ? 2 : 0) ??  wheel[key];

    return {
      icon,
      iconProps: { active: !!formatterValue && value && value !== '-' },
      primary: label,
      secondary: value
    };
  });

  const additionalSpecsItems: ListItem[] = additionalSpecs.map(key => {
    const icon = wheelFeatureIcons[key as keyof WheelFeatureIcons];
    const label = t(key, commonNs);
    const formatter = wheelFeatureFormatters[key as keyof WheelFeatureFormatters];
    const value = formatter?.(wheel[key], t) ??  wheel[key];

    return {
      icon,
      iconProps: { active: !!wheel[key] && value && value !== '-' },
      primary: label,
      secondary: value
    };
  });

  return (
    <Card sx={ { position: 'relative' } }>
      <CardMedia
        component="img"
        height="240px"
        image={ wheel.picture }
        alt={ t('wheelPicture-msg', { ...commonNs, wheelName: formatWheelName(wheel, brands) }) }
      />

      { !!brand && (
        <BrandLogo
          alt={ t('appLogo-label', { ...commonNs, appName: brand.name }) }
          logo={ brand.logo }
        />
      ) }

      <CardContent sx={ { pb: 0, position: 'relative' } }>
        <AvailabilityIcon availability={ wheel.availability } />
        
        <Typography gutterBottom variant="h5" component="div">
          { wheel.name }
        </Typography>

        <Typography variant="body2" color="text.secondary">
          { brand?.name }
        </Typography>

        <SmallList
          items={ [
            {
              primary: t('score-label'),
              icon: 'star',
              iconProps: { active: true },
              secondary: score.toString()
            },
            ...mainSpecItems
          ] }
        />
      </CardContent>

      <CardActions sx={ { pt: 0, pb: 2 } }>
        <IconsList items={ additionalSpecsItems } />
      </CardActions>

      <CardActions>
        { !!handleAddToCompare && (
          <Button
            variant="outlined"
            onClick={ handleAddToCompare }
            sx={ { ml: 'auto', mr: 1 } }
          >
            { t('compare-btn') }
          </Button>
        ) }

        <Link href={ link } passHref>
          <Button variant="outlined" sx={ { ml: handleAddToCompare ? undefined : 'auto' } }>
            { t('details-btn') }
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
};

export default WheelCard;
