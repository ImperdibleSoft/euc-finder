
import { NextApiRequest, NextApiResponse } from 'next';
import urban360Api from '../../../../apis/externals/urban360';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { url } = req.query;
    const expensive = /expensive/.test(req.url as string);
    const price = await urban360Api.getPrice(url as string, expensive);    
    return res.status(200).json(price);
  } catch {
    return res.status(200).json(undefined);
  }
};

export default handler;