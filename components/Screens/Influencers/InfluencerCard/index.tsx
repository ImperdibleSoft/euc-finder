import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Grid,
  Link,
  List,
  ListItem,
  ListItemText,
  Typography
} from '@mui/material';
import Image from 'next/image';
import { useRouter } from 'next/router';
import React, { useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { VIDEOS } from '../../../../constants/clientRoutes';
import { commonNs, useInfluencersTranslations } from '../../../../hooks';
import { filterVideos, resetVideoFilters } from '../../../../store/actions';
import { getVideosByInfluencer } from '../../../../store/selectors';
import { Influencer, VideoCategory } from '../../../../types';
import { getCategoryFromTags, getWheelFromTags } from '../../../../utils';
import SmallList from '../../../Lists/SmallList';

const size = 108;
const margin = size / 8 / 2;

const listItemStyles = { px: 0 };

interface InfluencerData {
  languages: string[],
  wheels: string[],
}

interface Props {
  influencer: Influencer;
}

// eslint-disable-next-line max-lines-per-function
const InfluencerCard: React.FC<Props> = ({ influencer }) => {
  const { t } = useInfluencersTranslations();
  const router = useRouter();
  const dispatch = useDispatch();
  const videos = useSelector(getVideosByInfluencer(influencer.id));

  const { languages, wheels } = useMemo(() =>
    videos.reduce(
      (acc, video) => {
        const langName = t(`${ video.language }-label`, commonNs);
        const categories = getCategoryFromTags(video.tags);
        const usedWheels = getWheelFromTags(video.tags);

        if (!acc.languages.includes(langName)) {
          acc.languages.push(langName);
        }

        usedWheels.forEach(wheel => {
          const wheelName = wheel;

          if (!categories.includes(VideoCategory.chatting) && !acc.wheels.includes(wheelName)) {
            acc.wheels.push(wheelName);
          }
        });

        return acc;
      },
      {
        languages: [],
        wheels: []
      } as InfluencerData
    ),
  [t, videos]
  );

  const handleWatchMoreVideos = () => {
    dispatch(resetVideoFilters());
    dispatch(filterVideos({ key: 'influencers', value: [influencer.id] }));
    router.push(VIDEOS);
  };

  return (
    <Grid item xs={ 12 } sm={ 6 } md={ 4 } lg={ 3 } sx={ { position: 'relative' } }>
      <Card sx={ { mt: margin + 4 } }>
        <Box
          sx={ {
            alignItems: 'center',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            position: 'absolute',
            left: 16,
            right: 0,
            mt: -(margin)
          } }
        >
          <Box
            sx={ {
              border: (theme) => `2px solid ${ theme.palette.primary.main }`,
              borderRadius: '50%',
              height: `${ size }px`,
              overflow: 'hidden',
              width: `${ size }px`
            } }
          >
            <Image
              alt={ `${ influencer.name }'s avatar` }
              height={ size }
              src={ influencer.avatar ?? '' }
              width={ size }
            />
          </Box>
        </Box>

        <CardContent sx={ { pt: margin } }>
          <Typography
            variant="h5"
            component="p"
            sx={ {
              alignItems: 'center',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              mt: 2
            } }
          >
            { influencer.name }
          </Typography>

          <List dense>
            <ListItem sx={ listItemStyles }>
              <ListItemText
                primaryTypographyProps={ { noWrap: true } }
                primary={ (
                  <Link
                    href={ influencer.channel }
                    target="_blank"
                  >
                    { influencer.channel }
                  </Link>
                ) }
                secondary={ t('youtubeChannel-label') }
              />
            </ListItem>
          </List>

          <SmallList
            items={ [
              {
                icon: 'language',
                primary: `${ t('language-label', commonNs) }s`,
                secondary: languages.length ? languages.join(', ') : '-'
              },
              {
                icon: 'smart_display',
                primary: t('videos', commonNs),
                secondary: `${ videos.length } ${ t('videos', commonNs) }`
              },
              {
                icon: 'radio_button_unchecked',
                primary: t('eucs', commonNs),
                secondary: `${ wheels.length } ${ t('eucs', commonNs) }`
              }
            ] }
          />
        </CardContent>

        <CardActions sx={ { alignItems: 'flex-end', justifyContent: 'flex-end', width: '100%' } }>
          <Button onClick={ handleWatchMoreVideos } variant="outlined">
            { t('watchVideos-btn') }
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default InfluencerCard;
