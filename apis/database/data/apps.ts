import { App, BrandId } from '../../../types';
import { brands } from './brands';

const begodeApp: App = {
  id: BrandId.begode,
  name: brands.begode.name,
  url: brands.begode.website,
  platforms: {
    android: {
      logo: '/logos/apps/begode-android.png',
      url: 'http://www.begode.com/filedownload/66859'
    },
    iOS: {
      logo: '/logos/apps/begode-iOS.png',
      url: 'https://apps.apple.com/us/app/begode/id1549181193'
    }
  }
};

const inmotionApp: App = {
  id: BrandId.inmotion,
  name: brands.inmotion.name,
  url: brands.inmotion.website,
  platforms: {
    android: {
      logo: '/logos/apps/inmotion-android.webp',
      url: 'https://play.google.com/store/apps/details?id=com.inmotion.android.app'
    },
    iOS: {
      logo: '/logos/apps/inmotion-iOS.png',
      url: 'https://apps.apple.com/us/app/inmotion/id1452771445'
    }
  }
};

const kingsongApp: App = {
  id: BrandId.kingsong,
  name: brands.kingsong.name,
  url: brands.kingsong.website,
  platforms: {
    android: {
      logo: '/logos/apps/kingsong-android.webp',
      url: 'https://play.google.com/store/apps/details?id=com.kingsong.dlc'
    },
    iOS: {
      logo: '/logos/apps/kingsong-iOS.png',
      url: 'https://apps.apple.com/us/app/king-song/id1497491652'
    }
  }
};

const eucWorldApp: App = {
  id: 'eucWorld',
  name: 'EUC World',
  url: 'https://euc.world/',
  platforms: {
    android: {
      logo: '/logos/apps/eucWorld-android.webp',
      url: 'https://play.google.com/store/apps/details?id=net.lastowski.eucworld'
    }
  }
};

const darknessBotApp: App = {
  id: 'darknessBot',
  name: 'Darkness Bot',
  url: 'http://darknessproduction.com/en/#darknessbot',
  platforms: {
    iOS: {
      logo: '/logos/apps/darknessBot-iOS.png',
      url: 'https://apps.apple.com/us/app/darknessbot/id1108403878'
    }
  }
};

export const apps = [
  begodeApp,
  inmotionApp,
  kingsongApp,
  eucWorldApp,
  darknessBotApp
];