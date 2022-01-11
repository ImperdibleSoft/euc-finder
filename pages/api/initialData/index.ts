import { NextApiRequest, NextApiResponse } from 'next';
import databaseApi from '../../../apis/database';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const apps = await databaseApi.apps.getAllApps();
    const brands = await databaseApi.brands.getAllBrands();
    const dealers = await databaseApi.dealers.getAllDealers();
    const influencers = await databaseApi.influencers.getAllInfluencers();
    const purchaseLinks = await databaseApi.purchaseLinks.getAllPurchaseLinks();
    const videos = await databaseApi.videos.getAllVideos();
    const wheels = await databaseApi.wheels.getAllWheels();

    return res.status(200).json({
      apps,
      brands,
      dealers,
      influencers,
      purchaseLinks,
      videos,
      wheels
    });

  } catch {
    return res.status(200).json({});
  }
};

export default handler;