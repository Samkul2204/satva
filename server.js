import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import foodRoutes from "./src/routes/foods.routes.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Food API running");
});

app.use("/foods", foodRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () =>
  console.log(`🚀 Server running on port ${PORT}`)
);