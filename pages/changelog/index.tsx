import { Card, CardContent, Container, Divider, Typography } from '@mui/material';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import React from 'react';
import { TFunction, useTranslation } from 'react-i18next';
import SimpleLayout from '../../components/Layouts/SimpleLayout';
import nextI18nextConfig from '../../next-i18next.config';
import { getStaticProps, StaticProps } from '../../utils-server';
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

  return (
    <SimpleLayout>
      <Typography variant="h4" component="h1" sx={ { mb: 3 } }>
        { t('changelog-title') }
      </Typography>
      
      <Container maxWidth="md">
        { versions.map(version => (
          <Card key={ version.versionName }>
            <CardContent>
              <Typography variant="h5" component="h3" sx={ { mb: 1 } }>
                v{ version.versionName }
              </Typography>

              { changeTypes.map((key, index) => {
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
                );}) }
            </CardContent>
          </Card>
        )) }
      </Container>
    </SimpleLayout>
  );
};

export default Changelog;

export async function getStaticProps({ locale }: StaticProps) {
  const translations = await serverSideTranslations(locale, ['common', 'changelog'], nextI18nextConfig);
  return { props: { ...translations } };
}
