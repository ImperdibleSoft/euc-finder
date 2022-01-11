import { smartWheelHttp } from '../../../utils';
import { parseSmartWheelPrice } from '../../../utils/scrapper';

const getPrice = async (url: string): Promise<number | '-' | undefined> => {
  try {
    const response = await smartWheelHttp.get(url);
    const price = parseSmartWheelPrice(response.data);
    return price;
  } catch {
    return undefined;
  }
};

const smartWheelApi = { getPrice };

export default smartWheelApi;