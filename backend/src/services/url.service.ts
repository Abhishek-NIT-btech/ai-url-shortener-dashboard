import { nanoid } from "nanoid";
import {
  createShortUrl,
  findByShortCode,
} from "../repositories/url.repository";

export const shortenUrl = async (originalUrl: string) => {
  let shortCode = nanoid(7);

  while (await findByShortCode(shortCode)) {
    shortCode = nanoid(7);
  }

  return createShortUrl(originalUrl, shortCode);
};