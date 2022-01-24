import { Box, Icon, Tooltip } from '@mui/material';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { availabilityIcons } from '../../constants';
import { Availability } from '../../types';

const size = 36;

const getAvailabilityColor = (availability: Availability) => {
  switch (availability) {
    case 'preorder':
    case 'available':
      return 'success';

    case 'filtered':
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
}

const AvailabilityIcon: React.FC<Props> = ({ availability }) => {
  const { t } = useTranslation();

  return (
    <Box
      style={ { backgroundColor: '#dcdcdc88' } }
      sx={ {
        alignItems: 'center',
        borderBottomLeftRadius: 4,
        display: 'flex',
        height: size,
        justifyContent: 'center',
        position: 'absolute',
        right: 0,
        top: 0,
        width: size
      } }
    >
      <Tooltip title={ <span>{ t(`${ availability }-label`) }</span> }>
        <Icon color={ getAvailabilityColor(availability) }>
          { availabilityIcons[availability] }
        </Icon>
      </Tooltip>
    </Box>
  );
};

export default AvailabilityIcon;
