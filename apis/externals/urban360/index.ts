import { urban360Http } from '../../../utils';
import { parseUrban360Price } from '../../../utils/scrapper';

const getPrice = async (url: string, expensive: boolean): Promise<number | '-' | undefined> => {
  try {
    const response = await urban360Http.get(url);
    const price = parseUrban360Price(response.data, expensive);
    return price;
  } catch (error) {
    return undefined;
  }
};

const urban360Api = { getPrice };

export default urban360Api;