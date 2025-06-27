import React, { useState } from "react";
import { motion } from "framer-motion";
import NavBar2 from "../../../components/NavBar2";
import AdminSidebar from "../../../components/AdminSidebar";

const ModifierStage = () => {
  const [form, setForm] = useState({
    titre: "Développement Web",
    description: "Réalisation d'une application de gestion des tâches.",
    lieu: "Alger",
    dateDebut: "2024-07-01",
    dateFin: "2024-09-01",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Stage modifié :", form);
    // 👉 Ici tu peux envoyer les données vers ton backend avec Axios ou Fetch
  };

  return (
    <div className="p-8" id="formulaire-stage">
      <NavBar2 />
      <AdminSidebar />
      <motion.div
        className="max-w-xl mx-auto mt-10 p-6 bg-gray-200 rounded-lg shadow-md"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
          Modifier un Stage
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Titre du stage
            </label>
            <input
              type="text"
              name="titre"
              value={form.titre}
              onChange={handleChange}
              required
              className="w-full mt-1 p-2 border rounded-md focus:ring-2 focus:ring-orange-400"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Description
            </label>
            <textarea
              name="description"
              value={form.description}
              onChange={handleChange}
              required
              className="w-full mt-1 p-2 border rounded-md focus:ring-2 focus:ring-orange-400"
              rows="4"
            />
          </div>


          <div className="flex gap-4">
            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-700">
                Date de début
              </label>
              <input
                type="date"
                name="dateDebut"
                value={form.dateDebut}
                onChange={handleChange}
                required
                className="w-full mt-1 p-2 border rounded-md focus:ring-2 focus:ring-orange-400"
              />
            </div>

            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-700">
                Date de fin
              </label>
              <input
                type="date"
                name="dateFin"
                value={form.dateFin}
                onChange={handleChange}
                required
                className="w-full mt-1 p-2 border rounded-md focus:ring-2 focus:ring-orange-400"
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-gray-600 text-white py-2 rounded-md hover:bg-orange-800 transition"
          >
            Enregistrer les modifications
          </button>
        </form>
      </motion.div>
    </div>
  );
};

export default ModifierStage;
