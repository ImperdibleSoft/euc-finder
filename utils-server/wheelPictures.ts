import fs from 'fs';
import path from 'path';
import { BrandId, WheelId } from '../types';

export const getWheelPictures = (brandId: BrandId, id: WheelId): string[] => {
  try {
    const cleanWheelId = id
      // HT or HS
      .replace(/H(T|S)$/, '')

      // 100v versions
      .replace(/100$/, '')

      // 16 or 18 inches
      .replace(/recioWheel1(6|8)$/, 'recioWheel')

      // 16xs and 16x
      .replace(/16xs$/, '16x')

      // vXX and vXXf versions
      .replace(/f$/, '')
      
      // Max versions
      .replace(/Max$/, '');
    const relativePath = `/pictures/wheels/${ brandId }/${ cleanWheelId }/`;
    const absolutePath = path.join(process.cwd(), 'public', relativePath);

    const fileNames = fs.readdirSync(absolutePath);

    return fileNames.map(file => `${ relativePath }${ file }`);
  } catch (error) {
    return ['/favicon/maskable_icon_x512.png'];
  }
};
