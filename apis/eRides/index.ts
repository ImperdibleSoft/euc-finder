import { eRidesHttp } from '../../utils';
import { parseERidesPrice } from '../../utils/scrapper';

const getPrice = async (url: string, expensive: boolean): Promise<number | '-' | undefined> => {
  try {
    const response = await eRidesHttp.get(url);
    const price = parseERidesPrice(response.data, expensive);
    return price;
  } catch {
    return undefined;
  }
};

const eRidesApi = { getPrice };

export default eRidesApi;