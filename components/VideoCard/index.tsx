import { Card, CardContent, Chip, List, ListItem } from '@mui/material';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { useVideoInfo } from '../../hooks';
import { Video } from '../../types';
import YoutubePlayer from '../YoutubePlayer';

const commonProps = {
  size: 'medium',
  sx: { mr: 1 },
  variant: 'outlined'
};

interface Props {
  video: Video
}

const VideoCard: React.FC<Props> = ({ video }) => {
  const { t } = useTranslation();
  const { categories, influencers, url, wheels } = useVideoInfo(video);


  return (
    <div
      style={ {
        display: 'inline-block',
        paddingLeft: 16,
        paddingTop: 16,
        position: 'relative',
        textAlign: 'left'
      } }
    >
      <Card>
        <YoutubePlayer 
          controls
          url={ url }
          width={ 314 }
        />

        <CardContent
          sx={ {
            p: 0,
            '&:last-child': { pb: 0 }
          } }
        >
          <List dense>
            <ListItem>
              { influencers.map(influencer => (
                // @ts-ignore
                <Chip
                  key={ influencer.id }
                  color="secondary"
                  label={ influencer.name }
                  { ...commonProps }
                />
              )) }
            </ListItem>
            <ListItem>
              { wheels.map(wheel => (
                // @ts-ignore
                <Chip
                  key={ wheel.id }
                  color="primary"
                  label={ wheel.name }
                  { ...commonProps }
                />
              )) }
            </ListItem>
            <ListItem>
              { categories.map(category => (
                // @ts-ignore
                <Chip
                  key={ category }
                  label={ t(category) }
                  { ...commonProps }
                />
              )) }
            </ListItem>
          </List>
        </CardContent>
      </Card>
    </div>
  );
};

export default VideoCard;