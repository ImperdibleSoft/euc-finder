import { alienRidesHttp } from '../../../utils';
import { parseAlienRidesPrice } from '../../../utils/scrapper';

const getPrice = async (url: string): Promise<number | '-' | undefined> => {
  try {
    const response = await alienRidesHttp.get(url);
    const price = parseAlienRidesPrice(response.data);
    return price;
  } catch {
    return undefined;
  }
};

const alienRidesApi = { getPrice };

export default alienRidesApi;