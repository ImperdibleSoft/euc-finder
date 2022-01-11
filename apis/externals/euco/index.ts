import { eucoHttp } from '../../../utils';
import { parseEucoPrice } from '../../../utils/scrapper';

const getPrice = async (url: string): Promise<number | '-' | undefined> => {
  try {
    const response = await eucoHttp.get(url);
    const price = parseEucoPrice(response.data);
    return price;
  } catch {
    return undefined;
  }
};

const eucoApi = { getPrice };

export default eucoApi;