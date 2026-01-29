import express from "express";
import cors from "cors";
import "dotenv/config";
import foodRoutes from "../src/routes/foods.routes.js";

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Food API running on Vercel");
});

app.use("/foods", foodRoutes);


export default app;