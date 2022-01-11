import { eeveesHttp } from '../../../utils';
import { parseEeveesPrice } from '../../../utils/scrapper';

const getPrice = async (url: string): Promise<number | '-' | undefined> => {
  try {
    const response = await eeveesHttp.get(url);
    const price = parseEeveesPrice(response.data);
    return price;
  } catch {
    return undefined;
  }
};

const eeveesApi = { getPrice };

export default eeveesApi;