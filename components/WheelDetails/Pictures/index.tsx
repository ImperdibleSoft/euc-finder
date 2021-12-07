import { Button, Card, CardActions, Grid, ImageList, ImageListItem, Typography } from '@mui/material';
import Image from 'next/image';
import { useRouter } from 'next/router';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import { VIDEOS } from '../../../constants/clientRoutes';
import { filterVideos, resetVideoFilters } from '../../../store/actions';
import { WheelId } from '../../../types';
import PictureDetails from '../../PictureDetails';

interface Props {
  onClick: (pictureUrl: string) => void;
  onClose: () => void;
  pictureDetail?: string;
  pictures?: string[];
  wheelId: WheelId;
  wheelName: string;
}

const Pictures: React.FC<Props> = ({ onClick, onClose, pictureDetail, pictures, wheelId, wheelName }) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const router = useRouter();

  const handleViewVideos = () => {
    dispatch(resetVideoFilters());
    dispatch(filterVideos({ key: 'wheels', value: [wheelId] }));
    router.push(VIDEOS);
  };

  if (!pictures?.length) {
    return null;
  }

  const imageSize = 128;
  const widgetSize = imageSize * 3;
  
  return (
    <Grid item xs={ 12 } md={ 6 }>
      <Typography sx={ { mt: 4, mb: 2 } } variant="h6" component="div">
        { t('pictures-title') }
      </Typography>

      <Card style={ {
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center'
      } }>
        <ImageList
          cols={ 3 }
          rowHeight={ imageSize }
          variant="standard"
          sx={ {
            mx: 'auto',
            width: widgetSize
          } }
        >
          { pictures.map((picture) => (
            <ImageListItem
              key={ picture }
              cols={ 1 }
              onClick={ () => onClick(picture) }
              rows={ 1 }
              sx={ {
                alignSelf: 'center',
                alignItems: 'center',
                cursor: 'pointer',
                justifyContent: 'center',
                overflow: 'hidden'
              } }
            >
              <Image
                alt={ t('wheelPicture-msg', { wheelName }) }
                loading="lazy"
                src={ picture }
                layout="fill"
              />
            </ImageListItem>
          )) }
        </ImageList>

        <CardActions sx={ { justifyContent: 'flex-end', pb: 2, pr: 2, pt: 0, width: '100%' } }>
          <Button onClick={ handleViewVideos } variant="outlined">
            { t('watchVideos-label') }
          </Button>
        </CardActions>
      </Card>

      <PictureDetails
        alt={ t('wheelPicture-msg', { wheelName }) }
        handleClose={ onClose }
        picture={ pictureDetail }
      />
    </Grid>
  );};

export default Pictures;