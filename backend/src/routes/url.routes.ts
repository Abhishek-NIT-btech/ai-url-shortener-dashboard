import { Router } from "express";
import {
  createShortUrlHandler,
  redirectToOriginalUrl,
  getAllUrlsHandler,
} from "../controllers/url.controller";

const router = Router();

// Get all URLs
router.get("/urls", getAllUrlsHandler);

// Create short URL
router.post("/shorten", createShortUrlHandler);

// Redirect
router.get("/:shortCode", redirectToOriginalUrl);

export default router;