const express = require("express");
const cors = require("cors");
const mysql = require("mysql2");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME
});

db.connect((err) => {
  if (err) {
    console.error("❌ Erreur de connexion à MySQL :", err);
  } else {
    console.log("✅ Connecté à la base de données MySQL");
  }
});




//------------------------dans admin-----------------------


// Route stagiaires
app.get("/api/stagiaires", (req, res) => {
  const query = `
    SELECT u.id, u.nom, u.prenom, u.email, s.universite, s.filiere, s.niveau
    FROM utilisateurs u
    JOIN stagiaires s ON u.id = s.id
    WHERE u.role = 'stagiaire'
  `;
  db.query(query, (err, results) => {
    if (err) {
      console.error("Erreur lors de la récupération des stagiaires :", err);
      return res.status(500).json({ error: "Erreur serveur" });
    }
    res.json(results);
  });
});


//  Route stages
app.get("/api/stages", (req, res) => {
  const query = `
    SELECT s.id, s.theme, s.date_debut, s.date_fin, s.durée,
           u_enc.nom AS encadrant_nom, u_enc.prenom AS encadrant_prenom,
           u1.nom AS stagiaire1_nom, u1.prenom AS stagiaire1_prenom,
           u2.nom AS stagiaire2_nom, u2.prenom AS stagiaire2_prenom
    FROM stage s
    LEFT JOIN encadreur e ON s.id_encadrant = e.id
    LEFT JOIN utilisateurs u_enc ON e.id = u_enc.id
    LEFT JOIN stagiaires st1 ON s.id_stagiaire = st1.id
    LEFT JOIN utilisateurs u1 ON st1.id = u1.id
    LEFT JOIN stagiaires st2 ON s.id_stagiaire2 = st2.id
    LEFT JOIN utilisateurs u2 ON st2.id = u2.id
  `;

  db.query(query, (err, results) => {
    if (err) {
      console.error("Erreur lors de la récupération des stages :", err);
      return res.status(500).json({ error: "Erreur serveur" });
    }
    res.json(results);
  });
});




//Route encadreurs
app.get("/api/encadreurs", (req, res) => {
  const query = `
    SELECT u.id, u.nom, u.prenom, u.email, e.departement
    FROM utilisateurs u
    JOIN encadreur e ON u.id = e.id
    WHERE u.role = 'encadreur'
  `;
  db.query(query, (err, results) => {
    if (err) {
      console.error("Erreur lors de la récupération des encadreurs :", err);
      return res.status(500).json({ error: "Erreur serveur" });
    }
    res.json(results);
  });
});

//routes admins
app.get("/api/admins", (req, res) => {
  const query = `
    SELECT id, nom, prenom, email
    FROM utilisateurs
    WHERE role = 'admin'
  `;
  db.query(query, (err, results) => {
    if (err) {
      console.error("Erreur lors de la récupération des admins :", err);
      return res.status(500).json({ error: "Erreur serveur" });
    }
    res.json(results);
  });
});






//-------------dans stagiaire ----------------------------




// Récupérer les infos d'un stagiaire par ID
app.get("/api/stagiaire/:id", (req, res) => {
  const id = req.params.id;
  const query = `
    SELECT u.nom, u.prenom, u.email, s.universite, s.filiere, s.niveau
    FROM utilisateurs u
    JOIN stagiaires s ON u.id = s.id
    WHERE u.id = ?
  `;
  db.query(query, [id], (err, results) => {
    if (err) return res.status(500).json({ error: "Erreur serveur" });
    res.json(results[0]);
  });
});

// Récupérer le stage associé à un stagiaire
app.get("/api/stagiaire/:id/stage", (req, res) => {
  const id = req.params.id;
  const query = `
    SELECT s.theme, s.date_debut, s.date_fin, s.durée, u.nom AS encadrant
    FROM stage s
    LEFT JOIN encadreur e ON s.id_encadrant = e.id
    LEFT JOIN utilisateurs u ON e.id = u.id
    WHERE s.id_stagiaire = ?
  `;
  db.query(query, [id], (err, results) => {
    if (err) return res.status(500).json({ error: "Erreur serveur" });
    res.json(results[0]);
  });
});

// Récupérer les tâches du stage
app.get("/api/stagiaire/:id/taches", (req, res) => {
  const id = req.params.id;
  const query = `
    SELECT t.id, t.titre, t.etat
    FROM tache t
    JOIN stage s ON t.id_stage = s.id
    WHERE s.id_stagiaire = ?
  `;
  db.query(query, [id], (err, results) => {
    if (err) return res.status(500).json({ error: "Erreur serveur" });
    res.json(results);
  });
});


//----------------------------------------dans encadreur ----------------------------------------


// Récupérer les stages d’un encadreur

app.get("/api/encadreurs/:id/stages", (req, res) => {
  const encadreurId = req.params.id;

  const query = `
    SELECT s.id, s.theme, s.date_debut, s.date_fin,
           CASE
             WHEN CURDATE() < s.date_debut THEN 'Non démarré'
             WHEN CURDATE() BETWEEN s.date_debut AND s.date_fin THEN 'En cours'
             ELSE 'Fini'
           END AS etat
    FROM stage s
    WHERE s.id_encadrant = ?
  `;

  db.query(query, [encadreurId], (err, results) => {
    if (err) {
      console.error("Erreur lors de la récupération des stages :", err);
      return res.status(500).json({ error: "Erreur serveur" });
    }
    res.json(results);
  });
});


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Serveur backend lancé sur http://localhost:${PORT}`);
});
