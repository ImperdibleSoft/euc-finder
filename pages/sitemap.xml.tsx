import { ServerResponse } from 'http';
import React from 'react';
import { wheels } from '../apis/database/data';
import { APP_URL } from '../constants';
import {
  ABOUT,
  CHANGELOG,
  DEALERS,
  EUC_COMPARATOR,
  EUC_FINDER,
  EUC_FINDER_DETAILS,
  INFLUENCERS,
  SETTINGS,
  VIDEOS
} from '../constants/clientRoutes';

const Sitemap: React.FC = () => null;

interface Props {
  res: ServerResponse
}

export const getServerSideProps = ({ res }: Props) => {
  const getBaseUrl = () => {
    switch (process.env.NODE_ENV) {
      case 'development':
        return 'http://localhost:3000';

      case 'production':
      default:
        return APP_URL;
    }
  };

  const baseUrl = getBaseUrl();

  const mainPages = [
    '',
    EUC_FINDER,
    EUC_COMPARATOR,
    VIDEOS,
    DEALERS,
    INFLUENCERS,
    SETTINGS,
    CHANGELOG,
    ABOUT
  ].map((staticPagePath) => `${ baseUrl }${ staticPagePath }`);
  const wheelsPages = wheels.map((wheel) => `${ baseUrl }${ EUC_FINDER_DETAILS.replace(':id', wheel.id) }`);

  const staticPages = [...mainPages, ...wheelsPages];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${ staticPages.map((url) => `<url>
      <loc>${ url }</loc>
      <lastmod>${ new Date().toISOString() }</lastmod>
      <changefreq>daily</changefreq>
      <priority>1.0</priority>
    </url>
    `).join('') }
  </urlset>`;

  res.setHeader('Content-Type', 'text/xml');
  res.write(sitemap);
  res.end();

  return { props: {} };
};

export default Sitemap;
