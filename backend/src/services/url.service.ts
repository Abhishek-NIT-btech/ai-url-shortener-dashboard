import { nanoid } from "nanoid";
import {
  createShortUrl,
  findByShortCode,
  incrementClicks,
  getAllUrls,
  getDashboardData,
} from "../repositories/url.repository";

export const shortenUrl = async (originalUrl: string) => {
  let shortCode = nanoid(7);

  while (await findByShortCode(shortCode)) {
    shortCode = nanoid(7);
  }

  return createShortUrl(originalUrl, shortCode);
};

export const getOriginalUrl = async (shortCode: string) => {
  const url = await findByShortCode(shortCode);

  if (!url) {
    return null;
  }

  await incrementClicks(url.id);

  return url.originalUrl;
};

export const getAllShortUrls = async () => {
  return getAllUrls();
};

export const getDashboardAnalytics = async () => {
  const urls = await getDashboardData();

  const totalUrls = urls.length;

  const totalClicks = urls.reduce(
    (sum, url) => sum + url.clicks,
    0
  );

  const averageClicks =
    totalUrls === 0 ? 0 : Number((totalClicks / totalUrls).toFixed(2));

  const topUrls = [...urls]
    .sort((a, b) => b.clicks - a.clicks)
    .slice(0, 5);

  const recentUrls = urls.slice(0, 5);

  return {
    totalUrls,
    totalClicks,
    averageClicks,
    topUrls,
    recentUrls,
  };
};