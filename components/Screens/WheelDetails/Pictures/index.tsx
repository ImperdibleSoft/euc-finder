import { Card, Grid, ImageList, ImageListItem, Typography } from '@mui/material';
import Image from 'next/image';
import React from 'react';
import { useWheelsDetailsTranslations } from '../../../../hooks';
import PictureDetails from '../PictureDetails';

interface Props {
  onClick: (pictureUrl: string) => void;
  onClose: () => void;
  pictureDetail?: string;
  pictures?: string[];
  wheelName: string;
}

const Pictures: React.FC<Props> = ({ onClick, onClose, pictureDetail, pictures, wheelName }) => {
  const { t } = useWheelsDetailsTranslations();

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
          { pictures.map((picture) => {
            if (!picture) {
              return null;
            }
            
            return (
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
                  overflow: 'hidden',
                  '& > * > img': { objectFit: 'cover' }
                } }
              >
                <Image
                  alt={ t('wheelPicture-msg', { wheelName }) }
                  loading="lazy"
                  src={ picture }
                  layout="fill"
                />
              </ImageListItem>
            );
          }) }
        </ImageList>
      </Card>

      <PictureDetails
        alt={ t('wheelPicture-msg', { wheelName }) }
        handleClose={ onClose }
        picture={ pictureDetail }
      />
    </Grid>
  );};

export default Pictures;
