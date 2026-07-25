import { nanoid } from "nanoid";
import {
  createShortUrl,
  findByShortCode,
  incrementClicks,
  getAllUrls,
  getDashboardData,
  deleteUrl,
  updateUrl,
} from "../repositories/url.repository";

import { generateUrlSummary } from "../ai/gemini.service";

export const shortenUrl = async (originalUrl: string) => {
  let shortCode = nanoid(7);

  while (await findByShortCode(shortCode)) {
    shortCode = nanoid(7);
  }

  // Default fallback values
  let title = new URL(originalUrl).hostname;
  let category = "Website";
  let summary = `Shortened URL for ${originalUrl}`;

  try {
    console.log("==================================");
    console.log("Calling Gemini...");
    console.log("URL:", originalUrl);

    const aiResponse = await generateUrlSummary(originalUrl);

    console.log("Gemini Response:");
    console.log(aiResponse);

    const parsed = JSON.parse(aiResponse);

    title = parsed.title || title;
    category = parsed.category || category;
    summary = parsed.summary || summary;
  } catch (error) {
    console.error("Gemini Error:");
    console.error(error);
    console.log("Using fallback values...");
  }

  return createShortUrl(
    originalUrl,
    shortCode,
    title,
    category,
    summary
  );
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
    totalUrls === 0
      ? 0
      : Number((totalClicks / totalUrls).toFixed(2));

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

export const deleteShortUrl = async (id: string) => {
  return deleteUrl(id);
};

export const updateShortUrl = async (
  id: string,
  originalUrl: string
) => {
  return updateUrl(id, originalUrl);
};