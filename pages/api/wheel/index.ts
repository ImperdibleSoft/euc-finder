import { NextApiRequest, NextApiResponse } from 'next';
import databaseApi from '../../../apis/database';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const influencers = await databaseApi.influencers.getAllInfluencers();
    const videos = await databaseApi.videos.getAllVideos();
    const purchaseLinks = await databaseApi.purchaseLinks.getAllPurchaseLinks();

    return res.status(200).json({
      influencers,
      purchaseLinks,
      videos
    });

  } catch {
    return res.status(200).json({});
  }
};

export default handler;