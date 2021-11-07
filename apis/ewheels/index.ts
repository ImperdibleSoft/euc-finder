import { ciclonicHttp } from '../../utils';
import { parseEWheelsPrice } from '../../utils/scrapper';

const getPrice = async (url: string, expensive: boolean): Promise<number | '-' | undefined> => {
  try {
    const response = await ciclonicHttp.get(url);
    const price = parseEWheelsPrice(response.data, expensive);
    return price;
  } catch {
    return undefined;
  }
};

const ewheelsApi = { getPrice };

export default ewheelsApi;