import { App, BrandId } from '../../../types';
import { brands } from './brands';

export const begodeApp: App = {
  id: BrandId.begode,
  name: brands.begode.name,
  url: brands.begode.website,
  platforms: {
    android: 'http://www.begode.com/filedownload/66859',
    iOS: 'https://apps.apple.com/us/app/begode/id1549181193'
  }
};

export const inmotionApp: App = {
  id: BrandId.inmotion,
  name: brands.inmotion.name,
  url: brands.inmotion.website,
  platforms: {
    android: 'https://play.google.com/store/apps/details?id=com.inmotion.android.app',
    iOS: 'https://apps.apple.com/us/app/inmotion/id1452771445'
  }
};

export const kingsongApp: App = {
  id: BrandId.kingsong,
  name: brands.kingsong.name,
  url: brands.kingsong.website,
  platforms: {
    android: 'https://play.google.com/store/apps/details?id=com.kingsong.dlc',
    iOS: 'https://apps.apple.com/us/app/king-song/id1497491652'
  }
};

export const eucWorldApp: App = {
  id: 'eucWorld',
  name: 'EUC World',
  url: 'https://euc.world/',
  platforms: { android: 'https://play.google.com/store/apps/details?id=net.lastowski.eucworld' }
};

export const darknessBotApp: App = {
  id: 'darknessBot',
  name: 'Darkness Bot',
  url: 'http://darknessproduction.com/en/#darknessbot',
  platforms: { iOS: 'https://apps.apple.com/us/app/darknessbot/id1108403878' }
};