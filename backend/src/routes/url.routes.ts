import { Router } from "express";
import { createShortUrlHandler } from "../controllers/url.controller";

const router = Router();

router.post("/shorten", createShortUrlHandler);

export default router;