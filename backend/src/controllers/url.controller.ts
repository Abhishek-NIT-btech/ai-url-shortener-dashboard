import { Request, Response } from "express";
import { createShortUrlSchema } from "../validators/url.validator";
import { shortenUrl } from "../services/url.service";

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