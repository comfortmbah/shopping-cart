import express from "express";
import { getProductsList, getProductDetails } from "../controllers/productController.js";

const router = express.Router();

router.get("/", getProductsList);

router.get("/:id", getProductDetails);

export default router;