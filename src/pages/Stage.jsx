import { useParams, Link } from "react-router-dom";
import { useState } from "react";
import NavBar2 from "../components/NavBar2";

function Stage() {
  const { id } = useParams();

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
   3: {
  theme: "Application mobile RH",
  description: "Conception d’une application mobile pour la gestion des congés.",
  dateDebut: "01/03/2025",
  dateFin: "31/08/2025",
  etat: "En attente",
  stagiaires: [
    { nom: "Zerrouki", prenom: "Amel", email: "amel@usthb.dz" }
  ],
},
4: {
  theme: "Système de sécurité réseau",
  description: "Analyse et mise en place d’un pare-feu intelligent.",
  dateDebut: "01/04/2025",
  dateFin: "30/09/2025",
  etat: "Non commencé",
  stagiaires: [
    { nom: "Nouri", prenom: "Walid", email: "walid@esi.dz" }
  ],
},
    
  };

  const stage = stageData[id];
  const [taches, setTaches] = useState([]);
  const [nouvelleTache, setNouvelleTache] = useState("");

  if (!stage) return <p className="text-center mt-20 text-red-500">⛔ Stage introuvable</p>;

  const ajouterTache = () => {
    if (nouvelleTache.trim() !== "") {
      setTaches([...taches, { titre: nouvelleTache }]);
      setNouvelleTache("");
    }
  };

  const supprimerTache = (index) => {
    const copie = [...taches];
    copie.splice(index, 1);
    setTaches(copie);
  };

  const modifierTache = (index, nouvelleValeur) => {
    const copie = [...taches];
    copie[index].titre = nouvelleValeur;
    setTaches(copie);
  };

  return (
    <div className="bg-gray-100 min-h-screen pb-10">
      <NavBar2 />
      <div className="max-w-5xl mx-auto px-6 mt-24">
        <Link to="/encadreur" className="text-orange-500 hover:underline text-sm">
          ← Retour à mes stages
        </Link>

        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
          Détails du stage
        </h2>

        {/* Bloc description */}
        <div className="bg-white rounded-xl shadow p-6 mb-6">
          <h3 className="text-xl font-semibold text-orange-500 mb-4">{stage.theme}</h3>
          <p className="text-gray-700"><strong>Description :</strong> {stage.description}</p>
          <p className="text-gray-700"><strong>Durée :</strong> {stage.dateDebut} ➝ {stage.dateFin}</p>
          <p className="text-gray-700"><strong>État :</strong> {stage.etat}</p>
        </div>

        {/* Bloc stagiaires */}
        <div className="bg-white rounded-xl shadow p-6 mb-6">
          <h4 className="text-lg font-semibold text-orange-500 mb-4">Stagiaires affectés</h4>
          <ul className="space-y-2">
            {stage.stagiaires.map((stagiaire, index) => (
              <li
                key={index}
                className="p-3 bg-gray-50 border border-gray-200 rounded"
              >
                {stagiaire.nom} {stagiaire.prenom} — <span className="text-sm text-gray-500">{stagiaire.email}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Bloc tâches */}
        <div className="bg-white rounded-xl shadow p-6">
          <h4 className="text-lg font-semibold text-orange-500 mb-4">Tâches du stage</h4>

          <div className="flex flex-col sm:flex-row gap-3 mb-4">
            <input
              type="text"
              placeholder="Nouvelle tâche"
              className="flex-1 p-2 border border-gray-300 rounded-md"
              value={nouvelleTache}
              onChange={(e) => setNouvelleTache(e.target.value)}
            />
            <button
              onClick={ajouterTache}
              className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600"
            >
              Ajouter
            </button>
          </div>

          {taches.length === 0 ? (
            <p className="text-sm text-gray-500">Aucune tâche ajoutée.</p>
          ) : (
            <ul className="space-y-3">
              {taches.map((tache, index) => (
                <li
                  key={index}
                  className="flex flex-col sm:flex-row justify-between items-center gap-3 bg-gray-50 p-3 rounded border border-gray-200"
                >
                  <input
                    type="text"
                    value={tache.titre}
                    onChange={(e) => modifierTache(index, e.target.value)}
                    className="flex-1 p-2 border rounded-md w-full"
                  />
                  <button
                    onClick={() => supprimerTache(index)}
                    className="bg-red-300 text-white px-3 py-1 rounded hover:bg-red-400"
                  >
                    Supprimer
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}

export default Stage;
