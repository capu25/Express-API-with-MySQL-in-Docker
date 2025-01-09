import express from "express";
import { getNewFeatures } from "../controllers/newFeatures.controller";

const router = express.Router();

router.get("/", getNewFeatures);

export default router;
