/* eslint-disable max-lines */
import { Box, Button, Card, CardContent, CardMedia, Link, Typography } from '@mui/material';
import React from 'react';
import { useSelector } from 'react-redux';
import RegularList from '../../components/Lists/RegularList';
import { ListItem } from '../../components/Lists/types';
import Logotype from '../../components/Logotype';
import { APP_URL, wheelFeatureFormatters, wheelFeatureIcons } from '../../constants';
import { EUC_FINDER_DETAILS } from '../../constants/clientRoutes';
import { commonNs, useEmbedTranslations } from '../../hooks';
import {
  getBrands,
  getMaxCurrentAllowed,
  getMeasureUnits,
  getTableViewSpecs,
  getWheelById
} from '../../store/selectors';
import { TranslationFile, WheelFeatureFormatters, WheelFeatureIcons, WheelId } from '../../types';
import { cleanWheelId, formatWheelName, getFormatterValue } from '../../utils';
import { getTranslationsFromFiles } from '../../utils-server';
import { AvailableQueryParams } from '../../utils/routing';

const defaultFeatures: string[] = ['diameter', 'maxSpeed', 'range', 'weight'];

interface Props extends AvailableQueryParams {
  pictures: Record<WheelId, string>;
}

const Embed = ({
  dark,
  features = defaultFeatures,
  lang,
  limits,
  picture,
  pictures,
  title,
  wheelId = WheelId.v12
}: Props): JSX.Element => {
  const { t } = useEmbedTranslations();
  const specColumns = useSelector(getTableViewSpecs);
  const brands = useSelector(getBrands);
  const measureUnits = useSelector(getMeasureUnits);
  const maxCurrentAllowed = useSelector(getMaxCurrentAllowed);
  const wheel = useSelector(getWheelById(wheelId ?? WheelId.ksS22));

  const appUrl = `${ APP_URL }/${ lang }`;
  const wheelUrl = `${ appUrl }${ EUC_FINDER_DETAILS.replace(':id', wheelId) }`;
  const wheelName = wheel ? formatWheelName(wheel, brands) : '';
  const wheelPicture = pictures[cleanWheelId(wheelId)];

  const items = specColumns
    .map(key => {
      if (!wheel || !features.includes(key)) {
        return undefined;
      }

      const icon = wheelFeatureIcons[key as keyof WheelFeatureIcons];
      const label = t(key, commonNs);
      const formatter = wheelFeatureFormatters[key as keyof WheelFeatureFormatters];
      // @ts-ignore
      // eslint-disable-next-line no-restricted-syntax
      const convertTo = key in measureUnits ? measureUnits[key] : undefined;
      const formatterValue = getFormatterValue(wheel, key, { brands, maxCurrentAllowed });
      const value = formatter?.(formatterValue, t, convertTo, key === 'width' ? 2 : 0) ?? wheel[key];

      return {
        icon,
        iconProps: { active: !!formatterValue && value && value !== '-' },
        primary: label,
        secondary: value
      };
    })
    .filter(item => !!item) as ListItem[];

  return (
    <Box
      sx={ {
        alignItems: 'flex-start',
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        justifyContent: 'center',
        minWidth: 250,
        p: limits ? 2 : 0,
        width: '100%'
      } }
    >
      <Card variant="outlined" sx={ { width: '100%' } }>
        <CardContent sx={ { pt: 0, textAlign: 'center' } }>
          <Box
            sx={ {
              alignItems: 'center',
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'center'
            } }
          >
            <Typography variant="caption">
              { t('poweredBy-msg') }
            </Typography>
            <Link
              target="_blank"
              href={ appUrl }
              hrefLang={ lang }
              sx={ { textDecoration: 'none' } }
            >
              <Logotype darkBg={ dark } icon text />
            </Link>
          </Box>

          { !wheel && (
            <Typography>
              { t('invalidId-msg') }
            </Typography>
          ) }

          { !!wheel && (
            <>
              { (picture && !!wheelPicture) && (
                <CardMedia
                  alt={ t('wheelPicture-msg', { ...commonNs, wheelName }) }
                  component="img"
                  src={ wheelPicture }
                  sx={ { maxWidth: 320, mx: 'auto' } }
                />
              ) }

              { title && (
                <Typography variant="h5" component="p" sx={ { mt: 1.5 } }>
                  { wheelName }
                </Typography>
              ) }

              <RegularList dense items={ items } />

              <Button
                variant="contained"
                href={ wheelUrl }
                hrefLang={ lang }
                target="_blank"
              >
                { t('fullDetails-btn') }
              </Button>
            </>
          ) }
        </CardContent>
      </Card>
    </Box>
  );
};

export default Embed;

export const getStaticProps = getTranslationsFromFiles([TranslationFile.embed], 'first');
