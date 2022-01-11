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
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { wheelFeatureFormatters, wheelFeatureIcons } from '../../../../constants';
import { EUC_DETAILS } from '../../../../constants/clientRoutes';
import { useEucListInformationGroups } from '../../../../hooks';
import { getBrands, getMeasureUnits } from '../../../../store/selectors';
import { WheelFeatureFormatters, WheelFeatureIcons, WheelSorting, WheelWithPicture } from '../../../../types';
import { formatWheelName, getBrandInfo } from '../../../../utils';
import BrandLogo from '../../../BrandLogo';
import IconsList from '../../../Lists/IconsList';
import SmallList from '../../../Lists/SmallList';
import { ListItem } from '../../../Lists/types';

interface Props {
  handleAddToCompare?: () => void;
  sorting: WheelSorting;
  wheel: WheelWithPicture;
}

const WheelCard: React.FC<Props> = ({ handleAddToCompare, sorting, wheel }) => {
  const { t } = useTranslation();
  const brands = useSelector(getBrands);
  const brand = getBrandInfo(wheel.brandId, brands);
  const measureUnits = useSelector(getMeasureUnits);
  const { mainSpecs, additionalSpecs } = useEucListInformationGroups(sorting);
  const link = EUC_DETAILS.replace(':id', wheel.id);
  
  const mainSpecItems: ListItem[] = mainSpecs.map(key => {
    const icon = wheelFeatureIcons[key as keyof WheelFeatureIcons];
    const label = t(key);
    const formatter = wheelFeatureFormatters[key as keyof WheelFeatureFormatters];
    // @ts-ignore
    // eslint-disable-next-line no-restricted-syntax
    const convertTo = key in measureUnits ? measureUnits[key] : undefined;
    const value = formatter?.(wheel[key], t, convertTo, key === 'width' ? 2 : 0) ??  wheel[key];

    return {
      icon,
      iconProps: { active: !!wheel[key] && value && value !== '-' },
      primary: label,
      secondary: value
    };
  });

  const additionalSpecsItems: ListItem[] = additionalSpecs.map(key => {
    const icon = wheelFeatureIcons[key as keyof WheelFeatureIcons];
    const label = t(key);
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
        alt={ t('wheelPicture-msg', { wheelName: formatWheelName(wheel, brands) }) }
      />

      { !!brand && (
        <BrandLogo
          alt={ t('appLogo-label', { appName: brand.name }) }
          logo={ brand.logo }
        />
      ) }

      <CardContent sx={ { pb: 0 } }>
        <Typography gutterBottom variant="h5" component="div">
          { wheel.name }
        </Typography>

        <Typography variant="body2" color="text.secondary">
          { brand?.name }
        </Typography>

        <SmallList items={ mainSpecItems } />
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
            { t('compare-label') }
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