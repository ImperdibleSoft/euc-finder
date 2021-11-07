import { myEWheelHttp } from '../../utils';
import { parseMyEWheelPrice } from '../../utils/scrapper';

const getPrice = async (url: string, expensive: boolean): Promise<number | '-' | undefined> => {
  try {
    const response = await myEWheelHttp.get(url);
    const price = parseMyEWheelPrice(response.data, expensive);
    return price;
  } catch (error) {
    return undefined;
  }
};

const myEWheelApi = { getPrice };

export default myEWheelApi;