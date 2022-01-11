import fs from 'fs';
import path from 'path';
import { BrandId, WheelId } from '../types';

export const getWheelPictures = (): Record<WheelId, string[]> => {
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

export const getFirstWheelPicture = (): Record<WheelId, string> => {
  const pictures = {};
  const allPictures = getWheelPictures();

  Object.keys(allPictures).forEach(key => {
    const wheelId = key as WheelId;
    (pictures as Record<WheelId, string>)[wheelId] = allPictures[wheelId][0];
  });

  return pictures as Record<WheelId, string>;
};