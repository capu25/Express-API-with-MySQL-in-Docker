import express from "express";
import dataRoutes from "./data.routes";

// --- IMPORT NEW FILE BELOW---
import newFeaturesRoute from "./newFeatures.routes";

const router = express.Router();

// --- DUMMY DATA ---
router.use("/api", dataRoutes);

// --- DECLARE NEW ENDPOINT HERE---
router.use("/new-feature", newFeaturesRoute);

export default router;
