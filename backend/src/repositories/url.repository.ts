import prisma from "../lib/prisma";

export const createShortUrl = async (
  originalUrl: string,
  shortCode: string,
  title?: string,
  category?: string,
  summary?: string
) => {
  return prisma.shortUrl.create({
    data: {
      originalUrl,
      shortCode,
      title,
      category,
      summary,
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

export const getDashboardData = async () => {
  return prisma.shortUrl.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });
};

export const deleteUrl = async (id: string) => {
  return prisma.shortUrl.delete({
    where: {
      id,
    },
  });
};

export const updateUrl = async (
  id: string,
  originalUrl: string
) => {
  return prisma.shortUrl.update({
    where: {
      id,
    },
    data: {
      originalUrl,
    },
  });
};