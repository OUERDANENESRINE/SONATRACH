const express = require("express");
const router = express.Router();
const pool = require("../config/db"); // adapte le chemin si besoin

// GET tous les stages
router.get("/", async (req, res) => {
  try {
    const [rows] = await pool.query("SELECT * FROM stage");
    res.json(rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Erreur serveur" });
  }
});

module.exports = router;
