import { madridRuedaHttp } from '../../utils';
import { parseMadridRuedaPrice } from '../../utils/scrapper';

const getPrice = async (url: string): Promise<number | '-' | undefined> => {
  try {
    const response = await madridRuedaHttp.get(url);
    const price = parseMadridRuedaPrice(response.data);
    return price;
  } catch (error) {
    return undefined;
  }
};

const madridRuedaApi = { getPrice };

export default madridRuedaApi;