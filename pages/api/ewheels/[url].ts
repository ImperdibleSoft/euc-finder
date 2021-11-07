
import { NextApiRequest, NextApiResponse } from 'next';
import ewheelsApi from '../../../apis/ewheels';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { url } = req.query;
    const expensive = /expensive/.test(req.url as string);
    const price = await ewheelsApi.getPrice(url as string, expensive);  
    return res.status(200).json(price);
  } catch {
    return res.status(200).json(undefined);
  }
};

export default handler;