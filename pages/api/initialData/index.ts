import { NextApiRequest, NextApiResponse } from 'next';
import databaseApi from '../../../apis/database';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const apps = await databaseApi.apps.getAllApps();
    const brands = await databaseApi.brands.getAllBrands();
    const config = await databaseApi.config.getConfig();
    const dealers = await databaseApi.dealers.getAllDealers();
    const wheels = await databaseApi.wheels.getAllWheels();

    return res.status(200).json({
      apps,
      brands,
      config,
      dealers,
      wheels
    });

  } catch {
    return res.status(200).json({});
  }
};

export default handler;