import { Box, ThemeProvider } from '@mui/material';
import Head from 'next/head';
import React, { PropsWithChildren, useMemo } from 'react';
import { useSelector } from 'react-redux';
import { useAppData } from '../../../hooks';
import { getTheme } from '../../../store/selectors';
import { darkTheme, lightTheme } from '../../../styles/theme';
import { isDarkTheme } from '../../../utils';
import LoadingScreen from '../LoadingScreen';

interface Props {
  dark?: boolean;
}

const EmbedWrapper = ({ children, dark }: PropsWithChildren<Props>): JSX.Element => {
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

