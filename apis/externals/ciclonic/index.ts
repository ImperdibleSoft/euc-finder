import { ciclonicHttp } from '../../../utils';
import { parseCiclonicPrice } from '../../../utils/scrapper';

const getPrice = async (url: string, expensive: boolean): Promise<number | undefined> => {
  try {
    const response = await ciclonicHttp.get(url);
    const price = parseCiclonicPrice(response.data, expensive);
    return price;
  } catch {
    return undefined;
  }
};

const ciclonicApi = { getPrice };

export default ciclonicApi;