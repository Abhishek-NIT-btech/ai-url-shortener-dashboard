import prisma from "../lib/prisma";

export const createShortUrl = async (
  originalUrl: string,
  shortCode: string
) => {
  return prisma.shortUrl.create({
    data: {
      originalUrl,
      shortCode,
    },
  });
};

export const findByShortCode = async (shortCode: string) => {
  return prisma.shortUrl.findUnique({
    where: {
      shortCode,
    },
  });
};