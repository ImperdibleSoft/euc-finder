import { Box } from '@mui/material';
import { Video } from '../../../../types';
import Carousel from '../../../Carousel';
import VideoCard from '../VideoCard';

interface Props {
  className?: string;
  count: number;
  handleChangeCategories: (id: string) => void;
  handleChangeInfluencers: (id: string) => void;
  handleChangeWheels: (id: string) => void;
  skeleton?: boolean;
  videos: Video[]
}

const VideosCarousel: React.FC<Props> = ({
  className,
  count,
  handleChangeCategories,
  handleChangeInfluencers,
  handleChangeWheels,
  skeleton,
  videos
}) => (
  <Box
    sx={ { pt: 2 } }
  >
    <Carousel
      className={ className }
      counter={ count }
      entityName="videos"
      skeleton={ skeleton }
      transparent              
    >
      { ({ Item }) => videos.map(video => (
        <Item key={ video.url }>
          <VideoCard
            handleChangeCategories={ handleChangeCategories }
            handleChangeInfluencers={ handleChangeInfluencers }
            handleChangeWheels={ handleChangeWheels }
            video={ video }
          />
        </Item>
      )) }
    </Carousel>
  </Box>
);

export default VideosCarousel;