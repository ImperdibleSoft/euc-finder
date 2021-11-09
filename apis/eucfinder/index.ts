import { http } from '../../utils';

const getCiclonicPrice = async (url: string, expensive: boolean): Promise<number | undefined> => {
  try {
    const expensiveParam = expensive ? '?expensive=true' : '';
    const response = await http.get(`/api/ciclonic/${ encodeURIComponent(url) }${ expensiveParam }`);
    return response.data as number | undefined;
  } catch {
    return undefined;
  }
};

const getEucoPrice = async (url: string): Promise<number | '-' | undefined> => {
  try {
    const response = await http.get(`/api/euco/${ encodeURIComponent(url) }`);
    return response.data as number | '-' | undefined;
  } catch {
    return undefined;
  }
};

const getEucSalePrice = async (url: string): Promise<number | '-' | undefined> => {
  try {
    const response = await http.get(`/api/eucSale/${ encodeURIComponent(url) }`);
    return response.data as number | '-' | undefined;
  } catch {
    return undefined;
  }
};

const getEucServicePrice = async (url: string): Promise<number | '-' | undefined> => {
  try {
    const response = await http.get(`/api/eucService/${ encodeURIComponent(url) }`);
    return response.data as number | '-' | undefined;
  } catch {
    return undefined;
  }
};

const getEwheelsPrice = async (url: string, expensive: boolean): Promise<number | '-' | undefined> => {
  try {
    const expensiveParam = expensive ? '?expensive=true' : '';
    const response = await http.get(`/api/ewheels/${ encodeURIComponent(url) }}${ expensiveParam }`);
    return response.data as number | '-' | undefined;
  } catch {
    return undefined;
  }
};

const getInmotionFrancePrice = async (url: string): Promise<number | undefined> => {
  try {
    const response = await http.get(`/api/inmotionFrance/${ encodeURIComponent(url) }`);
    return response.data as number | undefined;
  } catch {
    return undefined;
  }
};

const getMyEWheelPrice = async (url: string): Promise<number | '-' | undefined> => {
  try {
    const response = await http.get(`/api/myewheel/${ encodeURIComponent(url) }`);
    return response.data as number | '-' | undefined;
  } catch {
    return undefined;
  }
};

const getUrban360Price = async (url: string, expensive: boolean): Promise<number | '-' | undefined> => {
  try {
    const expensiveParam = expensive ? '?expensive=true' : '';
    const response = await http.get(`/api/urban360/${ encodeURIComponent(url) }${ expensiveParam }`);
    return response.data as number | '-' | undefined;
  } catch {
    return undefined;
  }
};

const eucFinderApi = {
  getCiclonicPrice,
  getEucoPrice,
  getEucSalePrice,
  getEucServicePrice,
  getEwheelsPrice,
  getInmotionFrancePrice,
  getMyEWheelPrice,
  getUrban360Price
};

export default eucFinderApi;