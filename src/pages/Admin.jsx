// src/pages/Admin.jsx
import React, { useState } from "react";

function Admin() {
  const [stages, setStages] = useState([
    {
      id: 1,
      theme: "Gestion des stagiaires",
      description: "Plateforme de gestion des stages pour Sonatrach.",
      dateDebut: "01/01/2025",
      dateFin: "30/06/2025",
      encadreur: { nom: "Hamissi", prenom: "Salah", email: "hamissi@sonatrach.dz" },
      stagiaires: [
        { nom: "Ouerdane", prenom: "Nesrine", email: "nesrine@usthb.dz" },
        { nom: "Benali", prenom: "Yasmine", email: "yasmine@usthb.dz" }
      ],
      etat: "en cours",
      taches: ["Étude du cahier des charges", "Login", "Rapport final"]
    },
    {
      id: 2,
      theme: "Reporting",
      description: "Système de reporting interne.",
      dateDebut: "01/02/2025",
      dateFin: "30/07/2025",
      encadreur: { nom: "Brahimi", prenom: "Yacine", email: "yacine@sonatrach.dz" },
      stagiaires: [
        { nom: "Said", prenom: "Rania", email: "rania@esi.dz" }
      ],
      etat: "fini",
      taches: ["Conception base de données", "Développement dashboard"]
    }
  ]);

  const supprimerStage = (id) => {
    if (window.confirm("Êtes-vous sûr de vouloir supprimer ce stage ?")) {
      setStages(stages.filter((s) => s.id !== id));
    }
  };

  const modifierStage = (id) => {
    alert(`Fonction de modification pour le stage ID ${id} à implémenter.`);
  };

  return (
    <div className="container mt-5">
      <h2 className="mb-4">Tableau de bord Administrateur</h2>

      {stages.map((stage) => (
        <div key={stage.id} className="card mb-4 p-3 shadow">
          <div className="d-flex justify-content-between align-items-center">
            <h4>{stage.theme}</h4>
            <div>
              <button
                className="btn btn-warning btn-sm me-2"
                onClick={() => modifierStage(stage.id)}
              >
                ✏️ Modifier (apr nstikiwha khir b icons)
              </button>
              <button
                className="btn btn-danger btn-sm"
                onClick={() => supprimerStage(stage.id)}
              >
                🗑️ Supprimer (need some icons bch nstikiha ktr too)
              </button>
            </div>
          </div>

          <p><strong>Description :</strong> {stage.description}</p>
          <p><strong>Durée :</strong> {stage.dateDebut} ➝ {stage.dateFin}</p>
          <p><strong>État :</strong> {stage.etat}</p>

          <h6 className="mt-3">Encadreur</h6>
          <p>{stage.encadreur.nom} {stage.encadreur.prenom} — {stage.encadreur.email}</p>

          <h6 className="mt-3">Stagiaires</h6>
          <ul className="list-group mb-2">
            {stage.stagiaires.map((stagiaire, idx) => (
              <li key={idx} className="list-group-item">
                {stagiaire.nom} {stagiaire.prenom} — {stagiaire.email}
              </li>
            ))}
          </ul>

          <h6>Tâches du stage</h6>
          <ul>
            {stage.taches.map((tache, idx) => (
              <li key={idx}>-----------apr ndir 7aja cute hna  {tache}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default Admin;
