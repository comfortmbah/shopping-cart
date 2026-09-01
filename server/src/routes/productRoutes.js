import express from "express";
import { getProductsList } from "../controllers/productController.js";

const router = express.Router();

router.get("/", getProductsList);

export default router;