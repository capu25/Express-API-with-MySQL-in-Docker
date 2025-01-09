import express from "express";
import dataRoutes from "./data.routes";
import authRoutes from "./auth.routes";

// --- IMPORT NEW FILE BELOW---
import newFeaturesRoute from "./newFeatures.routes";

const router = express.Router();

// --- DUMMY DATA ---
router.use("/api", dataRoutes);

// --- AUTH ---
router.use("/auth", authRoutes);

// --- DECLARE NEW ENDPOINT HERE---
router.use("/new-feature", newFeaturesRoute);

export default router;
