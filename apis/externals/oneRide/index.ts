import { oneRideHttp } from '../../../utils';
import { parseOneRidePrice } from '../../../utils/scrapper';

const getPrice = async (url: string): Promise<number | '-' | undefined> => {
  try {
    const response = await oneRideHttp.get(url);
    const price = parseOneRidePrice(response.data);
    return price;
  } catch (error) {
    return undefined;
  }
};

const oneRideApi = { getPrice };

export default oneRideApi;