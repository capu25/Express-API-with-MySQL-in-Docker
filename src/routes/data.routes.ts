import express from "express";
import {
  getData,
  createData,
  deleteData,
} from "../controllers/data.controller";

const router = express.Router();

router.get("/data", getData);
router.post("/data", createData);
router.delete("/data/:id", deleteData);

export default router;
