import { Box, Button, Theme, Typography } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { BRAND_COLOR } from '../../../../styles/theme';
import { LandingSectionProps } from '../../../../types';
import { HEADER_HEIGHT } from '../../../Layouts/constants';

const LandingSection = ({
  callToAction,
  description,
  extraText,
  path,
  picture,
  title,
  sx
}: LandingSectionProps): JSX.Element => {
  const { i18n } = useTranslation();

  const imgWidth = 1280;
  const imgHeight = Math.round(((imgWidth / 16) * 10));

  return (
    <Box
      className="LandingSection"
      sx={ {
        alignItems: 'center',
        backgroundColor: 'background.default',
        display: 'flex',
        flexDirection: 'row',
        minHeight: `calc(100vh - ${ HEADER_HEIGHT }px)`,
        justifyContent: 'center',
        px: {
          xs: 2,
          md: 8
        },
        py: {
          xs: 8,
          md: 4
        },
        width: '100%',

        '&:nth-of-type(even)': {
          backgroundColor: 'background.paper',
          flexDirection: { md: 'row-reverse' },
          
          '& .LandingSection-wrapper': { flexDirection: { md: 'row-reverse' } }
        },
        ...sx
      } }
    >
      <Box
        className="LandingSection-wrapper"
        sx={ {
          alignItems: 'center',
          display: 'flex',
          flexDirection: {
            xs: 'column-reverse',
            md: 'row'
          },
          justifyContent: 'center',
          maxWidth: 1920,
          mx: 'auto',
          width: '100%'
        } }
      >
        <Box
          className="LandingSection-content"
          sx={ {
            flex: { md: 1 },
            minWidth: { md: '50%', lg: '40%' },
            px: { md: 4 },
            textAlign: 'center'
          } }
        >
          <Typography className="LandingSection-title" variant="h3" sx={ { mb: 3 } }>
            { title }
          </Typography>

          <Typography className="LandingSection-description" variant="body1" sx={ { mb: 3 } }>
            { description }
          </Typography>

          { extraText && (
            <Typography className="LandingSection-description" variant="body1" sx={ { mb: 3 } }>
              { extraText }
            </Typography>
          ) }

          <Link href={ path } passHref>
            <Button className="LandingSection-cta" variant="contained" size="large">
              { callToAction }
            </Button>
          </Link>
        </Box>

        <Box
          className="LandingSection-pictureWrapper"
          sx={ {
            alignItems: 'center',
            display: 'flex',
            justifyContent: 'center',
            pb: {
              xs: 3,
              md: 0
            },
            '&, & *': { borderRadius: 2 }
          } }
        >
          <Box
            className="LandingSection-pictureFrame"
            sx={ {
              alignItems: 'center',
              backgroundColor: ({ palette }: Theme) =>
                palette.mode === 'light' ? 'background.paper' : undefined,
              border: ({ palette }: Theme) =>
                `1px solid ${ palette.mode === 'light' ? BRAND_COLOR : palette.common.white }`,
              display: 'flex',
              justifyContent: 'center',
              p: 0.5
            } }
          >
            <Image
              alt=""
              className="LandingSection-picture"
              height={ imgHeight }
              src={ picture.replace('{{lang}}', i18n.language) }
              width={ imgWidth }
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default LandingSection;
