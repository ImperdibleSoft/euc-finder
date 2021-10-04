const addResponsiveMeta = () => {
  const meta = document.createElement('meta');
  meta.name = 'viewport';
  meta.content = 'width=device-width, initial-scale=1.0, user-scalable=no';

  document.head.append(meta);
};

const addIconsFont = () => {
  const link = document.createElement('link');
  link.rel = 'stylesheet';
  link.href = 'https://fonts.googleapis.com/icon?family=Material+Icons';

  document.head.append(link);
};

export const init = () => {
  addResponsiveMeta();
  addIconsFont();
};