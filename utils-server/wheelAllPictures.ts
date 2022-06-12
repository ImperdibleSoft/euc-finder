import fs from 'fs';
import path from 'path';
import { BrandId, WheelId } from '../types';

export const getAllWheelPictures = (): Record<WheelId, string[]> => {
  const relativePath = `/pictures/wheels`;
  const absolutePath = path.join(process.cwd(), 'public', relativePath);
  
  const pictures = {};
  
  const brandFolders = fs.readdirSync(absolutePath) as BrandId[];
  brandFolders.forEach(brandFolder => {
    const folderPath = `${ absolutePath }/${ brandFolder }`;
    const wheelFolders = fs.readdirSync(folderPath) as WheelId[];
  
    wheelFolders.forEach(wheelFolder => {
      const wheelPath = `${ folderPath }/${ wheelFolder }`;
      const wheelPictures = fs.readdirSync(wheelPath);
  
      (pictures as Record<WheelId, string[]>)[wheelFolder] = wheelPictures.length
        ? wheelPictures.map(fileName => `${ relativePath }/${ brandFolder }/${ wheelFolder }/${ fileName }`)
        : ['/favicon/maskable_icon_x512.png'];
    });
  });
  
  return pictures as Record<WheelId, string[]>;
};
