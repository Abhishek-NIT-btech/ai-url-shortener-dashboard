import { Request, Response } from "express";
import { createShortUrlSchema } from "../validators/url.validator";
import { generateUrlSummary } from "../ai/gemini.service";

import {
  shortenUrl,
  getOriginalUrl,
  getAllShortUrls,
  deleteShortUrl,
  updateShortUrl,
} from "../services/url.service";

export const createShortUrlHandler = async (
  req: Request,
  res: Response
) => {
  try {
    const { originalUrl } = createShortUrlSchema.parse(req.body);

    const shortUrl = await shortenUrl(originalUrl);

    return res.status(201).json({
      success: true,
      message: "Short URL created successfully",
      data: shortUrl,
    });
  } catch (error: any) {
    return res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

export const redirectToOriginalUrl = async (
  req: Request,
  res: Response
) => {
  try {
    const shortCode = req.params.shortCode as string;

    const originalUrl = await getOriginalUrl(shortCode);

    if (!originalUrl) {
      return res.status(404).json({
        success: false,
        message: "Short URL not found",
      });
    }

    return res.redirect(originalUrl);
  } catch (error: any) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const getAllUrlsHandler = async (
  req: Request,
  res: Response
) => {
  try {
    const urls = await getAllShortUrls();

    return res.status(200).json({
      success: true,
      data: urls,
    });
  } catch (error: any) {
    return res.status(500).json({
      success: false,
      message: "Failed to fetch URLs",
    });
  }
};

export const deleteUrlHandler = async (
  req: Request,
  res: Response
) => {
  try {
    const { id } = req.params;

    await deleteShortUrl(id);

    return res.status(200).json({
      success: true,
      message: "URL deleted successfully",
    });
  } catch (error: any) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const updateUrlHandler = async (
  req: Request,
  res: Response
) => {
  try {
    const { id } = req.params;
    const { originalUrl } = req.body;

    await updateShortUrl(id, originalUrl);

    return res.status(200).json({
      success: true,
      message: "URL updated successfully",
    });
  } catch (error: any) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

/**
 * Temporary endpoint to test Gemini AI
 */
export const testGeminiHandler = async (
  req: Request,
  res: Response
) => {
  try {
    const result = await generateUrlSummary(
      "https://github.com"
    );

    return res.status(200).json({
      success: true,
      data: result,
    });
  } catch (error: any) {
    console.error(error);

    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};