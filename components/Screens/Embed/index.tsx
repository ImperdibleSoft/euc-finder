import { Box, ThemeProvider } from '@mui/material';
import Head from 'next/head';
import React, { PropsWithChildren, useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useAppData } from '../../../hooks';
import { setMeasureUnit } from '../../../store/actions';
import { getTheme } from '../../../store/selectors';
import { darkTheme, lightTheme } from '../../../styles/theme';
import { isDarkTheme } from '../../../utils';
import { AvailableQueryParams } from '../../../utils/routing';
import LoadingScreen from '../LoadingScreen';

const EmbedWrapper = ({
  children,
  dark,
  diameter,
  dimensions,
  groundClearance,
  maxSpeed,
  range,
  weight,
  width
}: PropsWithChildren<AvailableQueryParams>): JSX.Element => {
  const dispatch = useDispatch();
  const themeName = useSelector(getTheme);
  const themeColorPalette = useMemo(() =>
    (dark || isDarkTheme(themeName))
      ? darkTheme
      : lightTheme,
  [dark, themeName]);
  const { configData, initialData } = useAppData();

  const idle = configData === 'idle' && initialData === 'idle';
  const loading = configData === 'loading' || initialData === 'loading';
  const ready = !idle && !loading;

  useEffect(() => {
    dispatch(setMeasureUnit({ key: 'diameter', value: diameter }));
    dispatch(setMeasureUnit({ key: 'dimensions', value: dimensions }));
    dispatch(setMeasureUnit({ key: 'groundClearance', value: groundClearance }));
    dispatch(setMeasureUnit({ key: 'maxSpeed', value: maxSpeed }));
    dispatch(setMeasureUnit({ key: 'range', value: range }));
    dispatch(setMeasureUnit({ key: 'weight', value: weight }));
    dispatch(setMeasureUnit({ key: 'width', value: width }));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Head>
        <style dangerouslySetInnerHTML={ {
          __html: `
          html, body, body > div:first-child {
            height: 100%;
          }
        `
        } }></style>
      </Head>
      
      <ThemeProvider theme={ themeColorPalette }>
        <Box
          id="EmbedWrapper"
          sx={ {
            display: 'flex',
            flex: 1,
            flexDirection: 'row',
            minHeight: '100%'
          } }
        >
          { loading && (
            <LoadingScreen />
          ) }

          { ready && (
            <>
              { children }
            </>
          ) }
        </Box>
      </ThemeProvider>
    </>
  );
};

export default EmbedWrapper;

