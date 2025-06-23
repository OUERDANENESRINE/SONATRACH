import React, { useState } from "react";

function CreateStagiaire() {
  const [stagiaire, setStagiaire] = useState({ nom: "", prenom: "", email: "", etablissement: "" });

  const handleChange = (e) => {
    setStagiaire({ ...stagiaire, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Nouveau stagiaire :", stagiaire);
    setStagiaire({ nom: "", prenom: "", email: "", etablissement: "" });
  };

  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold mb-4 text-orange-700">Ajouter un stagiaire</h2>
      <form onSubmit={handleSubmit} className="bg-white p-6 shadow rounded space-y-4 max-w-lg">
        <input name="nom" value={stagiaire.nom} onChange={handleChange} placeholder="Nom" className="w-full border p-2 rounded" required />
        <input name="prenom" value={stagiaire.prenom} onChange={handleChange} placeholder="Prénom" className="w-full border p-2 rounded" required />
        <input type="email" name="email" value={stagiaire.email} onChange={handleChange} placeholder="Email" className="w-full border p-2 rounded" required />
        <input name="etablissement" value={stagiaire.etablissement} onChange={handleChange} placeholder="Établissement" className="w-full border p-2 rounded" required />
        <button type="submit" className="bg-orange-600 text-white px-4 py-2 rounded hover:bg-orange-700">Ajouter le stagiaire</button>
      </form>
    </div>
  );
}

export default CreateStagiaire;
