import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import NavBar2 from "../../../components/NavBar2";
import AdminSidebar from "../../../components/AdminSidebar";

const ModifierAdmin = () => {
  // Valeurs par défaut simulées (à remplacer par un fetch API)
  const [form, setForm] = useState({
    nom: "Dupont",
    prenom: "Jean",
    email: "admin@example.com",
    motdepasse:"",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Admin modifié :", form);
    // 👉 Ici tu envoies le form vers ton backend pour mise à jour
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
          Modifier un Administrateur
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Nom</label>
            <input
              type="text"
              name="nom"
              value={form.nom}
              onChange={handleChange}
              required
              className="w-full mt-1 p-2 border rounded-md focus:ring-2 focus:ring-orange-400"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Prénom</label>
            <input
              type="text"
              name="prenom"
              value={form.prenom}
              onChange={handleChange}
              required
              className="w-full mt-1 p-2 border rounded-md focus:ring-2 focus:ring-orange-400"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
              className="w-full mt-1 p-2 border rounded-md focus:ring-2 focus:ring-orange-400"
            />
          </div>

          <div>
    <label className="block text-sm font-medium text-gray-700">Mot de passe</label>
    <input
      type="password"
      name="motdepasse"
      value={form.motdepasse}
      onChange={handleChange}
      className="w-full mt-1 p-2 border rounded-md focus:ring-2 focus:ring-orange-400"
      placeholder="Nouveau mot de passe"
      autoComplete="new-password"
    />
    <span className="text-xs text-gray-500">Laisser vide pour ne pas changer</span>
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

export default ModifierAdmin;
