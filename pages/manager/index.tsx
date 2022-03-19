import React from 'react';
import { getTranslationsFromFiles } from '../../utils-server';

const Manager: React.FC = () => {
  return (
    <div />
  );
};

export default Manager;

export const getStaticProps = getTranslationsFromFiles([], 'none');
