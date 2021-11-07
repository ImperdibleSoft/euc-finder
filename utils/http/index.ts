import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';

const createInstance = (config?: AxiosRequestConfig): AxiosInstance =>
  axios.create({
    ...config,
    headers: {
      ...config?.headers,
      'Content-Type': 'application/json'
    }
  });

export const http = createInstance();

export const ciclonicHttp = createInstance({
  headers: {
    Origin: 'https://ciclonic.es/',
    Referer: 'https://ciclonic.es/'
  }
});

export const inmotionFranceHttp = createInstance({
  headers: {
    Origin: 'https://www.inmotion-france.fr',
    Referer: 'https://www.inmotion-france.fr/'
  }
});

export const myEWheelHttp = createInstance({
  headers: {
    Origin: 'https://myewheel.com/',
    Referer: 'https://myewheel.com/'
  }
});

export const urban360Http = createInstance({
  headers: {
    Origin: 'https://store.urban360.es/',
    Referer: 'https://store.urban360.es/'
  }
});