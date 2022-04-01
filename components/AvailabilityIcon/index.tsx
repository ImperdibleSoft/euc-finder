import { Box, Icon, Theme, Tooltip, Typography } from '@mui/material';
import React from 'react';
import { availabilityIcons } from '../../constants';
import { useCommonTranslations } from '../../hooks';
import { Availability } from '../../types';
import { HEADER_HEIGHT } from '../Layouts/constants';

const size = 36;

const getBackgroundColor = ({ palette }: Theme) => {
  const color = palette.background.paper.toUpperCase();
  
  if (color === '#FFF') {
    return '#FFFFFFCC';
  }

  return `${ color }CC`;
};

const getAvailabilityColor = (availability: Availability) => {
  switch (availability) {
    case 'preorder':
    case 'available':
      return 'success';

    case 'leaked':
    case 'announced':
      return 'warning';

    case 'discontinued':
      return 'error';

    default:
      return undefined;
  }
};

interface Props {
  availability: Availability;
  showLabel?: boolean;
}

const AvailabilityIcon: React.FC<Props> = ({ availability, showLabel = false }) => {
  const { t } = useCommonTranslations();
  const description = t(`${ availability }-label`);
  const color = getAvailabilityColor(availability);

  return (
    <Box
      sx={ {
        alignItems: 'center',
        bgcolor: getBackgroundColor,
        borderBottomLeftRadius: 4,
        display: 'flex',
        height: size,
        justifyContent: 'center',
        px: showLabel ? 2 : undefined,
        position: {
          xs: 'absolute',
          md: showLabel ? 'fixed' : undefined
        },
        right: 0,
        top: {
          xs: 0,
          md: showLabel ? HEADER_HEIGHT: undefined
        },
        width: showLabel ? 'auto' : size,
        zIndex: { md: showLabel ? 1099 : undefined }
      } }
    >
      <Tooltip open={ showLabel ? false : undefined } title={ <span>{ description }</span> }>
        <>
          <Icon color={ color }>
            { availabilityIcons[availability] }
          </Icon>
        
          { showLabel && (
            <Typography
              color={ ({ palette }: Theme) => color ? palette[color].main : undefined }
              variant="body1"
              sx={ { ml: 1 } }
            >
              { description }
            </Typography>
          ) }
        </>
      </Tooltip>
    </Box>
  );
};

export default AvailabilityIcon;
