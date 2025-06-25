import NavBar2 from "../components/NavBar2";
import AdminSidebar from "../components/AdminSidebar";
import ProgressBar from "react-bootstrap/ProgressBar";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";


function CreateStage() {
  
  const [theme, setTheme] = useState("");
  const [dateDebut, setDateDebut] = useState("");
  const [dateFin, setDateFin] = useState("");
  const [duree, setDuree] = useState("");
  const [encadrant, setEncadrant] = useState("");
  const [stagiaires, setStagiaires] = useState([
  { nom: "", prenom: "" },
  { nom: "", prenom: "" }
]);

  // Calcul automatique de la durée
  useEffect(() => {
    if (dateDebut && dateFin) {
      const start = new Date(dateDebut);
      const end = new Date(dateFin);
      const diff = Math.ceil((end - start) / (1000 * 60 * 60 * 24));
      setDuree(diff > 0 ? `${diff} jours` : "");
    }
  }, [dateDebut, dateFin]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ theme, dateDebut, dateFin, duree, encadrant, stagiaires });
    // Envoi vers backend ici
  };

  return (
    <div className="p-8 " id="formulaire-stage">
      <NavBar2 />
      <AdminSidebar />
       <motion.div
      className="max-w-2xl mx-auto p-6 bg-gray-200 shadow-lg rounded-lg mt-10"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Créer un Stage</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Nom du thème</label>
          <input
            type="text"
            className="mt-1 w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400"
            value={theme}
            onChange={(e) => setTheme(e.target.value)}
            required
          />
        </div>

        <div className="flex gap-4">
          <div className="flex-1">
            <label className="block text-sm font-medium text-gray-700">Date de début</label>
            <input
              type="date"
              className="mt-1 w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400"
              value={dateDebut}
              onChange={(e) => setDateDebut(e.target.value)}
              required
            />
          </div>

          <div className="flex-1">
            <label className="block text-sm font-medium text-gray-700">Date de fin</label>
            <input
              type="date"
              className="mt-1 w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400"
              value={dateFin}
              onChange={(e) => setDateFin(e.target.value)}
              required
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Durée</label>
          <input
            type="text"
            value={duree}
            className="mt-1 w-full px-4 py-2 border rounded-md bg-gray-100 text-gray-600"
            disabled
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Nom de l'encadrant</label>
          <input
            type="text"
            className="mt-1 w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400"
            value={encadrant}
            onChange={(e) => setEncadrant(e.target.value)}
            required
          />
        </div>


        <div>
        <label className="block text-sm font-medium text-gray-700">Stagiaires</label>
        {stagiaires.map((s, i) => (
            <div key={i} className="flex gap-2 mb-2">
            <input
                type="text"
                placeholder={`Nom ${i + 1}`}
                className="w-1/2 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400"
                value={s.nom}
                onChange={e => {
                const newStagiaires = [...stagiaires];
                newStagiaires[i].nom = e.target.value;
                setStagiaires(newStagiaires);
                }}
                required={i === 0}
            />
            <input
                type="text"
                placeholder={`Prénom ${i + 1}`}
                className="w-1/2 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400"
                value={s.prenom}
                onChange={e => {
                const newStagiaires = [...stagiaires];
                newStagiaires[i].prenom = e.target.value;
                setStagiaires(newStagiaires);
                }}
                required={i === 0}
            />
            </div>
        ))}
        </div>

        <button
          type="submit"
          className="w-full bg-gray-600 text-white py-2 rounded-md hover:bg-orange-800 transition"
        >
          Créer le stage
        </button>
      </form>
    </motion.div>
    </div>
  );
}

export default CreateStage;
