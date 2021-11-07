import { inmotionFranceHttp } from '../../utils';
import { parseInmotionFrancePrice } from '../../utils/scrapper';

const getPrice = async (url: string): Promise<number | undefined> => {
  try {
    const response = await inmotionFranceHttp.get(url);
    const price = parseInmotionFrancePrice(response.data);
    return price;
  } catch (error) {
    return undefined;
  }
};

const inmotionFranceApi = { getPrice };

export default inmotionFranceApi;