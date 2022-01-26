import { Button, Card, CardActions, Grid, Typography } from '@mui/material';
import { useCommonTranslations, useWheelsDetailsTranslations } from '../../../../hooks';
import { Video } from '../../../../types';
import Carousel from '../../../Carousel';
import VideoCard from '../../Videos/VideoCard';

interface Props {
  handleWatchMoreVideos: () => void;
  totalCount: number;
  videos: Video[]
}

const VideosCarousel: React.FC<Props> = ({ handleWatchMoreVideos, totalCount, videos }) => {
  const common = useCommonTranslations();
  const { t } = useWheelsDetailsTranslations();
  
  return (
    <Grid item xs={ 12 } sm={ 12 } md={ 12 }>
      <Typography sx={ { mt: 4, mb: 2 } } variant="h6" component="div">
        { t('videos-title') }
      </Typography>

      <Card
        sx={ { pt: 2 } }
      >
        <Carousel
          counter={ totalCount }
          entityName={ common.t(`videos`) }    
          transparent              
        >
          { ({ Item }) => videos.map(video => (
            <Item key={ video.url }>
              <VideoCard small video={ video } />
            </Item>
          )) }
        </Carousel>

        <CardActions sx={ { justifyContent: 'flex-end', pb: 2, pr: 2, pt: 0, width: '100%' } }>
          <Button onClick={ handleWatchMoreVideos } variant="outlined">
            { t('watchVideos-btn') }
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );};

export default VideosCarousel;
