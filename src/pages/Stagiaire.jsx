import { useEffect, useState } from "react";
import axios from "axios";
import NavBar2 from "../components/NavBar2";

function Stagiaire() {
  const idStagiaire = 2; // remplace par l’ID réel du stagiaire connecté
  const [profil, setProfil] = useState(null);
  const [stage, setStage] = useState(null);
  const [taches, setTaches] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:5000/api/stagiaire/${idStagiaire}`)
      .then(res => setProfil(res.data));

    axios.get(`http://localhost:5000/api/stagiaire/${idStagiaire}/stage`)
      .then(res => setStage(res.data));

    axios.get(`http://localhost:5000/api/stagiaire/${idStagiaire}/taches`)
      .then(res => setTaches(res.data));
  }, []);

  const changerEtat = (index, nouvelEtat) => {
    const updated = [...taches];
    updated[index].etat = nouvelEtat;
    setTaches(updated);
  };

  const calcAvancement = () => {
    const total = taches.length;
    const faites = taches.filter((t) => t.etat === "fait").length;
    return Math.round((faites / total) * 100);
  };

  if (!profil || !stage) return <p className="text-center mt-20">Chargement...</p>;

  return (
    <div className="bg-gray-100 min-h-screen pb-10">
      <NavBar2 />
      <div className="max-w-4xl mx-auto mt-24 px-6">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">
          Bienvenue {profil.prenom}
        </h2>

        {/* Profil */}
        <div className="bg-white rounded-xl shadow p-6 mb-6">
          <h3 className="text-xl font-semibold text-orange-500 mb-4">Profil</h3>
          <div className="grid grid-cols-2 gap-4 text-gray-700">
            <p><strong>Nom :</strong> {profil.nom}</p>
            <p><strong>Prénom :</strong> {profil.prenom}</p>
            <p><strong>Email :</strong> {profil.email}</p>
            <p><strong>Université :</strong> {profil.universite}</p>
            <p><strong>Filière :</strong> {profil.filiere}</p>
            <p><strong>Niveau :</strong> {profil.niveau}</p>
          </div>
        </div>

        {/* Stage */}
        <div className="bg-white rounded-xl shadow p-6 mb-6">
          <h3 className="text-xl font-semibold text-orange-500 mb-4">Stage</h3>
          <div className="text-gray-700">
            <p><strong>Thème :</strong> {stage.theme}</p>
            <p><strong>Date début :</strong> {stage.date_debut?.slice(0, 10)}</p>
            <p><strong>Date fin :</strong> {stage.date_fin?.slice(0, 10)}</p>
            <p><strong>Encadrant :</strong> {stage.encadrant}</p>

            <h4 className="mt-4 font-semibold">Avancement</h4>
            <div className="w-full bg-gray-300 rounded-full h-6 overflow-hidden mt-2 shadow-inner">
              <div
                className={`h-full text-white text-sm font-semibold flex items-center justify-center rounded-full transition-all duration-500 ${
                  calcAvancement() === 100 ? "bg-green-500" : "bg-orange-400"
                }`}
                style={{ width: `${calcAvancement()}%` }}
              >
                {calcAvancement()}%
              </div>
            </div>
          </div>
        </div>

        {/* Tâches */}
        <div className="bg-white rounded-xl shadow p-6">
          <h3 className="text-xl font-semibold text-orange-500 mb-4">Mes tâches</h3>
          <ul className="space-y-4">
            {taches.map((tache, index) => (
              <li key={index} className="border p-4 rounded-lg bg-gray-50">
                <div className="flex justify-between items-center mb-2">
                  <strong className="text-gray-800">{tache.titre}</strong>
                  <span className={`text-sm font-medium ${
                    tache.etat === "fait" ? "text-green-600" :
                    tache.etat === "en cours" ? "text-yellow-500" : "text-red-500"
                  }`}>
                    {tache.etat.toUpperCase()}
                  </span>
                </div>
                <select
                  className="w-full p-2 border rounded-md bg-white text-gray-700"
                  value={tache.etat}
                  onChange={(e) => changerEtat(index, e.target.value)}
                >
                  <option value="non fait">Non fait</option>
                  <option value="fait">Fait</option>
                </select>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Stagiaire;
