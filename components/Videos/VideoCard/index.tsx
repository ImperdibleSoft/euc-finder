import { Avatar, Card, CardContent, Chip, List, ListItem } from '@mui/material';
import React from 'react';
import { useVideoInfo } from '../../../hooks';
import { Video } from '../../../types';
import { getEmbedPath } from '../../../utils/videos';
import YoutubePlayer from '../../YoutubePlayer';

const cardWidth = 314;

const commonProps = {
  size: 'medium',
  sx: { mb: 1, mr: 1 },
  variant: 'outlined'
};

interface Props {
  handleChangeCategories: (id: string) => void;
  handleChangeInfluencers: (id: string) => void;
  handleChangeWheels: (id: string) => void;
  video: Video
}

const VideoCard: React.FC<Props> = ({ handleChangeCategories, handleChangeInfluencers, handleChangeWheels, video }) => {
  const { categories, influencers, wheels } = useVideoInfo(video);
  const { url } = getEmbedPath(video);
  
  return (
    <div
      style={ {
        display: 'inline-block',
        maxWidth: cardWidth,
        minWidth: cardWidth,
        paddingLeft: 16,
        paddingTop: 16,
        position: 'relative',
        textAlign: 'left',
        verticalAlign: 'top',
        width: cardWidth
      } }
    >
      <Card>
        <YoutubePlayer 
          controls
          url={ url }
          width={ cardWidth }
        />

        <CardContent
          sx={ {
            maxWidth: '100%',
            p: 0,
            '&:last-child': { pb: 0 }
          } }
        >
          <List dense>
            <ListItem sx={ { display: 'block' } }>
              { influencers.map(influencer => (
                // @ts-ignore
                <Chip
                  key={ influencer.id }
                  { ...commonProps }
                  avatar={ <Avatar alt={ influencer.name } src={ influencer.avatar } /> }
                  color="secondary"
                  label={ influencer.name }
                  onClick={ () => handleChangeInfluencers(influencer.id) }
                />
              )) }
            </ListItem>
            <ListItem sx={ { display: 'block' } }>
              { wheels.map(wheel => (
                // @ts-ignore
                <Chip
                  key={ wheel.id }
                  { ...commonProps }
                  color="primary"
                  label={ wheel.name }
                  onClick={ () => handleChangeWheels(wheel.id) }
                />
              )) }
            </ListItem>
            <ListItem sx={ { display: 'block' } }>
              { categories.map(category => (
                // @ts-ignore
                <Chip
                  key={ category.id }
                  { ...commonProps }
                  label={ category.label }
                  onClick={ () => handleChangeCategories(category.id) }
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