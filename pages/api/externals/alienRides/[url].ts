import { NextApiRequest, NextApiResponse } from 'next';
import alienRidesApi from '../../../../apis/externals/alienRides';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { url } = req.query;
    // const expensive = /expensive/.test(req.url as string);
    const price = await alienRidesApi.getPrice(url as string);
    return res.status(200).json(price);
  } catch {
    return res.status(200).json(undefined);
  }
};

export default handler;