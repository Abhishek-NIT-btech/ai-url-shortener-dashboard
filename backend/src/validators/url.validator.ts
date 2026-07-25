import { z } from "zod";

export const createShortUrlSchema = z.object({
  originalUrl: z
    .string()
    .url("Please enter a valid URL"),
});

export type CreateShortUrlInput = z.infer<typeof createShortUrlSchema>;