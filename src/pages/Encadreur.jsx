// src/pages/Encadreur.jsx
import React from "react";
import { useNavigate } from "react-router-dom";

function Encadreur() {
  const navigate = useNavigate();

  const stages = [
    {
      id: 1,
      theme: "Gestion des stagiaires",
      dateDebut: "01/01/2025",
      dateFin: "30/06/2025",
      etat: "En cours",
    },
    {
      id: 2,
      theme: "Système de reporting",
      dateDebut: "01/02/2025",
      dateFin: "31/07/2025",
      etat: "Fini",
    },
  ];

  const voirDetails = (id) => {
    navigate(`/encadreur/stage/${id}`);
  };

  return (
    <div className="container mt-5">
      <h2 className="mb-4">Mes stages encadrés</h2>

      <div className="row">
        {stages.map((stage) => (
          <div className="col-md-6" key={stage.id}>
            <div
              className="card p-3 mb-4 shadow-sm"
              style={{ cursor: "pointer" }}
              onClick={() => voirDetails(stage.id)}
            >
              <h5>{stage.theme}</h5>
              <p><strong>Date :</strong> {stage.dateDebut} ➝ {stage.dateFin}</p>
              <p><strong>État :</strong> {stage.etat}</p> {/* ✅ affichage du champ état */}
              <p className="text-primary">Voir détails ⟶</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Encadreur;
