import express from "express";
import cors from "cors";
import foodRoutes from "./src/routes/foods.routes.js";

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Food API running");
});

app.use("/foods", foodRoutes);

app.use((err, req, res, next) => {
  console.error("🔥 UNHANDLED ERROR:", err);
  res.status(500).json({ error: err.message });
});

export default app;