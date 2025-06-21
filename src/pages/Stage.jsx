// src/pages/Stage.jsx
import { useParams, Link } from "react-router-dom";

function Stage() {
  const { id } = useParams();

  const stage = {
    1: {
      theme: "Gestion des stagiaires",
      dateDebut: "01/01/2025",
      dateFin: "30/06/2025",
      stagiaires: [
        { nom: "Ouerdane", prenom: "Nesrine", email: "nesrine@usthb.dz" },
        { nom: "Benali", prenom: "Yasmine", email: "yasmine@usthb.dz" },
      ],
    },
    2: {
      theme: "Système de reporting",
      dateDebut: "01/02/2025",
      dateFin: "31/07/2025",
      stagiaires: [
        { nom: "Said", prenom: "Rania", email: "rania@esi.dz" },
      ],
    },
  }[id];

  if (!stage) return <p>Stage introuvable</p>;

  return (
    <div className="container mt-5">
      <Link to="/encadreur" className="btn btn-secondary mb-3">← Retour</Link>
      <div className="card p-4 shadow">
        <h3>{stage.theme}</h3>
        <p><strong>Durée :</strong> {stage.dateDebut} ➝ {stage.dateFin}</p>

        <h5 className="mt-4">Stagiaires</h5>
        <ul className="list-group">
          {stage.stagiaires.map((stagiaire, index) => (
            <li key={index} className="list-group-item">
              <strong>{stagiaire.nom} {stagiaire.prenom}</strong> — {stagiaire.email}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Stage;
