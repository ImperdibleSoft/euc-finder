import fs from 'fs';
import path from 'path';
import { BrandId, WheelId } from '../types';

export const getFirstWheelPicture = (): Record<WheelId, string> => {
  const relativePath = `/pictures/wheels`;
  const absolutePath = path.join(process.cwd(), 'public', relativePath);

  const pictures = {};

  const brandFolders = fs.readdirSync(absolutePath) as BrandId[];
  brandFolders.forEach(brandFolder => {
    const folderPath = `${ absolutePath }/${ brandFolder }`;
    const wheelFolders = fs.readdirSync(folderPath) as WheelId[];

    wheelFolders.forEach(wheelFolder => {
      const wheelPath = `${ folderPath }/${ wheelFolder }`;
      const wheelFirstPicture = fs.readdirSync(wheelPath)?.[0];

      (pictures as Record<WheelId, string>)[wheelFolder] = wheelFirstPicture
        ? `${ relativePath }/${ brandFolder }/${ wheelFolder }/${ wheelFirstPicture }`
        : '/favicon/maskable_icon_x512.png';
    });
  });

  return pictures as Record<WheelId, string>;
};
