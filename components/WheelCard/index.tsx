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
import { wheelFeatureFormatters, wheelFeatureIcons } from '../../constants';
import { EUC_DETAILS } from '../../constants/clientRoutes';
import { useArenaContext } from '../../context';
import { useEucListInformationGroups } from '../../hooks';
import { Wheel, WheelFeatureFormatters, WheelFeatureIcons, WheelSorting } from '../../types';
import { formatWheelName } from '../../utils';
import IconsList from '../Lists/IconsList';
import SmallList from '../Lists/SmallList';
import { ListItem } from '../Lists/types';

interface Props {
  sorting: WheelSorting
  wheel: Wheel
}

const WheelCard: React.FC<Props> = ({ sorting, wheel }) => {
  const { t } = useTranslation();
  const { brands, measureUnits, pictures: wheelPictures } = useArenaContext();
  const { mainSpecs, additionalSpecs } = useEucListInformationGroups(sorting);
  const link = EUC_DETAILS.replace(':id', wheel.id);
  const [firstPicture] = wheelPictures[wheel.id] ?? [];
  
  const mainSpecItems: ListItem[] = mainSpecs.map(key => {
    const icon = wheelFeatureIcons[key as keyof WheelFeatureIcons];
    const label = t(key);
    const formatter = wheelFeatureFormatters[key as keyof WheelFeatureFormatters];
    // @ts-ignore
    // eslint-disable-next-line no-restricted-syntax
    const convertTo = key in measureUnits ? measureUnits[key] : undefined;
    const value = formatter?.(wheel[key], t, convertTo) ??  wheel[key];

    return {
      icon,
      iconProps: { active: !!wheel[key] },
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
      iconProps: { active: !!wheel[key] },
      primary: label,
      secondary: value
    };
  });

  return (
    <Card>
      <CardMedia
        component="img"
        height="240"
        image={ firstPicture ?? 'https://smartmoveperu.com/wp-content/uploads/2021/08/34-scaled.jpg' }
        alt={ t('wheelPicture-msg', { wheelName: formatWheelName(wheel, brands) }) }
      />

      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          { wheel.name }
        </Typography>

        <Typography variant="body2" color="text.secondary">
          { brands[wheel.brandId].name }
        </Typography>

        <SmallList items={ mainSpecItems } />
      </CardContent>

      <CardActions sx={ { pt: 0 } }>
        <IconsList items={ additionalSpecsItems } />

        <Link href={ link } passHref>
          <Button size="small" variant="outlined" sx={  { marginLeft: 'auto' } }>
            { t('details-btn') }
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
};

export default WheelCard;