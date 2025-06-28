// src/pages/Encadreur.jsx
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import NavBar2 from "../components/NavBar2";

function Encadreur() {
  const navigate = useNavigate();
  const [stages, setStages] = useState([]);
  const encadrantId = 1; // ← change ça si besoin

  useEffect(() => {
    axios.get(`http://localhost:5000/api/encadreurs/${encadrantId}/stages`)
      .then((res) => {
        setStages(res.data);
      })
      .catch((err) => {
        console.error("Erreur lors de la récupération des stages :", err);
      });
  }, []);

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

        {stages.length === 0 ? (
          <p className="text-center text-gray-600">Aucun stage trouvé.</p>
        ) : (
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
                  <strong>Date :</strong>{" "}
                  {new Date(stage.date_debut).toLocaleDateString()} ➝{" "}
                  {new Date(stage.date_fin).toLocaleDateString()}
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
                <p className="text-sm text-orange-400 font-semibold">
                  Voir détails ⟶
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Encadreur;
