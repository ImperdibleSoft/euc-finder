import { ServerResponse } from 'http';
import React from 'react';
import { wheels } from '../apis/database/data';
import { DEALERS, EUC_COMPARE, EUC_DETAILS, INFLUENCERS, SETTINGS, VIDEOS } from '../constants/clientRoutes';

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
        return 'https://www.eucfinder.com';
    }
  };

  const baseUrl = getBaseUrl();

  const mainPages = ['', EUC_COMPARE, VIDEOS, INFLUENCERS, DEALERS, SETTINGS]
    .map((staticPagePath) => `${ baseUrl }${ staticPagePath }`);
  const wheelsPages = wheels.map((wheel) => `${ baseUrl }${ EUC_DETAILS.replace(':id', wheel.id) }`);

  const staticPages = [...mainPages, ...wheelsPages];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${ staticPages.map((url) => `<url>
      <loc>${ url }</loc>
      <lastmod>${ new Date().toISOString() }</lastmod>
      <changefreq>monthly</changefreq>
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