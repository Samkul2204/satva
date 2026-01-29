import express from "express";
import cors from "cors";
import foodRoutes from "./routes/foods.routes.js";

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Food API running");
});

app.use("/foods", foodRoutes);


export default app;