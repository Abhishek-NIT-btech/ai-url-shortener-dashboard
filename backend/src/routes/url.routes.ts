import { Router } from "express";
import {
  createShortUrlHandler,
  getAllUrlsHandler,
  redirectToOriginalUrl,
  deleteUrlHandler,
  updateUrlHandler,
  testGeminiHandler,
} from "../controllers/url.controller";

const router = Router();

// ==============================
// URL APIs
// ==============================

// Test Gemini AI
router.get("/ai/test", testGeminiHandler);

// Get all URLs
router.get("/urls", getAllUrlsHandler);

// Create Short URL
router.post("/shorten", createShortUrlHandler);

// Update URL
router.put("/urls/:id", updateUrlHandler);

// Delete URL
router.delete("/urls/:id", deleteUrlHandler);

// Redirect (Keep this LAST)
router.get("/:shortCode", redirectToOriginalUrl);

export default router;