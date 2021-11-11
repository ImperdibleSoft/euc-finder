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

export const alienRidesHttp = createInstance({
  headers: {
    Origin: 'https://alienrides.com/',
    Referer: 'https://alienrides.com/'
  }
});

export const ciclonicHttp = createInstance({
  headers: {
    Origin: 'https://ciclonic.es/',
    Referer: 'https://ciclonic.es/'
  }
});

export const eeveesHttp = createInstance({
  headers: {
    Origin: 'https://eevees.com/',
    Referer: 'https://eevees.com/'
  }
});

export const eucoHttp = createInstance({
  headers: {
    Origin: 'https://www.euco.us/',
    Referer: 'https://www.euco.us/'
  }
});

export const ewheelsHttp = createInstance({
  headers: {
    Origin: 'https://www.ewheels.com/',
    Referer: 'https://www.ewheels.com/'
  }
});

export const inmotionFranceHttp = createInstance({
  headers: {
    Origin: 'https://www.inmotion-france.fr/',
    Referer: 'https://www.inmotion-france.fr/'
  }
});

export const myEWheelHttp = createInstance({
  headers: {
    Origin: 'https://myewheel.com/',
    Referer: 'https://myewheel.com/'
  }
});

export const smartWheelHttp = createInstance({
  headers: {
    Origin: 'https://www.smartwheel.ca/',
    Referer: 'https://www.smartwheel.ca/'
  }
});

export const urban360Http = createInstance({
  headers: {
    Origin: 'https://store.urban360.es/',
    Referer: 'https://store.urban360.es/'
  }
});