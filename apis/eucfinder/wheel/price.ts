import { http } from '../../../utils';

const getAlienRidesPrice = async (url: string, expensive: boolean): Promise<number | undefined> => {
  try {
    const expensiveParam = expensive ? '?expensive=true' : '';
    const response = await http.get(`/api/externals/alienRides/${ encodeURIComponent(url) }${ expensiveParam }`);
    return response.data as number | undefined;
  } catch {
    return undefined;
  }
};

const getCiclonicPrice = async (url: string, expensive: boolean): Promise<number | undefined> => {
  try {
    const expensiveParam = expensive ? '?expensive=true' : '';
    const response = await http.get(`/api/externals/ciclonic/${ encodeURIComponent(url) }${ expensiveParam }`);
    return response.data as number | undefined;
  } catch {
    return undefined;
  }
};

const getEeveesPrice = async (url: string): Promise<number | '-' | undefined> => {
  try {
    const response = await http.get(`/api/externals/eevees/${ encodeURIComponent(url) }`);
    return response.data as number | '-' | undefined;
  } catch {
    return undefined;
  }
};

const getERidesPrice = async (url: string): Promise<number | '-' | undefined> => {
  try {
    const response = await http.get(`/api/externals/eRides/${ encodeURIComponent(url) }`);
    return response.data as number | '-' | undefined;
  } catch {
    return undefined;
  }
};

const getEucoPrice = async (url: string): Promise<number | '-' | undefined> => {
  try {
    const response = await http.get(`/api/externals/euco/${ encodeURIComponent(url) }`);
    return response.data as number | '-' | undefined;
  } catch {
    return undefined;
  }
};

const getEucSalePrice = async (url: string): Promise<number | '-' | undefined> => {
  try {
    const response = await http.get(`/api/externals/eucSale/${ encodeURIComponent(url) }`);
    return response.data as number | '-' | undefined;
  } catch {
    return undefined;
  }
};

const getEucServicePrice = async (url: string): Promise<number | '-' | undefined> => {
  try {
    const response = await http.get(`/api/externals/eucService/${ encodeURIComponent(url) }`);
    return response.data as number | '-' | undefined;
  } catch {
    return undefined;
  }
};

const getEwheelsPrice = async (url: string, expensive: boolean): Promise<number | '-' | undefined> => {
  try {
    const expensiveParam = expensive ? '?expensive=true' : '';
    const response = await http.get(`/api/externals/ewheels/${ encodeURIComponent(url) }}${ expensiveParam }`);
    return response.data as number | '-' | undefined;
  } catch {
    return undefined;
  }
};

const getInmotionFrancePrice = async (url: string): Promise<number | undefined> => {
  try {
    const response = await http.get(`/api/externals/inmotionFrance/${ encodeURIComponent(url) }`);
    return response.data as number | undefined;
  } catch {
    return undefined;
  }
};

const getMadridRuedaPrice = async (url: string, expensive: boolean): Promise<number | '-' | undefined> => {
  try {
    const expensiveParam = expensive ? '?expensive=true' : '';
    const response = await http.get(`/api/externals/madridRueda/${ encodeURIComponent(url) }${ expensiveParam }`);
    return response.data as number | '-' | undefined;
  } catch {
    return undefined;
  }
};

const getMyEWheelPrice = async (url: string): Promise<number | '-' | undefined> => {
  try {
    const response = await http.get(`/api/externals/myewheel/${ encodeURIComponent(url) }`);
    return response.data as number | '-' | undefined;
  } catch {
    return undefined;
  }
};

const getRevRidesPrice = async (url: string, expensive: boolean): Promise<number | '-' | undefined> => {
  try {
    const expensiveParam = expensive ? '?expensive=true' : '';
    const response = await http.get(`/api/externals/revRides/${ encodeURIComponent(url) }${ expensiveParam }`);
    return response.data as number | '-' | undefined;
  } catch {
    return undefined;
  }
};

const getSmartWheelPrice = async (url: string, expensive: boolean): Promise<number | '-' | undefined> => {
  try {
    const expensiveParam = expensive ? '?expensive=true' : '';
    const response = await http.get(`/api/externals/smartWheel/${ encodeURIComponent(url) }${ expensiveParam }`);
    return response.data as number | '-' | undefined;
  } catch {
    return undefined;
  }
};

const getUrban360Price = async (url: string, expensive: boolean): Promise<number | '-' | undefined> => {
  try {
    const expensiveParam = expensive ? '?expensive=true' : '';
    const response = await http.get(`/api/externals/urban360/${ encodeURIComponent(url) }${ expensiveParam }`);
    return response.data as number | '-' | undefined;
  } catch {
    return undefined;
  }
};

export const price = {
  /**
   * Get wheel's parsed price from AlienRides
   */
  getAlienRidesPrice,
  /**
   * Get wheel's parsed price from Ciclonic
   */
  getCiclonicPrice,
  /**
   * Get wheel's parsed price from Eevees
   */
  getEeveesPrice,
  /**
   * Get wheel's parsed price from ERides
   */
  getERidesPrice,
  /**
   * Get wheel's parsed price from Euco
   */
  getEucoPrice,
  /**
   * Get wheel's parsed price from EucSale
   */
  getEucSalePrice,
  /**
   * Get wheel's parsed price from EucService
   */
  getEucServicePrice,
  /**
   * Get wheel's parsed price from Ewheels
   */
  getEwheelsPrice,
  /**
   * Get wheel's parsed price from InmotionFrance
   */
  getInmotionFrancePrice,
  /**
   * Get wheel's parsed price from MadridRueda
   */
  getMadridRuedaPrice,
  /**
   * Get wheel's parsed price from MyEWheel
   */
  getMyEWheelPrice,
  /**
   * Get wheel's parsed price from RevRides
   */
  getRevRidesPrice,
  /**
   * Get wheel's parsed price from SmartWheel
   */
  getSmartWheelPrice,
  /**
   * Get wheel's parsed price from Urban360
   */
  getUrban360Price
};