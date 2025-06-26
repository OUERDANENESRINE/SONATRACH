import { useState } from "react";
import ProgressBar from "react-bootstrap/ProgressBar";
import NavBar2 from "../components/NavBar2";

function Stagiaire() {
  const [taches, setTaches] = useState([
    { titre: "Étude du cahier des charges", etat: "fait" },
    { titre: "Développement du formulaire de login", etat: "fait" },
    { titre: "Remise du rapport init", etat: "non fait" },
    { titre: "Remise du rapport final", etat: "non fait" },
  ]);

  const changerEtat = (index, nouvelEtat) => {
    const nouvellesTaches = [...taches];
    nouvellesTaches[index].etat = nouvelEtat;
    setTaches(nouvellesTaches);
  };

  const calcAvancement = () => {
    const total = taches.length;
    const faites = taches.filter((t) => t.etat === "fait").length;
    return Math.round((faites / total) * 100);
  };

  return (
    <div className="bg-gray-100 min-h-screen pb-10">
      <NavBar2 />
      <div className="max-w-4xl mx-auto mt-24 px-6">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">
          Bienvenue Stagiaire
        </h2>

        {/* Profil */}
        <div className="bg-white rounded-xl shadow p-6 mb-6">
          <h3 className="text-xl font-semibold text-orange-500 mb-4">Profil</h3>
          <div className="grid grid-cols-2 gap-4 text-gray-700">
            <p><strong>Nom :</strong> Ouerdane</p>
            <p><strong>Prénom :</strong> Nesrine</p>
            <p><strong>Email :</strong> stagiaire@sonatrach.dz</p>
            <p><strong>Université :</strong> USTHB</p>
            <p><strong>Département :</strong> Informatique</p>
            <p><strong>Niveau :</strong> Master 2</p>
            <p><strong>Spécialité :</strong> Génie logiciel</p>
          </div>
        </div>

        {/* Stage */}
        <div className="bg-white rounded-xl shadow p-6 mb-6">
          <h3 className="text-xl font-semibold text-orange-500 mb-4">Stage</h3>
          <div className="text-gray-700">
            <p><strong>Thème :</strong> Gestion des stagiaires</p>
            <p><strong>Description :</strong> BLA BLA BLA .....</p>
            <p><strong>Date début :</strong> 01/01/2025</p>
            <p><strong>Date fin :</strong> 12/12/2025</p>
            <p><strong>Encadreur :</strong> Hamissi</p>

            <h4 className="mt-4 font-semibold">Avancement</h4>
           <div className="w-full bg-gray-300 rounded-full h-6 overflow-hidden mt-2 shadow-inner">
  <div
    className={`h-full text-white text-sm font-semibold flex items-center justify-center rounded-full transition-all duration-500 ${
      calcAvancement() === 100
        ? "bg-green-500"
        : "bg-orange-400"
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
                    tache.etat === "fait"
                      ? "text-green-600"
                      : tache.etat === "en cours"
                      ? "text-yellow-500"
                      : "text-red-500"
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
