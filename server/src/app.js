import express from "express";
import cors from "cors";
import productRouter from "./routes/productRoutes.js"
import { errorHandler } from "./middleware/errorHandler.js";

const app = express();

app.use(cors());

app.use(express.json());

app.use("/api/products", productRouter);

app.use(errorHandler);

export default app;