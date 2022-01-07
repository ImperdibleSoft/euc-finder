import { revRidesHttp } from '../../utils';
import { parseRevRidesPrice } from '../../utils/scrapper';

const getPrice = async (url: string): Promise<number | '-' | undefined> => {
  try {
    const response = await revRidesHttp.get(url);
    const price = parseRevRidesPrice(response.data);
    return price;
  } catch {
    return undefined;
  }
};

const revRidesApi = { getPrice };

export default revRidesApi;