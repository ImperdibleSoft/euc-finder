const path = require('path');

module.exports = {
  reloadOnPrerender : process.env.NODE_ENV === 'development',
  i18n: {
    locales: ['en', 'es', 'fr'],
    defaultLocale: 'en',
    localePath: path.resolve('./public/locales')
  },
  react: {
    useSuspense: false,
    wait: true
  }
};
