import React, { useState } from "react";

function CreateEncadreur() {
  const [encadreur, setEncadreur] = useState({ nom: "", prenom: "", email: "", service: "" });

  const handleChange = (e) => {
    setEncadreur({ ...encadreur, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Nouvel encadreur :", encadreur);
    setEncadreur({ nom: "", prenom: "", email: "", service: "" });
  };

  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold mb-4 text-orange-700">Créer un encadreur</h2>
      <form onSubmit={handleSubmit} className="bg-white p-6 shadow rounded space-y-4 max-w-lg">
        <input name="nom" value={encadreur.nom} onChange={handleChange} placeholder="Nom" className="w-full border p-2 rounded" required />
        <input name="prenom" value={encadreur.prenom} onChange={handleChange} placeholder="Prénom" className="w-full border p-2 rounded" required />
        <input type="email" name="email" value={encadreur.email} onChange={handleChange} placeholder="Email" className="w-full border p-2 rounded" required />
        <input name="service" value={encadreur.service} onChange={handleChange} placeholder="Service ou département" className="w-full border p-2 rounded" required />
        <button type="submit" className="bg-orange-600 text-white px-4 py-2 rounded hover:bg-orange-700">Créer l'encadreur</button>
      </form>
    </div>
  );
}

export default CreateEncadreur;
