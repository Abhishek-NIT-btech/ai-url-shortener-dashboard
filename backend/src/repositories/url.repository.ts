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

export const incrementClicks = async (id: string) => {
  return prisma.shortUrl.update({
    where: {
      id,
    },
    data: {
      clicks: {
        increment: 1,
      },
    },
  });
};

export const getAllUrls = async () => {
  return prisma.shortUrl.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });
};

// Dashboard Analytics
export const getDashboardData = async () => {
  return prisma.shortUrl.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });
};