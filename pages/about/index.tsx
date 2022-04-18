/* eslint-disable max-lines */
import {
  Box,
  Card,
  CardContent,
  List,
  ListItem,
  ListItemText,
  Paper,
  SxProps,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Theme,
  Typography
} from '@mui/material';
import Head from 'next/head';
import Image from 'next/image';
import React from 'react';
import InstagramChip from '../../components/InstagramChip';
import SimpleLayout from '../../components/Layouts/SimpleLayout';
import { APP_NAME, KEYWORDS } from '../../constants';
import { useAboutTranslations, useBreakpoints } from '../../hooks';
import { BRAND_COLOR } from '../../styles/theme';
import { TranslationFile } from '../../types';
import { getTranslationsFromFiles } from '../../utils-server';

const tableData = [
  {
    task: 'design-label',
    responsible: 'rafa.pgarcia',
    contributors: ['fabien.wheel', 'bonheursurseine']
  },
  {
    task: 'develop-label',
    responsible: 'rafa.pgarcia'
  },
  {
    task: 'research-label',
    responsible: 'rafa.pgarcia',
    contributors: ['reciodvd', 'fabien.wheel']
  },
  {
    task: 'wording-label',
    responsible: 'rafa.pgarcia',
    contributors: ['fabien.wheel', 'bonheursurseine']
  },
  {
    task: 'englishTranslations-label',
    responsible: 'rafa.pgarcia'
  },
  {
    task: 'spanishTranslations-label',
    responsible: 'rafa.pgarcia'
  },
  {
    task: 'frenchTranslations-label',
    responsible: 'fabien.wheel',
    contributors: ['bonheursurseine']
  }
];

const cellStyles: SxProps<Theme> = { verticalAlign: 'top' };

// eslint-disable-next-line max-lines-per-function
const AboutPage = (): JSX.Element => {
  const { t } = useAboutTranslations();
  const { sm } = useBreakpoints();

  const pageTitle = t('about-title');
  const [descStart, descEnd] = t('about1-msg', { appName: APP_NAME }).split('::author::');
  const pageDescription = `${ descStart }Rafael Pérez${ descEnd }`;

  return (
    <>
      <Head>
        <title>{ `${ pageTitle } - ${ APP_NAME }` }</title>
        <meta name="description" content={ pageDescription.replace(':author:', 'Rafael Pérez') } />

        <meta name="keywords" content={ KEYWORDS.join(', ') } />

        <meta property="og:type" content="website" />
        <meta property="og:title" content={ pageTitle } />
        <meta property="og:description" content={ pageDescription.replace(':author:', 'Rafael Pérez') } />
        <meta property="og:image" content={ require('/public/assets/ogImage.png').default?.src } />
        <meta property="og:image:alt" content={ t('appLogo-label', { appName: APP_NAME }) } />
      </Head>

      <SimpleLayout>
        <Typography variant="h4" component="h1" sx={ { mb: 3 } }>
          { t('about-title') }
        </Typography>
        
        <Box sx={ { display: 'flex' } }>
          <Box sx={ { flex: 1 } }>
            <Typography variant="body1" sx={ { mb: 3 } }>
              { descStart } <InstagramChip userName="rafa.pgarcia" />{ descEnd }
            </Typography>

            <Typography variant="body1" sx={ { mb: 3 } }>
              { t('about2-msg') }
            </Typography>

            <Typography variant="body1" sx={ { mb: 3 } }>
              { t('about3-msg') }
            </Typography>
          </Box>

          <Box sx={ { display: { xs: 'none', md: 'block' }, pl: 3 } }>
            <Image
              alt=""
              height={ 192 }
              src="/favicon/maskable_icon_x192.png"
              width={ 192 }
            />
          </Box>
        </Box>

        <Typography variant="h4" component="h1" sx={ { mb: 3 } }>
          { t('credits-title') }
        </Typography>

        <Typography variant="body1" sx={ { mb: 3 } }>
          { t('credits1-msg', { appName: APP_NAME }) }
        </Typography>

        <Typography variant="body1" sx={ { mb: 3 } }>
          { t('credits2-msg', { appName: APP_NAME }) }
        </Typography>

        { !sm && (
          <>
            { tableData.map(row => (
              <Card key={ row.task } sx={ { mb: 3 } }>
                <CardContent sx={ { '&:last-of-type': { pb: 1 } } }>
                  <Typography variant="h5" component="div">
                    { t(row.task) }
                  </Typography>

                  <List sx={ { py: 0 } }>
                    <ListItem sx={ { px: 0 } }>
                      <ListItemText>
                        { t('responsible-label') }
                        <InstagramChip margins userName={ row.responsible } />
                      </ListItemText>
                    </ListItem>

                    { row.contributors && row.contributors.length > 0 && (
                      <ListItem sx={ { px: 0 } }>
                        <ListItemText>
                          { t('contributors-label') }

                          { row.contributors.map(contributor => (
                            <InstagramChip key={ contributor } margins userName={ contributor } />
                          )) }
                        </ListItemText>
                      </ListItem>
                    ) }
                  </List>
                </CardContent>
              </Card>
            )) }
          </>
        ) }

        { sm && (
          <TableContainer component={ Paper } sx={ { maxWidth: 800, mx: 'auto' } }>
            <Table>
              <TableHead>
                <TableRow
                  sx={ {
                    bgcolor: BRAND_COLOR,
                    '& .MuiTableCell-root': { color: ({ palette }: Theme) => palette.getContrastText(BRAND_COLOR) }
                  } }
                >
                  <TableCell>{ t('task-label') }</TableCell>
                  <TableCell>{ t('responsible-label') }</TableCell>
                  <TableCell>{ t('contributors-label') }</TableCell>
                </TableRow>
              </TableHead>

              <TableBody>
                { tableData.map(row => (
                  <TableRow
                    key={ row.task }
                    sx={ { '&:nth-of-type(even)': { bgcolor: ({ palette }: Theme) => palette.action.hover } } }
                  >
                    <TableCell sx={ cellStyles }>
                      { t(row.task) }
                    </TableCell>

                    <TableCell sx={ cellStyles }>
                      <InstagramChip userName={ row.responsible } />
                    </TableCell>
                  
                    <TableCell sx={ cellStyles }>
                      { row.contributors?.map(contributor => (
                        <InstagramChip key={ contributor } margins userName={ contributor } />
                      )) }
                    </TableCell>
                  </TableRow>
                )) }
              </TableBody>
            </Table>
          </TableContainer>
        ) }
      </SimpleLayout>
    </>
  );
};

export default AboutPage;

export const getStaticProps = getTranslationsFromFiles([TranslationFile.about], 'none');

