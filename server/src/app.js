import express from "express";
import cors from "cors";
import productRouter from "./routes/productRoutes.js"

const app = express();

app.use(cors());

app.use(express.json());

app.use("/api/products", productRouter);

export default app;