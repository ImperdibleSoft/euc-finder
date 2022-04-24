import { Avatar, Box, Card, CardContent, Chip, List, ListItem, Typography } from '@mui/material';
import React from 'react';
import { useVideoInfo } from '../../../../hooks';
import { Video } from '../../../../types';
import { getEmbedPath, humanDate } from '../../../../utils';
import YoutubePlayer from '../../../YoutubePlayer';

const cardWidth = 314;

const commonProps = {
  size: 'medium',
  sx: { mb: 1, mr: 1 },
  variant: 'outlined'
};

interface SmallProps {
  video: Video;
  small: true;
}

interface RegularProps {
  handleChangeCategories: (id: string) => void;
  handleChangeInfluencers: (id: string) => void;
  handleChangeWheels: (id: string) => void;
  video: Video
}

type Props = SmallProps | RegularProps;

const VideoCard: React.FC<Props> = ({ video, ...props }) => {
  const { categories, influencers, wheels } = useVideoInfo(video);
  const { url } = getEmbedPath(video);

  // eslint-disable-next-line no-restricted-syntax
  const smallCard = 'small' in props;
  
  return (
    <Box
      sx={ {
        display: 'inline-block',
        maxWidth: cardWidth,
        minWidth: cardWidth,
        position: 'relative',
        textAlign: 'left',
        verticalAlign: 'top',
        width: cardWidth
      } }
    >
      <Card
        variant={ smallCard ? 'outlined' : 'elevation' }
        sx={ { boxShadow: smallCard ? 0 : undefined } }
      >
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
          <Typography
            color="text.secondary"
            gutterBottom
            sx={ {
              fontSize: 14,
              px: 2,
              pt: 1,
              pb: smallCard ? 1 : 0
            } }
          >
            { humanDate(new Date(video.releaseDate)) }
          </Typography>

          { !smallCard && (
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
                    onClick={ () => props.handleChangeInfluencers(influencer.id) }
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
                    onClick={ () => props.handleChangeWheels(wheel.id) }
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
                    onClick={ () => props.handleChangeCategories(category.id) }
                  />
                )) }
              </ListItem>
            </List>
          ) }
        </CardContent>
      </Card>
    </Box>
  );
};

export default VideoCard;
