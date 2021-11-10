import { NextApiRequest, NextApiResponse } from 'next';
import smartWheelApi from '../../../apis/smartWheel';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { url } = req.query;
    // const expensive = /expensive/.test(req.url as string);
    const price = await smartWheelApi.getPrice(url as string);
    return res.status(200).json(price);
  } catch {
    return res.status(200).json(undefined);
  }
};

export default handler;