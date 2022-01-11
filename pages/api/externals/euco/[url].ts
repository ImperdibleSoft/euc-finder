
import { NextApiRequest, NextApiResponse } from 'next';
import eucoApi from '../../../../apis/externals/euco';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { url } = req.query;
    // const expensive = /expensive/.test(req.url as string);
    const price = await eucoApi.getPrice(url as string);  
    return res.status(200).json(price);
  } catch {
    return res.status(200).json(undefined);
  }
};

export default handler;