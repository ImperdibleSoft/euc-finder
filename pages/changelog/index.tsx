import { Box, Card, CardContent, Container, Divider, Typography } from '@mui/material';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Head from 'next/head';
import React from 'react';
import { TFunction, useTranslation } from 'react-i18next';
import SimpleLayout from '../../components/Layouts/SimpleLayout';
import { APP_NAME, KEYWORDS } from '../../constants';
import nextI18nextConfig from '../../next-i18next.config';
import { StaticProps } from '../../utils-server';
import { getChangelogFromMarkdown, Version } from '../../utils/changelog';

const changeTypes = ['major', 'minor', 'patch'] as (keyof Version)[];

const getChangeTypeTitle = (changeType: keyof Version, t: TFunction<'translate'>): string => {
  switch (changeType) {
    case 'major':
      return t('majorChange');

    case 'minor':
      return t('minorChange');

    case 'patch':
    default:
      return t('patchChange');
  }
};

const Changelog: React.FC = () => {
  const { t } = useTranslation();
  const { t: changesT } = useTranslation('changelog');
  
  const versions = getChangelogFromMarkdown();

  const pageTitle = t('changelog-title');

  return (
    <>
      <Head>
        <title>{ `${ pageTitle } - ${ APP_NAME }` }</title>

        <meta name="keywords" content={ KEYWORDS.join(', ') } />

        <meta property="og:type" content="website" />
        <meta property="og:title" content={ pageTitle } />
        <meta property="og:image" content={ require('/public/assets/ogImage.png').default?.src } />
        <meta property="og:image:alt" content={ t('appLogo-label', { appName: APP_NAME }) } />
      </Head>

      <SimpleLayout>
        <Typography variant="h4" component="h1" sx={ { mb: 3 } }>
          { pageTitle }
        </Typography>
        
        <Container maxWidth="md" sx={ { px: { xs: 0, sm: 0, md: 0, lg: 0, xl: 0 } } }>
          <Card>
            <CardContent>
              { versions.map((version, index) => (
                <Box
                  key={ version.versionName }
                  sx={ { mb: index >= (versions.length - 1) ? 0 : 2 } }
                >
                  <Typography variant="h5" component="h3" sx={ { mb: 1 } }>
                    v{ version.versionName }
                  </Typography>

                  { changeTypes.map(key => {
                    if (!version[key].length) {
                      return null;
                    }
                  
                    return (
                      <React.Fragment key={ `${ version.versionName }-${ key }` }>
                        <Typography variant="h6" component="p" sx={ { mb: 1, mt: 2 } }>
                          { t('changes-title', { changeType: getChangeTypeTitle(key, t) }) }
                        </Typography>
      
                        <ul>
                          { (version[key] as string[]).map(change => (
                            <li key={ change }>{ changesT(change) }.</li>
                          )) }
                        </ul>
      
                        { index < changeTypes.length - 1 && (
                          <Divider />
                        ) }
                      </React.Fragment>
                    );
                  }) }
                </Box>
              )) }
            </CardContent>
          </Card>
        </Container>
      </SimpleLayout>
    </>
  );
};

export default Changelog;

export async function getStaticProps({ locale }: StaticProps) {
  const translations = await serverSideTranslations(locale, ['common', 'changelog'], nextI18nextConfig);
  return { props: { ...translations } };
}
