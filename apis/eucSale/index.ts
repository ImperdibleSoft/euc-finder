import { ciclonicHttp } from '../../utils';
import { parseEucSalePrice } from '../../utils/scrapper';

const getPrice = async (url: string, expensive: boolean): Promise<number | '-' | undefined> => {
  try {
    const response = await ciclonicHttp.get(url);
    const price = parseEucSalePrice(response.data, expensive);
    return price;
  } catch {
    return undefined;
  }
};

const eucSaleApi = { getPrice };

export default eucSaleApi;