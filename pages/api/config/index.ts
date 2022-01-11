import { NextApiRequest, NextApiResponse } from 'next';
import databaseApi from '../../../apis/database';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const config = await databaseApi.config.getConfig();
    return res.status(200).json({ config });
  } catch {
    return res.status(200).json({});
  }
};

export default handler;