
import { NextApiRequest, NextApiResponse } from 'next';
import inmotionFranceApi from '../../../apis/inmotionFrance';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { url } = req.query;
    const price = await inmotionFranceApi.getPrice(url as string);    
    return res.status(200).json(price);
  } catch {
    return res.status(200).json(undefined);
  }
};

export default handler;