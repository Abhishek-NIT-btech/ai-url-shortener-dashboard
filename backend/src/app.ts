import express from "express";
import cors from "cors";
import helmet from "helmet";
import compression from "compression";
import morgan from "morgan";

import urlRoutes from "./routes/url.routes";
import { redirectToOriginalUrl } from "./controllers/url.controller";

const app = express();

app.use(cors());
app.use(helmet());
app.use(compression());
app.use(morgan("dev"));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// API routes
app.use("/api", urlRoutes);

// Public redirect route
app.get("/:shortCode", redirectToOriginalUrl);

app.get("/", (_req, res) => {
  res.json({
    success: true,
    message: "AI Powered URL Shortener API",
  });
});

export default app;