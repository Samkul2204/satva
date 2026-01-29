import express from "express";
import pool from "../config/db.js";

const router = express.Router();

/* Create food */
router.post("/", async (req, res) => {
  try {
    const {
      image_url,
      rating,
      category,
      calories,
      benefits,
      concerns,
    } = req.body;

    const result = await pool.query(
      `
      INSERT INTO foods
      (image_url, rating, category, calories, benefits, concerns)
      VALUES ($1, $2, $3, $4, $5, $6)
      RETURNING *
      `,
      [image_url, rating, category, calories, benefits, concerns]
    );

    res.status(201).json(result.rows[0]);
  } catch (err) {
    console.error(err);
    res.status(400).json({ error: err.message });
  }
});

/* Get all foods */
router.get("/", async (req, res) => {
  const result = await pool.query(
    "SELECT * FROM foods ORDER BY created_at DESC"
  );
  res.json(result.rows);
});

/* Get by category */
router.get("/category/:category", async (req, res) => {
  const result = await pool.query(
    "SELECT * FROM foods WHERE category = $1",
    [req.params.category]
  );
  res.json(result.rows);
});

export default router;