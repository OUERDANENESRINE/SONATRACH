import React from "react";
import { useNavigate } from "react-router-dom";
import NavBar2 from "../components/NavBar2";

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
    {
      id: 3,
      theme: "Application mobile RH",
      dateDebut: "01/03/2025",
      dateFin: "31/08/2025",
      etat: "En cours",
    },
    {
      id: 4,
      theme: "Portail interne Sonatrach",
      dateDebut: "01/04/2025",
      dateFin: "30/09/2025",
      etat: "Non démarré",
    },
  ];

  const voirDetails = (id) => {
    navigate(`/encadreur/stage/${id}`);
  };

  return (
    <div className="bg-gray-100 min-h-screen pb-10">
      <NavBar2 />
      
      <div className="max-w-5xl mx-auto mt-24 px-6">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">
          Mes stages encadrés
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {stages.map((stage) => (
            <div
              key={stage.id}
              className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl cursor-pointer transition-all"
              onClick={() => voirDetails(stage.id)}
            >
              <h3 className="text-xl font-semibold text-orange-500 mb-2">
                {stage.theme}
              </h3>
              <p className="text-gray-700 mb-1">
                <strong>Date :</strong> {stage.dateDebut} ➝ {stage.dateFin}
              </p>
              <p className="text-gray-700 mb-3">
                <strong>État :</strong>{" "}
                <span
                  className={`font-semibold ${
                    stage.etat === "Fini"
                      ? "text-green-600"
                      : stage.etat === "En cours"
                      ? "text-blue-500"
                      : "text-gray-500"
                  }`}
                >
                  {stage.etat}
                </span>
              </p>
              <p className="text-sm text-orange-400 font-semibold">Voir détails ⟶</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Encadreur;
