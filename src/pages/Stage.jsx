// src/pages/Stage.jsx
import { useParams, Link } from "react-router-dom";
import { useState } from "react";
import { Button, Form, ListGroup } from "react-bootstrap";

function Stage() {
  const { id } = useParams();

  // Simuler les données des stages
  const stageData = {
    1: {
      theme: "Gestion des stagiaires",
      description: "Développement d'une plateforme de gestion des stages.",
      dateDebut: "01/01/2025",
      dateFin: "30/06/2025",
      etat: "En cours",
      stagiaires: [
        { nom: "Ouerdane", prenom: "Nesrine", email: "nesrine@usthb.dz" },
        { nom: "Benali", prenom: "Yasmine", email: "yasmine@usthb.dz" },
      ],
    },
    2: {
      theme: "Système de reporting",
      description: "Création d’un tableau de bord pour les managers.",
      dateDebut: "01/02/2025",
      dateFin: "31/07/2025",
      etat: "Non commencé",
      stagiaires: [
        { nom: "Said", prenom: "Rania", email: "rania@esi.dz" },
      ],
    },
  };

  const stage = stageData[id];
  const [taches, setTaches] = useState([]);
  const [nouvelleTache, setNouvelleTache] = useState("");

  if (!stage) return <p>Stage introuvable</p>;

  // Ajouter une tâche
  const ajouterTache = () => {
    if (nouvelleTache.trim() !== "") {
      setTaches([...taches, { titre: nouvelleTache }]);
      setNouvelleTache("");
    }
  };

  // Supprimer une tâche
  const supprimerTache = (index) => {
    const copie = [...taches];
    copie.splice(index, 1);
    setTaches(copie);
  };

  // Modifier une tâche
  const modifierTache = (index, nouvelleValeur) => {
    const copie = [...taches];
    copie[index].titre = nouvelleValeur;
    setTaches(copie);
  };

  return (
    <div className="container mt-5">
      <Link to="/encadreur" className="btn btn-secondary mb-3">← Retour</Link>

      <div className="card p-4 shadow mb-4">
        <h3>{stage.theme}</h3>
        <p><strong>Description :</strong> {stage.description}</p>
        <p><strong>Durée :</strong> {stage.dateDebut} ➝ {stage.dateFin}</p>
        <p><strong>État :</strong> {stage.etat}</p>

        <h5 className="mt-4">Stagiaires</h5>
        <ul className="list-group">
          {stage.stagiaires.map((stagiaire, index) => (
            <li key={index} className="list-group-item">
              {stagiaire.nom} {stagiaire.prenom} — {stagiaire.email}
            </li>
          ))}
        </ul>
      </div>

      <div className="card p-4 shadow">
        <h4 className="mb-3">Tâches du stage</h4>

        <div className="d-flex mb-3">
          <Form.Control
            type="text"
            placeholder="Nouvelle tâche"
            value={nouvelleTache}
            onChange={(e) => setNouvelleTache(e.target.value)}
          />
          <Button variant="success" onClick={ajouterTache} className="ms-2">
            Ajouter
          </Button>
        </div>

        <ListGroup>
          {taches.map((tache, index) => (
            <ListGroup.Item key={index} className="d-flex justify-content-between align-items-center">
              <Form.Control
                type="text"
                value={tache.titre}
                onChange={(e) => modifierTache(index, e.target.value)}
              />
              <Button variant="danger" size="sm" onClick={() => supprimerTache(index)}>
                Supprimer
              </Button>
            </ListGroup.Item>
          ))}
        </ListGroup>
      </div>
    </div>
  );
}

export default Stage;
