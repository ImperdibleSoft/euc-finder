import { ciclonicHttp } from '../../../utils';
import { parseEucServicePrice } from '../../../utils/scrapper';

const getPrice = async (url: string, expensive: boolean): Promise<number | '-' | undefined> => {
  try {
    const response = await ciclonicHttp.get(url);
    const price = parseEucServicePrice(response.data, expensive);
    return price;
  } catch {
    return undefined;
  }
};

const eucServiceApi = { getPrice };

export default eucServiceApi;