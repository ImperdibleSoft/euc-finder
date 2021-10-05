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
import { wheelFeatureFormatters, wheelFeatureIcons } from '../../constants';
import { EUC_DETAILS } from '../../constants/clientRoutes';
import { useArenaContext } from '../../context';
import { useEucListInformationGroups } from '../../hooks';
import { formatWheelName } from '../../utils';
import { Wheel, WheelFeatureFormatters, WheelFeatureIcons, WheelSorting } from '../../types';
import { ListItem } from '../Lists/types';
import SmallList from '../Lists/SmallList';
import IconsList from '../Lists/IconsList';

interface Props {
  sorting: WheelSorting
  wheel: Wheel
}

const WheelCard: React.FC<Props> = ({ sorting, wheel }) => {
  const { brands, pictures: wheelPictures } = useArenaContext();
  const { mainSpecs, additionalSpecs } = useEucListInformationGroups(sorting);
  const link = EUC_DETAILS.replace(':id', wheel.id);
  const [firstPicture] = wheelPictures[wheel.id] ?? [];
  
  const mainSpecItems: ListItem[] = mainSpecs.map(key => {
    const icon = wheelFeatureIcons[key as keyof WheelFeatureIcons];
    const formatter = wheelFeatureFormatters[key as keyof WheelFeatureFormatters];
    const value = formatter?.(wheel[key]) ??  wheel[key];

    return {
      icon,
      iconProps: { active: !!wheel[key] },
      primary: value
    };
  });

  const additionalSpecsItems: ListItem[] = additionalSpecs.map(key => {
    const icon = wheelFeatureIcons[key as keyof WheelFeatureIcons];

    return {
      icon,
      iconProps: { active: !!wheel[key] },
      primary: ''
    };
  });

  return (
    <Card>
      <CardMedia
        component="img"
        height="240"
        image={ firstPicture ?? 'https://smartmoveperu.com/wp-content/uploads/2021/08/34-scaled.jpg' }
        alt={ `Foto de ${ formatWheelName(wheel, brands) }` }
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
          <Button size="small" sx={  { marginLeft: 'auto' } }>
            Detalles
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
};

export default WheelCard;