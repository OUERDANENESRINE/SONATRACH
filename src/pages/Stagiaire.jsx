import { useState } from "react";
import ProgressBar from "react-bootstrap/ProgressBar";
import NavBar2  from "../components/NavBar2";

function Stagiaire() {
  // Liste des tâches avec état
  const [taches, setTaches] = useState([
    { titre: "Étude du cahier des charges", etat: "fait" },
    { titre: "Développement du formulaire de login", etat: "en cours" },
    { titre: "Remise du rapport init", etat: "non fait" },
    { titre: "Remise du rapport final", etat: "non fait" },
  ]);

  // Mise à jour d'une tâche
  const changerEtat = (index, nouvelEtat) => {
    const nouvellesTaches = [...taches];
    nouvellesTaches[index].etat = nouvelEtat;
    setTaches(nouvellesTaches);
  };

  // Calcul de l'avancement
  const calcAvancement = () => {
    const total = taches.length;
    const faites = taches.filter((t) => t.etat === "fait").length;
    return Math.round((faites / total) * 100);
  };

  return (
    <div>
      <NavBar2 />
      <div className="container mt-5 ">
        <h2 className="mb-4 pt-20 text-center">Bienvenue Stagiaire</h2>
      
        <div className="card p-3 mb-4">
          <h5>Profil</h5>
          <p><strong>Nom :</strong> Ouerdane</p>
          <p><strong>Prénom :</strong> Nesrine</p>
          <p><strong>Email :</strong> stagiaire@sonatrach.dz</p>
          <p><strong>Université :</strong> USTHB</p>
          <p><strong>Département :</strong> Informatique</p>
          <p><strong>Niveau :</strong> Master 2</p>
          <p><strong>Spécialité :</strong> Génie logiciel</p>
        </div>

        <div className="card p-3 mb-4">
          <h5>Stage</h5>
          <p><strong>Thème :</strong> Gestion des stagiaires</p>
          <p><strong>Description :</strong> BLA BLA BLA .....</p>
          <p><strong>Date début :</strong> 01/01/2025</p>
          <p><strong>Date fin :</strong> 12/12/2025</p>
          <p><strong>Encadreur :</strong> Hamissi</p>

          <h6 className="mt-4">État d'avancement</h6>
          <ProgressBar now={calcAvancement()} label={`${calcAvancement()}%`} />
        </div>

        <div className="card p-3 mb-4">
          <h5>Mes tâches</h5>
          <ul className="list-group">
            {taches.map((tache, index) => (
              <li key={index} className="list-group-item">
                <strong>{tache.titre}</strong>
                <div className="mt-2">
                  <select
                    className="form-select"
                    value={tache.etat}
                    onChange={(e) => changerEtat(index, e.target.value)}
                  >
                    <option value="non fait">Non fait</option>
                    <option value="fait">Fait</option>
                  </select>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
     
    </div>
   
  );
}

export default Stagiaire;
